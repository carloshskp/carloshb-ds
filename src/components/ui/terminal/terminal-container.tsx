import React from 'react';
import {twMerge} from "tailwind-merge";
import { filterDOMProps } from '../../../utils';

type TerminalContainerProps = {
  children?: React.ReactNode
  className?: string,
  isVisible: boolean,
  isMaximized: boolean,
  isMinimized: boolean,
};

interface ChildWithClassName {
  className?: string;
}

/**
 * Type guard para verificar se um elemento React tem className nas props
 */
function hasClassNameProps(
  element: React.ReactElement
): element is React.ReactElement<ChildWithClassName> {
  return element.props !== null && typeof element.props === 'object' && 'className' in element.props;
}

/**
 * Verifica se o tipo do componente tem um nome específico
 */
function isComponentNamed(
  type: React.ElementType | string,
  name: string
): boolean {
  if (typeof type === 'function') {
    return type.name === name || (type as { displayName?: string }).displayName === name;
  }
  if (typeof type === 'string') {
    return type === name;
  }
  return false;
}

export function TerminalContainer({
  children, 
  className,
  isVisible,
  isMaximized,
  isMinimized,
}: TerminalContainerProps) {
  if (!isVisible) return null;

  const childrenArray = React.Children.toArray(children);

  return (
    <section
      id="terminal-info"
      role="dialog"
      aria-label="Terminal de informações de contato"
      aria-modal="false"
      aria-expanded={!isMinimized}
      className={twMerge(
        'terminal terminal-container fixed',
        isMaximized
          ? 'inset-0 translate-x-0 w-screen h-screen max-w-none bottom-0'
          : 'left-1/2 -translate-x-1/2 bottom-[20%] w-[92vw] sm:w-[86vw] md:w-[72vw] max-w-5xl',
        isMaximized
          ? ''
          : isMinimized
            ? 'h-[2.5rem] overflow-hidden md:w-[16rem]'
            : 'min-h-[9rem] sm:min-h-[10rem] md:min-h-[12rem] max-h-[50vh]',
        'transition-[bottom,width,height,transform] duration-300',
        'focus-within:outline-2 focus-within:outline focus-within:outline-blue-500 focus-within:outline-offset-2',
        className,
      )}
      tabIndex={-1}
    >
       <div className={twMerge("flex flex-col", isMinimized ? '!md:h-[2.5rem] !md:max-h-[2.5rem] !md:min-h-[2.5rem]' : '')}>
        {childrenArray.map((child, index) => {
          if (React.isValidElement(child)) {
            // Filtra props inválidas antes de clonar
            const validProps = filterDOMProps(child.props as Record<string, unknown>);
            
            if (isComponentNamed(child.type, 'TerminalHeader') && hasClassNameProps(child)) {
              return React.cloneElement(child, {
                key: index,
                ...validProps,
                className: twMerge(
                  child.props.className,
                  'flex justify-between items-center',
                  'h-auto min-h-[2.5rem]',
                  isMinimized ? 'md:h-[2.5rem]' : '',
                ),
              });
            }
            if (hasClassNameProps(child)) {
              return React.cloneElement(child, {
                key: index,
                ...validProps,
                className: twMerge(
                  child.props.className,
                  'transition-all duration-300',
                  isMinimized ? 'h-[2.5rem] md:h-[2.5rem] md:overflow-hidden' : 'h-[2.5rem] md:h-[2.5rem] flex-1 md:opacity-1 md:visible'
                )
              });
            }
            return React.cloneElement(child, { key: index, ...validProps });
          }
          return <React.Fragment key={index}>{child}</React.Fragment>;
        })}
      </div>
    </section>
  );
}

export default TerminalContainer;
