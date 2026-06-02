"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function RoutePageviewHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    const timer = window.setTimeout(() => {
      const w = window as Window & {
        dataLayer?: Record<string, unknown>[];
      };

      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "page_view",
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}

export function RoutePageview() {
  return (
    <Suspense fallback={null}>
      <RoutePageviewHandler />
    </Suspense>
  );
}
