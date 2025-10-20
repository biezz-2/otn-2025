import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './lib/i18n-config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip internal paths and static files
  if (pathname.startsWith('/_next/') || 
      pathname.startsWith('/api/') ||
      pathname.includes('.')) {
    return NextResponse.next();
  }

  // Check if the pathname has a locale
  const pathnameHasLocale = i18n.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect to the default locale
    return NextResponse.redirect(
      new URL(
        `/${i18n.defaultLocale}${pathname === '/' ? '' : pathname}`,
        request.url
      )
    );
  }

  return NextResponse.next();
}

// Only run middleware on navigation requests
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|public|.*\\..*|favicon.ico).*)",
  ],
};
