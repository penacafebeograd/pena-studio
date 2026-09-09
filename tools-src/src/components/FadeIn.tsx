import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  direction?: 'up' | 'none';
  threshold?: number;
  rootMargin?: string;
  id?: string;
}

/** If the observer has not reported anything by now, just show the content. */
const REVEAL_FALLBACK_MS = 1200;

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 600,
  direction = 'up',
  threshold = 0.08,
  rootMargin = '0px 0px -40px 0px',
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    // Respect user accessibility settings for reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Anything already on screen at mount is shown straight away. Without this
    // the first viewport depends entirely on the observer firing.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    // A working observer reports once on observe() even when the element is
    // off screen. That first report is what tells us the observer is alive.
    let observerReported = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        observerReported = true;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);

    // Safety net: the animation is decoration, so it must never be the reason
    // content stays invisible. Only applies when the observer never reported at
    // all (throttled, blocked, or inert in some embedded views) — otherwise the
    // scroll reveal is left to work normally.
    const fallback = window.setTimeout(() => {
      if (!observerReported) setIsVisible(true);
    }, REVEAL_FALLBACK_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold, rootMargin]);

  const transformStyle =
    direction === 'up'
      ? isVisible
        ? 'translateY(0)'
        : 'translateY(16px)'
      : 'none';

  return (
    <div
      id={id}
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: transformStyle,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
