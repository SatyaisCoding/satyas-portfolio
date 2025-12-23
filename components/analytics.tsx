'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Plausible Analytics - Replace with your domain
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('pageview');
    }

    // Google Analytics 4 - Uncomment and add your measurement ID
    // if (typeof window !== 'undefined' && (window as any).gtag) {
    //   (window as any).gtag('config', 'G-XXXXXXXXXX', {
    //     page_path: pathname,
    //   });
    // }
  }, [pathname]);

  return null;
}

