/**
 * Testes para o componente Container
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container } from '../components/ui/primitives/container';

describe('Container', () => {
  it('renderiza corretamente', () => {
    render(<Container data-testid="container">Conteúdo</Container>);
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('renderiza children', () => {
    render(<Container>Conteúdo do container</Container>);
    expect(screen.getByText('Conteúdo do container')).toBeInTheDocument();
  });

  it('snapshot: container padrão', () => {
    const { container } = render(
      <Container>
        <p>Conteúdo dentro do container</p>
      </Container>
    );
    expect(container).toMatchSnapshot();
  });

  describe('Tamanhos', () => {
    it('snapshot: size sm', () => {
      const { container } = render(
        <Container size="sm">Small Container</Container>
      );
      expect(container).toMatchSnapshot();
    });

    it('snapshot: size md', () => {
      const { container } = render(
        <Container size="md">Medium Container</Container>
      );
      expect(container).toMatchSnapshot();
    });

    it('snapshot: size lg', () => {
      const { container } = render(
        <Container size="lg">Large Container</Container>
      );
      expect(container).toMatchSnapshot();
    });

    it('snapshot: size full', () => {
      const { container } = render(
        <Container size="full">Full Width Container</Container>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Classes customizadas', () => {
    it('aceita className', () => {
      render(<Container className="my-container">Test</Container>);
      // O texto está dentro do container
      const text = screen.getByText('Test');
      expect(text.closest('.my-container') || text).toHaveClass('my-container');
    });
  });
});
