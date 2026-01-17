import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle, Info } from 'lucide-react';

import { cn } from '../../../utils';

const alertVariants = cva(
  'relative p-4 rounded-lg border flex items-start gap-3 animate-[slideDown_0.2s_ease-out]',
  {
    variants: {
      variant: {
        error: 'bg-red-900/20 border-red-500/50 text-red-400',
        success: 'bg-emerald-900/20 border-emerald-500/50 text-emerald-400',
        warning: 'bg-amber-900/20 border-amber-500/50 text-amber-400',
        info: 'bg-blue-900/20 border-blue-500/50 text-blue-400',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

const defaultIcons: Record<NonNullable<VariantProps<typeof alertVariants>['variant']>, ReactNode> = {
  error: <AlertCircle className="w-5 h-5 flex-shrink-0" />,
  success: <CheckCircle2 className="w-5 h-5 flex-shrink-0" />,
  warning: <AlertTriangle className="w-5 h-5 flex-shrink-0" />,
  info: <Info className="w-5 h-5 flex-shrink-0" />,
};

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /** Optional title for the alert */
  title?: string;
  /** Custom icon to override the default */
  icon?: ReactNode;
  /** Hide the icon entirely */
  hideIcon?: boolean;
}

/**
 * Alert component for displaying messages with different severity levels.
 * 
 * @example Error alert
 * ```tsx
 * <Alert variant="error">
 *   Não foi possível enviar o formulário.
 * </Alert>
 * ```
 * 
 * @example Success alert with title
 * ```tsx
 * <Alert variant="success" title="Sucesso!">
 *   Sua mensagem foi enviada com sucesso.
 * </Alert>
 * ```
 */
const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, icon, hideIcon = false, children, ...props }, ref) => {
    const IconComponent = icon ?? defaultIcons[variant ?? 'info'];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {!hideIcon && (
          <span aria-hidden="true">
            {IconComponent}
          </span>
        )}
        <div className="flex-1 min-w-0">
          {title && (
            <p className="font-semibold mb-1">{title}</p>
          )}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    );
  },
);

Alert.displayName = 'Alert';

export { Alert, alertVariants };
