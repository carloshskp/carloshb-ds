import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { cn } from '../../../utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-zinc-700 text-text-zinc-200 hover:bg-zinc-600',
        accent: 'bg-gradient-to-r from-accent-emerald to-accent-lime text-zinc-900',
        outline: 'border border-zinc-400-alpha-30 text-text-zinc-200 bg-transparent hover:bg-zinc-800-alpha-50',
        muted: 'bg-zinc-800-alpha-50 text-text-zinc-400',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge component for displaying labels, tags, and categories.
 * 
 * @example Default badge
 * ```tsx
 * <Badge>React</Badge>
 * ```
 * 
 * @example Accent badge
 * ```tsx
 * <Badge variant="accent">TypeScript</Badge>
 * ```
 * 
 * @example Outline badge with custom size
 * ```tsx
 * <Badge variant="outline" size="lg">Node.js</Badge>
 * ```
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
