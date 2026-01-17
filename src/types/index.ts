/**
 * Tipos compartilhados do Design System
 * 
 * Este módulo exporta tipos que podem ser usados pelos consumidores da biblioteca.
 */

import type { VariantProps } from 'class-variance-authority';

// Re-export de tipos de terceiros usados pelo DS
export type { VariantProps };

// Tipos de variantes comuns
export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';

// Tipo para componentes que aceitam className
export interface ClassNameProps {
  className?: string;
}

// Tipo para componentes que aceitam children
export interface ChildrenProps {
  children?: React.ReactNode;
}

// Tipo combinado comum
export interface BaseComponentProps extends ClassNameProps, ChildrenProps {}

// Tipo para componentes com ref
export type WithRef<T, E extends HTMLElement> = T & {
  ref?: React.Ref<E>;
};
