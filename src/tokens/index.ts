/**
 * Design Tokens
 * 
 * Placeholder para futura migração de tokens do Design System.
 * Os tokens CSS estão atualmente definidos em src/index.css e tailwind.config.js
 * 
 * TODO: Migrar tokens para este módulo quando a lib for standalone
 */

// Placeholder - tokens serão definidos aqui na fase de migração

export const tokens = {
  // Este objeto será populado com tokens reais na migração
  colors: {},
  spacing: {},
  typography: {},
  shadows: {},
  gradients: {},
} as const;

// Export type para uso com TypeScript
export type Tokens = typeof tokens;
