import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../../../../utils';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export type HeadingVariant = 'default' | 'accent' | 'muted';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  variant?: HeadingVariant;
}

const sizeClasses: Record<HeadingSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
};

const variantClasses: Record<HeadingVariant, string> = {
  default: 'text-text-zinc-100',
  accent: 'text-accent-lime',
  muted: 'text-text-zinc-300',
};

const defaultSizeByLevel: Record<HeadingLevel, HeadingSize> = {
  h1: '4xl',
  h2: '3xl',
  h3: '2xl',
  h4: 'xl',
  h5: 'lg',
  h6: 'base',
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, size, variant = 'default', className, children, ...props }, ref) => {
    const Component = as || 'h2';
    const headingSize = size || defaultSizeByLevel[Component];

    return (
      <Component
        ref={ref}
        className={cn(
          'font-semibold leading-tight',
          sizeClasses[headingSize],
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Heading.displayName = 'Heading';
