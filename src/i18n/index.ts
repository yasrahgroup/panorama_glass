import type { Language } from '@/types';
import { ar } from './ar';
import { en } from './en';

export const translations = {
  en,
  ar,
} as const;

export type Translations = typeof translations;

export function useTranslations(language: Language) {
  return translations[language];
}
