import { forwardRef } from 'react';
import type { LabelHTMLAttributes } from 'react';
import { cn } from '../../../../utils';

export type LabelSize = 'xs' | 'sm' | 'base';

export type LabelVariant = 'default' | 'required' | 'muted';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: LabelSize;
  variant?: LabelVariant;
  required?: boolean;
}

const sizeClasses: Record<LabelSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
};

const variantClasses: Record<LabelVariant, string> = {
  default: 'text-text-zinc-200',
  required: 'text-text-zinc-200',
  muted: 'text-text-zinc-400',
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ size = 'sm', variant = 'default', required, className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'font-medium block',
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {children}
        {required && (
          <span className="ml-1 text-accent-amber" aria-hidden="true">
            *
          </span>
        )}
      </label>
    );
  },
);

Label.displayName = 'Label';
