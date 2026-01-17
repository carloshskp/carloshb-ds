import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import type { ReactNode, AnchorHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { cn } from '../../../utils';

const linkButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-accent-emerald to-accent-lime text-zinc-900 shadow-ds-soft hover:brightness-105 transform hover:scale-105',
        secondary:
          'border border-border-soft bg-surface-soft text-text-zinc-200 hover:bg-surface-glass transform hover:scale-105',
        outlined:
          'border border-accent-emerald bg-gradient-to-r from-accent-emerald to-accent-lime bg-clip-text text-transparent hover:border-accent-lime hover:bg-emerald-500-alpha-15 transform hover:scale-105 [&>span[aria-hidden="true"]_svg]:stroke-accent-emerald [&>span[aria-hidden="true"]_svg]:fill-accent-emerald',
        ghost: 'text-text-zinc-200 hover:bg-surface-soft/60',
        cta: 'rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 text-zinc-900 shadow-lg shadow-lime-500/30 hover:brightness-105 hover:scale-[1.02] duration-200',
        linkedin: 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface LinkButtonProps
  extends Omit<LinkProps, 'className'>,
    VariantProps<typeof linkButtonVariants> {
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/**
 * LinkButton component - A styled link that looks like a button.
 * Uses react-router-dom's Link component internally.
 * 
 * @example Primary link button
 * ```tsx
 * <LinkButton to="/about">Saiba mais</LinkButton>
 * ```
 * 
 * @example Secondary with icon
 * ```tsx
 * <LinkButton to="/" variant="secondary" leftIcon={<ArrowLeft />}>
 *   Voltar
 * </LinkButton>
 * ```
 * 
 * @example CTA button
 * ```tsx
 * <LinkButton to="/contact" variant="cta" size="xl">
 *   Quero saber mais...
 * </LinkButton>
 * ```
 */
const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(linkButtonVariants({ variant, size }), className)}
        {...props}
      >
        {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </Link>
    );
  },
);

LinkButton.displayName = 'LinkButton';

/* ----------------------------- External Link ------------------------------ */

export interface ExternalLinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>,
    VariantProps<typeof linkButtonVariants> {
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href: string;
}

/**
 * ExternalLinkButton component - A styled external link that looks like a button.
 * Opens in a new tab with proper security attributes.
 * 
 * @example LinkedIn link
 * ```tsx
 * <ExternalLinkButton 
 *   href="https://linkedin.com/in/user"
 *   variant="linkedin"
 *   leftIcon={<Linkedin />}
 * >
 *   LinkedIn
 * </ExternalLinkButton>
 * ```
 */
const ExternalLinkButton = forwardRef<HTMLAnchorElement, ExternalLinkButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(linkButtonVariants({ variant, size }), className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </a>
    );
  },
);

ExternalLinkButton.displayName = 'ExternalLinkButton';

export { LinkButton, ExternalLinkButton, linkButtonVariants };

