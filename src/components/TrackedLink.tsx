import React from 'react';
import { useGA4 } from '@/hooks/use-ga4';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const TrackedLink: React.FC<TrackedLinkProps> = ({
  href,
  children,
  className,
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
  ...props
}) => {
  const { trackExternalLink } = useGA4();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the external link click
    trackExternalLink(href, typeof children === 'string' ? children : undefined);
    
    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}; 