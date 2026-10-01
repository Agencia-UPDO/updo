'use client';

'use client';

import { useLayoutEffect, useState, type RefObject } from 'react';

export const useTabIndicator = (
  activeIndex: number,
  tabRefs: RefObject<(HTMLButtonElement | null)[]>,
  containerRef: RefObject<HTMLElement | null>
) => {
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const update = () => {
      const button = tabRefs.current[activeIndex];
      if (!button) return;
      setBarStyle({ left: button.offsetLeft, width: button.offsetWidth });
    };

    update();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(update);
    observer.observe(container);

    return () => observer.disconnect();
  }, [activeIndex, containerRef, tabRefs]);

  return barStyle;
};
