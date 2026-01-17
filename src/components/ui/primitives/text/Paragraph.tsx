import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../../../../utils';

export type ParagraphSize = 'xs' | 'sm' | 'base' | 'lg';

export type ParagraphVariant = 'default' | 'muted' | 'accent';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  variant?: ParagraphVariant;
}

const sizeClasses: Record<ParagraphSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
};

const variantClasses: Record<ParagraphVariant, string> = {
  default: 'text-text-zinc-200',
  muted: 'text-text-zinc-400',
  accent: 'text-accent-lime',
};

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ size = 'base', variant = 'default', className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'leading-relaxed',
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {children}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';
