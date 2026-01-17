import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

import { cn } from '../../../utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', invalid, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      data-invalid={invalid ? '' : undefined}
      className={cn(
        'w-full rounded-md border border-input-border bg-input-bg px-4 py-3 text-base text-input-text placeholder:text-text-zinc-400/80 shadow-inner transition-all duration-200 ease-in-out hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-glass data-[invalid]:border-destructive data-[invalid]:focus-visible:ring-destructive',
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  ),
);

Input.displayName = 'Input';

