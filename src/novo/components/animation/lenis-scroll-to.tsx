'use client';

import { useLenis } from 'lenis/react';
import { type MouseEvent, type ReactNode } from 'react';

interface LenisScrollToProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  onComplete?: () => void;
}

const LenisScrollTo = ({ href, className, children, onClick, onComplete }: LenisScrollToProps) => {
  const lenis = useLenis();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (!lenis) return;

    event.preventDefault();
    lenis.scrollTo(href, {
      offset: -100,
      onComplete,
    });
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default LenisScrollTo;
