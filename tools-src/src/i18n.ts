import { translations } from './translations';
import { uiStrings, UiContent } from './translations.ui';
import { Language, TranslationContent } from './types';

/** Marketing copy plus the chrome/demo strings, merged into one dictionary. */
export type Content = TranslationContent & { ui: UiContent };

export const getContent = (lang: Language): Content => ({
  ...translations[lang],
  ui: uiStrings[lang],
});

/** Minimal `{placeholder}` interpolation for the few strings that need values. */
export const fill = (
  template: string,
  values: Record<string, string | number>,
): string =>
  template.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  );
