import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { cn } from '../../../utils';

const containerVariants = cva(
  'relative overflow-hidden rounded-2xl border backdrop-blur-[10px]',
  {
    variants: {
      variant: {
        default: 'bg-zinc-800-alpha-80 border-zinc-400-alpha-10 p-8',
        success: 'bg-zinc-800-alpha-80 border-zinc-400-alpha-10 p-12 text-center',
      },
      withGradient: {
        true: 'before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-accent-top before:opacity-80',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      withGradient: true,
    },
  },
);

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

/**
 * Container component with glassmorphism effect and optional gradient top border.
 * 
 * @example Default container
 * ```tsx
 * <Container>
 *   <h1>Content here</h1>
 * </Container>
 * ```
 * 
 * @example Success container
 * ```tsx
 * <Container variant="success">
 *   <CheckCircle className="w-20 h-20 text-green-400 mb-6 mx-auto" />
 *   <h2>Mensagem Enviada!</h2>
 * </Container>
 * ```
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, withGradient, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ variant, withGradient }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';

export { Container, containerVariants };
