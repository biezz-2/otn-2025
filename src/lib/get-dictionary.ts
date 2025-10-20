import 'server-only';
import type { Locale } from './i18n-config';

// Minimal dictionary type to satisfy places where we access common keys.
export type NavbarDictionary = {
  home: string;
  about: string;
  contact: string;
  openMenu: string;
  [key: string]: string;
};

export type FooterDictionary = {
  brandDescription: string;
  quickLinks: string;
  home: string;
  about: string;
  contact: string;
  followUs: string;
  copyright: string;
  [key: string]: string;
};

export type Dictionary = {
  metadata: { title: string; description: string };
  navbar: NavbarDictionary;
  footer: FooterDictionary;
  homePage: {
    hero: { title: string; subtitle: string; exploreButton: string };
    featured: any;
    latestNews: {
      title: string;
      quantum: any;
      greenTech: any;
      readMore: string;
    };
  };
  [key: string]: any;
};

// We enumerate all dictionaries here for better linting and typescript support
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('../dictionaries/en.json').then((module) => module.default as unknown as Dictionary),
  id: () => import('../dictionaries/id.json').then((module) => module.default as unknown as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => dictionaries[locale]();
