import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../../../../utils';

export type TextSize = 'xs' | 'sm' | 'base' | 'lg';

export type TextVariant = 'default' | 'muted' | 'accent' | 'destructive';

export type TextElement = 'span' | 'div' | 'p';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextElement;
  size?: TextSize;
  variant?: TextVariant;
}

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
};

const variantClasses: Record<TextVariant, string> = {
  default: 'text-text-zinc-200',
  muted: 'text-text-zinc-400',
  accent: 'text-accent-lime',
  destructive: 'text-destructive',
};

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as: Component = 'span', size = 'base', variant = 'default', className, children, ...props }, ref) => {
    // Type assertion necessária: Component pode ser 'span', 'div' ou 'p', todos são HTMLElement
    // O ref é tipado como HTMLElement que é compatível com todos os elementos possíveis
    return (
      <Component
        ref={ref as never}
        className={cn(
          sizeClasses[size],
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

Text.displayName = 'Text';
