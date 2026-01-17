import React, { KeyboardEvent } from 'react';
import { Minus, Square, X } from 'lucide-react';

interface TerminalControlsProps {
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  isMaximized?: boolean;
}

export function TerminalControls({ onMinimize, onMaximize, onClose, isMaximized }: TerminalControlsProps): React.ReactElement {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <div 
      className="terminal-controls flex items-center content-center flex-row gap-2"
      role="toolbar"
      aria-label="Controles do terminal"
    >
      <button
        type="button"
        className="terminal-controls__button terminal-controls__button--minimize"
        onClick={onMinimize}
        onKeyDown={(e) => handleKeyDown(e, onMinimize || (() => {}))}
        aria-label="Minimizar terminal"
        title="Minimizar terminal (Alt+M)"
      >
        <Minus size={14} aria-hidden="true"  />
      </button>
      <button
        type="button"
        className="terminal-controls__button terminal-controls__button--maximize"
        onClick={onMaximize}
        onKeyDown={(e) => handleKeyDown(e, onMaximize || (() => {}))}
        aria-label={isMaximized ? "Restaurar terminal" : "Maximizar terminal"}
        aria-pressed={isMaximized}
        title={isMaximized ? "Restaurar terminal (Alt+Shift+M)" : "Maximizar terminal (Alt+Shift+M)"}
      >
        <Square size={14} aria-hidden="true"  />
      </button>
      <button
        type="button"
        className="terminal-controls__button terminal-controls__button--close"
        onClick={onClose}
        onKeyDown={(e) => handleKeyDown(e, onClose || (() => {}))}
        aria-label="Fechar terminal"
        title="Fechar terminal (Alt+F4)"
      >
        <X size={14} aria-hidden="true" />
      </button>
    </div>
  );
}
