"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const TRANSITION_DELAY_MS = 200;

function getInternalNavigationUrl(element: Element | null) {
  const anchor = element?.closest("a[href]") as HTMLAnchorElement | null;
  if (!anchor) return null;
  if (anchor.target && anchor.target !== "_self") return null;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return null;
  }

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin || url.href === window.location.href) {
    return null;
  }

  return `${url.pathname}${url.search}${url.hash}`;
}

export function RouteTransitionDelay() {
  const router = useRouter();
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      const nextUrl = getInternalNavigationUrl(event.target as Element | null);
      if (!nextUrl) return;

      event.preventDefault();

      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        router.push(nextUrl);
      }, TRANSITION_DELAY_MS);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      if (timer.current) {
        window.clearTimeout(timer.current);
      }
    };
  }, [router]);

  return null;
}
