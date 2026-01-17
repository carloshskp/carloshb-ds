import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '../../../utils';

/* ---------------------------------- Root ---------------------------------- */

const sectionVariants = cva(
  'relative overflow-hidden rounded-xl border backdrop-blur-[10px]',
  {
    variants: {
      variant: {
        default: 'bg-zinc-800-alpha-80 border-zinc-400-alpha-10 p-6',
        card: 'bg-zinc-800-alpha-80 border-zinc-400-alpha-10 p-6',
      },
      withGradient: {
        true: 'before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-accent-top before:opacity-80',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      withGradient: true,
    },
  },
);

export interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: 'section' | 'div' | 'article';
}

/**
 * Section component for content sections with glassmorphism styling.
 * 
 * @example
 * ```tsx
 * <Section>
 *   <Section.Header icon={<User />}>
 *     <Heading as="h2">Sobre</Heading>
 *   </Section.Header>
 *   <Section.Content>
 *     <Paragraph>Conteúdo da seção...</Paragraph>
 *   </Section.Content>
 * </Section>
 * ```
 */
const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, variant, withGradient, as = 'section', children, ...props }, ref) => {
    const Component = as;
    
    return (
      <Component
        ref={ref}
        className={cn(sectionVariants({ variant, withGradient }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Section.displayName = 'Section';

/* --------------------------------- Header --------------------------------- */

const sectionHeaderVariants = cva(
  'flex items-center gap-3 text-text-zinc-200',
  {
    variants: {
      size: {
        sm: 'mb-3',
        md: 'mb-4',
        lg: 'mb-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export interface SectionHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeaderVariants> {
  icon?: ReactNode;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, icon, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sectionHeaderVariants({ size }), className)}
        {...props}
      >
        {icon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
      </div>
    );
  },
);

SectionHeader.displayName = 'Section.Header';

/* --------------------------------- Content -------------------------------- */

export type SectionContentProps = HTMLAttributes<HTMLDivElement>;

const SectionContent = forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('text-text-zinc-200', className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

SectionContent.displayName = 'Section.Content';

/* -------------------------------- Compound -------------------------------- */

const SectionCompound = Object.assign(Section, {
  Header: SectionHeader,
  Content: SectionContent,
});

export {
  SectionCompound as Section,
  SectionHeader,
  SectionContent,
  sectionVariants,
  sectionHeaderVariants,
};

