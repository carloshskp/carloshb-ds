/**
 * Testes para o componente Button
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../components/ui/primitives/button';

describe('Button', () => {
  describe('Renderização', () => {
    it('renderiza corretamente com texto', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('renderiza como botão por padrão', () => {
      render(<Button>Test</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('snapshot: variante primary (padrão)', () => {
      const { container } = render(<Button>Primary Button</Button>);
      expect(container).toMatchSnapshot();
    });

    it('snapshot: variante secondary', () => {
      const { container } = render(<Button variant="secondary">Secondary</Button>);
      expect(container).toMatchSnapshot();
    });

    it('snapshot: variante ghost', () => {
      const { container } = render(<Button variant="ghost">Ghost</Button>);
      expect(container).toMatchSnapshot();
    });

    it('snapshot: variante outlined', () => {
      const { container } = render(<Button variant="outlined">Outlined</Button>);
      expect(container).toMatchSnapshot();
    });

    it('snapshot: variante destructive', () => {
      const { container } = render(<Button variant="destructive">Destructive</Button>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Tamanhos', () => {
    it('aplica tamanho sm', () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm');
    });

    it('aplica tamanho md (padrão)', () => {
      render(<Button size="md">Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4', 'py-2', 'text-base');
    });

    it('aplica tamanho lg', () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
    });
  });

  describe('Estado de Loading', () => {
    it('mostra spinner quando isLoading é true', () => {
      render(<Button isLoading>Loading</Button>);
      expect(screen.getByText('Carregando')).toBeInTheDocument();
    });

    it('desabilita o botão quando isLoading é true', () => {
      render(<Button isLoading>Loading</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('não renderiza children quando isLoading', () => {
      render(<Button isLoading>Click me</Button>);
      expect(screen.queryByText('Click me')).not.toBeInTheDocument();
    });

    it('snapshot: estado loading', () => {
      const { container } = render(<Button isLoading>Loading</Button>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Ícones', () => {
    it('renderiza leftIcon', () => {
      render(
        <Button leftIcon={<span data-testid="left-icon">→</span>}>
          With Icon
        </Button>
      );
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('renderiza rightIcon', () => {
      render(
        <Button rightIcon={<span data-testid="right-icon">←</span>}>
          With Icon
        </Button>
      );
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('renderiza ambos ícones', () => {
      render(
        <Button
          leftIcon={<span data-testid="left">L</span>}
          rightIcon={<span data-testid="right">R</span>}
        >
          Both Icons
        </Button>
      );
      expect(screen.getByTestId('left')).toBeInTheDocument();
      expect(screen.getByTestId('right')).toBeInTheDocument();
    });
  });

  describe('Interações', () => {
    it('chama onClick quando clicado', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('não chama onClick quando disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} disabled>Disabled</Button>);
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('não chama onClick quando isLoading', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} isLoading>Loading</Button>);
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Acessibilidade', () => {
    it('tem role="button"', () => {
      render(<Button>Accessible</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('aplica aria-disabled quando disabled', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('pode receber ref', () => {
      const ref = vi.fn();
      render(<Button ref={ref}>With Ref</Button>);
      expect(ref).toHaveBeenCalled();
    });
  });

  describe('Classes customizadas', () => {
    it('aceita className customizada', () => {
      render(<Button className="custom-class">Custom</Button>);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('merge className com classes padrão', () => {
      render(<Button className="my-class" variant="primary">Merged</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('my-class');
      // Mantém classes da variante
      expect(button).toHaveClass('bg-gradient-to-r');
    });
  });
});
