import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CaseStudyContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'light';
  children?: React.ReactNode;
  zIndex?: number;
}

export function CaseStudyContainer({
  variant = 'dark',
  className,
  children,
  zIndex,
  style,
  ...props
}: CaseStudyContainerProps) {
  const variants = {
    dark: 'bg-[#101010] text-white',
    light: 'bg-[#fefcf4] text-[#101010]',
  };

  return (
    <div
      className={cn(
        'w-full rounded-t-[30px] rounded-b-none overflow-hidden',
        variants[variant],
        className
      )}
      style={{
        ...style,
        ...(zIndex !== undefined && { zIndex }),
      }}
      {...props}
    >
      {children}
    </div>
  );
}
