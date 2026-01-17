/**
 * Testes para o componente Alert
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert } from '../components/ui/primitives/alert';

describe('Alert', () => {
  describe('Renderização', () => {
    it('renderiza corretamente com mensagem', () => {
      render(<Alert>Mensagem de alerta</Alert>);
      expect(screen.getByText('Mensagem de alerta')).toBeInTheDocument();
    });

    it('tem role="alert" por padrão', () => {
      render(<Alert>Test</Alert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  describe('Variantes', () => {
    it('snapshot: variante error', () => {
      const { container } = render(
        <Alert variant="error">Erro ao processar</Alert>
      );
      expect(container).toMatchSnapshot();
    });

    it('snapshot: variante success', () => {
      const { container } = render(
        <Alert variant="success">Operação realizada com sucesso</Alert>
      );
      expect(container).toMatchSnapshot();
    });

    it('snapshot: variante warning', () => {
      const { container } = render(
        <Alert variant="warning">Atenção: verifique os dados</Alert>
      );
      expect(container).toMatchSnapshot();
    });

    it('snapshot: variante info', () => {
      const { container } = render(
        <Alert variant="info">Informação importante</Alert>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Título', () => {
    it('renderiza com título', () => {
      render(
        <Alert variant="error" title="Erro">
          Detalhes do erro
        </Alert>
      );
      expect(screen.getByText('Erro')).toBeInTheDocument();
      expect(screen.getByText('Detalhes do erro')).toBeInTheDocument();
    });

    it('snapshot: com título', () => {
      const { container } = render(
        <Alert variant="error" title="Título do Alerta">
          Mensagem de conteúdo
        </Alert>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Ícone', () => {
    it('mostra ícone por padrão', () => {
      const { container } = render(<Alert variant="error">Erro</Alert>);
      // O ícone deve estar presente (svg)
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('oculta ícone quando hideIcon é true', () => {
      const { container } = render(
        <Alert variant="error" hideIcon>
          Sem ícone
        </Alert>
      );
      // Não deve ter svg (ícone padrão)
      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });

    it('renderiza ícone customizado', () => {
      render(
        <Alert variant="info" icon={<span data-testid="custom-icon">★</span>}>
          Com ícone customizado
        </Alert>
      );
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('snapshot: sem ícone', () => {
      const { container } = render(
        <Alert variant="info" hideIcon>
          Alerta sem ícone
        </Alert>
      );
      expect(container).toMatchSnapshot();
    });

    it('snapshot: com ícone customizado', () => {
      const { container } = render(
        <Alert variant="warning" icon={<span>⚡</span>}>
          Com ícone customizado
        </Alert>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Classes customizadas', () => {
    it('aceita className customizada', () => {
      render(
        <Alert className="my-custom-class" variant="info">
          Custom
        </Alert>
      );
      expect(screen.getByRole('alert')).toHaveClass('my-custom-class');
    });
  });
});
