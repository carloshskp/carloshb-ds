import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes CSS usando clsx e tailwind-merge.
 * 
 * @param inputs - Classes CSS a serem combinadas
 * @returns String com classes CSS combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Filtra props que não são válidas para elementos DOM nativos.
 * Remove props de componentes React customizados e outras props que não devem ser passadas para o DOM.
 * 
 * @param props - Objeto com props a serem filtradas
 * @returns Objeto com apenas props válidas para elementos DOM
 */
export function filterDOMProps<T extends Record<string, unknown>>(props: T): Partial<T> {
  const filtered: Partial<T> = {};
  
  // Lista de props que não devem ser passadas para elementos DOM
  const invalidProps = new Set([
    // Props de componentes React customizados comuns
    'variant',
    'size',
    'isLoading',
    'leftIcon',
    'rightIcon',
    'invalid',
    'as',
    'orientation',
    'step',
    'currentStep',
    'totalSteps',
    'label',
    'showLine',
    'status',
    'flipped',
    'frontContent',
    'backContent',
    'onFlip',
    'withGradient',
    'icon',
    'hideIcon',
    'title',
    'required',
    'hint',
    'error',
    'steps',
  ]);
  
  for (const key in props) {
    // Ignora props que começam com $ ou _
    if (key.startsWith('$') || key.startsWith('_')) {
      continue;
    }
    
    // Ignora props que contêm caracteres especiais inválidos (como %)
    if (key.includes('%') || key.includes('{') || key.includes('}')) {
      continue;
    }
    
    // Ignora props conhecidas como inválidas
    if (invalidProps.has(key)) {
      continue;
    }
    
    // Mantém todas as outras props (incluindo aria-*, data-*, etc.)
    filtered[key] = props[key];
  }
  
  return filtered;
}
