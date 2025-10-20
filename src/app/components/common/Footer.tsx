'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface FooterProps {
  dictionary: {
    brandDescription: string;
    quickLinks: string;
    home: string;
    about: string;
    contact: string;
    followUs: string;
    copyright: string;
  };
}

export default function Footer({ dictionary }: FooterProps) {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'en';

  const navigation = [
    { name: dictionary.home, href: `/${lang}` },
    { name: dictionary.about, href: `/${lang}/about` },
    { name: dictionary.contact, href: `/${lang}/contact` },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href={`/${lang}`} className="text-2xl font-bold text-blue-600">
              TechEra
            </Link>
            <p className="text-gray-600">{dictionary.brandDescription}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dictionary.quickLinks}</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dictionary.followUs}</h3>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="sr-only">{platform}</span>
                  {/* Placeholder for social icons */}
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>{dictionary.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}