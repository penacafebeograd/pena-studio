import React, { useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { Content } from '../i18n';
import { SalonDemo } from './demos/SalonDemo';
import { GymDemo } from './demos/GymDemo';

interface InteractiveDemoModalProps {
  demoType: 'salon' | 'gym' | null;
  onClose: () => void;
  onOpenStandalone?: (type: 'salon' | 'gym') => void;
  lang: Language;
  t: Content;
}

/**
 * The outer shell holds no hooks, so the early return is unambiguously safe and
 * the `react-hooks` lint rule stays happy. The demo bodies own their own state
 * and mount fresh on each open, which also resets the sandbox between openings.
 */
export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = (
  props,
) => {
  if (!props.demoType) return null;
  return <DemoModal {...props} demoType={props.demoType} />;
};

const DemoModal: React.FC<
  InteractiveDemoModalProps & { demoType: 'salon' | 'gym' }
> = ({ demoType, onClose, onOpenStandalone, lang, t }) => {
  const d = t.ui.demo;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape closes; the page behind the overlay must not scroll.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  // Keep tab focus inside the dialog.
  const onDialogKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => el.offsetParent !== null);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 dark:bg-black/75 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        onKeyDown={onDialogKeyDown}
        className="relative w-full max-w-4xl rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#161820] shadow-2xl overflow-hidden my-auto transition-colors duration-200"
      >
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-[#1c1e28] px-4 py-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              aria-hidden="true"
              className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 animate-pulse"
            ></span>
            <span
              id="demo-modal-title"
              className="font-mono text-xs font-bold text-slate-800 dark:text-stone-200 truncate"
            >
              {demoType === 'salon' ? d.salonTitle : d.gymTitle}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {onOpenStandalone && (
              <button
                onClick={() => onOpenStandalone(demoType)}
                className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 px-2.5 py-1 rounded-md font-mono hover:bg-teal-100 dark:hover:bg-teal-900/70 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                title={d.openStandalone}
              >
                <span>/demo/{demoType}</span>
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </button>
            )}

            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={d.close}
              title={d.close}
              className="rounded-lg p-1 text-slate-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 max-h-[82vh] overflow-y-auto bg-[#fafaf9] dark:bg-[#13151b]">
          {demoType === 'salon' ? <SalonDemo lang={lang} /> : <GymDemo lang={lang} />}

          <div className="mt-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-[#1c1e28] p-3.5 text-xs text-slate-600 dark:text-stone-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">
                {d.footerTitle}
              </span>{' '}
              {d.footerText}
            </div>
            <button
              onClick={onClose}
              className="font-bold text-teal-800 dark:text-teal-400 hover:text-teal-950 dark:hover:text-teal-300 underline self-start sm:self-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              {d.closeAndBack}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
