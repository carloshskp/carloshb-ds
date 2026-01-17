import React from 'react';
import {twMerge} from "tailwind-merge";

type TerminalHeaderProps = {
  children: React.ReactNode,
  className?: string
};

export function TerminalHeader({children, className} : TerminalHeaderProps) {
  return (
    <header 
      className={twMerge(
        'terminal-header flex flex-row items-center justify-between h-[2.5rem] px-3',
        className,
      )}
      role="banner"
    >
      {children}
    </header>
  );
}

export default TerminalHeader;
