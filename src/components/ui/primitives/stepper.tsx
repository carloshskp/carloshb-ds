import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { Check } from 'lucide-react';

import { cn, filterDOMProps } from '../../../utils';

/* ---------------------------------- Root ---------------------------------- */

const stepperRootVariants = cva('flex items-center justify-center', {
  variants: {
    orientation: {
      horizontal: 'flex-row gap-4',
      vertical: 'flex-col gap-4',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export interface StepperRootProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperRootVariants> {
  currentStep: number;
  totalSteps: number;
  children?: ReactNode;
}

const StepperRoot = forwardRef<HTMLDivElement, StepperRootProps>(
  ({ className, orientation, children, ...props }, ref) => {
    // Filtra props inválidas antes de passar para o DOM
    const validProps = filterDOMProps(props as Record<string, unknown>);
    
    return (
      <div
        ref={ref}
        className={cn(stepperRootVariants({ orientation }), className)}
        role="navigation"
        aria-label="Progresso do formulário"
        {...validProps}
      >
        {children}
      </div>
    );
  },
);

StepperRoot.displayName = 'Stepper.Root';

/* ---------------------------------- Item ---------------------------------- */

export interface StepperItemProps extends HTMLAttributes<HTMLDivElement> {
  step: number;
  currentStep: number;
  totalSteps: number;
  label?: string;
  showLine?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const StepperItem = forwardRef<HTMLDivElement, StepperItemProps>(
  ({ className, step, currentStep, totalSteps, label, showLine = true, orientation = 'horizontal', ...props }, ref) => {
    const status = currentStep > step ? 'completed' : currentStep === step ? 'current' : 'pending';
    const isLast = step === totalSteps;
    
    // Filtra props inválidas antes de passar para o DOM
    const validProps = filterDOMProps(props as Record<string, unknown>);

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center',
          orientation === 'horizontal' ? 'gap-4' : 'flex-col gap-2',
          className,
        )}
        {...validProps}
      >
        <StepperNumber step={step} status={status} label={label} />
        {showLine && !isLast && (
          <StepperLine status={status} orientation={orientation} />
        )}
      </div>
    );
  },
);

StepperItem.displayName = 'Stepper.Item';

/* --------------------------------- Number --------------------------------- */

const stepperNumberVariants = cva(
  'flex items-center justify-center rounded-full font-bold transition-all duration-300 flex-shrink-0',
  {
    variants: {
      status: {
        pending:
          'bg-zinc-800-alpha-50 border-2 border-zinc-400-alpha-30 text-text-zinc-400',
        current:
          'bg-gradient-to-br from-accent-emerald to-accent-lime border-2 border-emerald-500-alpha-60 text-text-zinc-100 shadow-[0_0_20px_hsl(var(--ds-emerald-500-alpha-30))]',
        completed:
          'bg-gradient-to-br from-accent-emerald to-accent-lime border-2 border-emerald-500-alpha-60 text-text-zinc-100 shadow-[0_0_20px_hsl(var(--ds-emerald-500-alpha-30))]',
      },
      size: {
        sm: 'w-8 h-8 text-sm',
        md: 'w-12 h-12 text-base',
        lg: 'w-14 h-14 text-lg',
      },
    },
    defaultVariants: {
      status: 'pending',
      size: 'md',
    },
  },
);

export interface StepperNumberProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperNumberVariants> {
  step: number;
  label?: string;
}

const StepperNumber = forwardRef<HTMLDivElement, StepperNumberProps>(
  ({ className, status, size, step, label, ...props }, ref) => {
    const isCompleted = status === 'completed';
    
    // Filtra props inválidas antes de passar para o DOM
    const validProps = filterDOMProps(props as Record<string, unknown>);

    return (
      <div
        ref={ref}
        className={cn(stepperNumberVariants({ status, size }), className)}
        aria-current={status === 'current' ? 'step' : undefined}
        aria-label={label ? `${label}: ${status === 'completed' ? 'Concluído' : status === 'current' ? 'Atual' : 'Pendente'}` : undefined}
        {...validProps}
      >
        {isCompleted ? (
          <Check className="w-5 h-5" aria-hidden="true" />
        ) : (
          step
        )}
      </div>
    );
  },
);

StepperNumber.displayName = 'Stepper.Number';

/* ---------------------------------- Line ---------------------------------- */

const stepperLineVariants = cva('transition-all duration-300', {
  variants: {
    status: {
      pending: 'bg-zinc-400-alpha-20',
      current: 'bg-zinc-400-alpha-20',
      completed: 'bg-gradient-to-r from-accent-emerald to-accent-lime',
    },
    orientation: {
      horizontal: 'w-16 h-0.5',
      vertical: 'w-0.5 h-16',
    },
  },
  defaultVariants: {
    status: 'pending',
    orientation: 'horizontal',
  },
});

export interface StepperLineProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperLineVariants> {}

const StepperLine = forwardRef<HTMLDivElement, StepperLineProps>(
  ({ className, status, orientation, ...props }, ref) => {
    // Filtra props inválidas antes de passar para o DOM
    const validProps = filterDOMProps(props as Record<string, unknown>);
    
    return (
      <div
        ref={ref}
        className={cn(stepperLineVariants({ status, orientation }), className)}
        aria-hidden="true"
        {...validProps}
      />
    );
  },
);

StepperLine.displayName = 'Stepper.Line';

/* -------------------------------- Compound -------------------------------- */

export interface StepperProps
  extends Omit<StepperRootProps, 'children'> {
  steps?: Array<{ label?: string; number?: number }>;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Stepper component for multi-step forms and wizards.
 * 
 * @example
 * ```tsx
 * <Stepper currentStep={2} totalSteps={5} />
 * ```
 * 
 * @example With custom steps
 * ```tsx
 * <Stepper 
 *   currentStep={2} 
 *   totalSteps={3}
 *   steps={[
 *     { label: 'Dados Pessoais' },
 *     { label: 'Endereço' },
 *     { label: 'Confirmação' }
 *   ]}
 * />
 * ```
 */
const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ currentStep, totalSteps, steps, orientation = 'horizontal', size = 'md', className, ...props }, ref) => {
    const stepArray = steps ?? Array.from({ length: totalSteps }, (_, i) => ({ number: i + 1 }));

    return (
      <StepperRoot
        ref={ref}
        currentStep={currentStep}
        totalSteps={totalSteps}
        orientation={orientation}
        className={className}
        {...props}
      >
        {stepArray.map((step, index) => {
          const stepNumber = step.number ?? index + 1;
          const stepLabel = 'label' in step ? step.label : undefined;
          const status = currentStep > stepNumber ? 'completed' : currentStep === stepNumber ? 'current' : 'pending';
          const isLast = index === stepArray.length - 1;

          return (
            <div
              key={stepNumber}
              className={cn(
                'flex items-center',
                orientation === 'horizontal' ? 'gap-4' : 'flex-col gap-2',
              )}
            >
              <StepperNumber
                step={stepNumber}
                status={status}
                size={size}
                label={stepLabel}
              />
              {!isLast && (
                <StepperLine status={status} orientation={orientation} />
              )}
            </div>
          );
        })}
      </StepperRoot>
    );
  },
);

Stepper.displayName = 'Stepper';

export { Stepper, StepperRoot, StepperItem, StepperNumber, StepperLine };

