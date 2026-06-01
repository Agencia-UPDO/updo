"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * RouteTracker — envia virtual_page_view para o GTM a cada troca de rota SPA.
 *
 * Problema que resolve:
 *   O Next.js 16 com Turbopack às vezes não atualiza document.title
 *   imediatamente na navegação client-side. Usar um timer fixo capturaria
 *   o título errado. A abordagem correta é monitorar o elemento <title> via
 *   MutationObserver e disparar o evento somente quando o título realmente
 *   mudar para o da nova página.
 */

const FALLBACK_MS = 1500; // tempo máximo de espera pelo título correto

export function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstView = useRef(true);
  const prevTitleRef = useRef<string>("");

  useEffect(() => {
    // Guarda o título da página atual no primeiro mount
    prevTitleRef.current = document.title;
  }, []);

  useEffect(() => {
    // Pula o disparo no carregamento inicial (GTM já envia o hit de entrada)
    if (isFirstView.current) {
      isFirstView.current = false;
      prevTitleRef.current = document.title;
      return;
    }

    const queryString = searchParams.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;
    const titleAtNavigationStart = prevTitleRef.current;

    const pushPageView = (title: string) => {
      const w = window as Window & {
        dataLayer?: Record<string, unknown>[];
      };
      w.dataLayer?.push({
        event: "virtual_page_view",
        page_location: window.location.href,
        page_path: pagePath,
        page_title: title,
      });
      prevTitleRef.current = title;
    };

    const titleEl =
      document.querySelector("title") as HTMLTitleElement | null;

    let observer: MutationObserver | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
    let fired = false;

    const fire = (title: string) => {
      if (fired) return;
      fired = true;
      observer?.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
      pushPageView(title);
    };

    if (titleEl) {
      // Observa mudanças no conteúdo do <title>
      observer = new MutationObserver(() => {
        const newTitle = document.title;
        // Só dispara quando o título mudou em relação ao início da navegação
        if (newTitle && newTitle !== titleAtNavigationStart) {
          fire(newTitle);
        }
      });
      observer.observe(titleEl, { subtree: true, childList: true, characterData: true });
    }

    // Fallback: se o <title> não mudar em FALLBACK_MS, envia com o que tiver
    fallbackTimer = setTimeout(() => {
      fire(document.title);
    }, FALLBACK_MS);

    return () => {
      observer?.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [pathname, searchParams]);

  return null;
}
