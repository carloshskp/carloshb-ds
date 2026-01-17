/**
 * Testes para o componente Section
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Section, SectionHeader, SectionContent } from '../components/ui/primitives/section';

describe('Section', () => {
  it('renderiza corretamente', () => {
    render(<Section data-testid="section">Conteúdo</Section>);
    expect(screen.getByTestId('section')).toBeInTheDocument();
  });

  it('renderiza como section HTML', () => {
    render(<Section data-testid="section">Test</Section>);
    const element = screen.getByTestId('section');
    expect(element.tagName).toBe('SECTION');
  });

  it('snapshot: section básica', () => {
    const { container } = render(
      <Section>
        <p>Conteúdo da seção</p>
      </Section>
    );
    expect(container).toMatchSnapshot();
  });

  describe('Composição', () => {
    it('renderiza com header e content', () => {
      render(
        <Section>
          <SectionHeader>Título da Seção</SectionHeader>
          <SectionContent>Conteúdo principal</SectionContent>
        </Section>
      );
      
      expect(screen.getByText('Título da Seção')).toBeInTheDocument();
      expect(screen.getByText('Conteúdo principal')).toBeInTheDocument();
    });

    it('snapshot: section completa', () => {
      const { container } = render(
        <Section>
          <SectionHeader>Header</SectionHeader>
          <SectionContent>Content</SectionContent>
        </Section>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Classes customizadas', () => {
    it('aceita className', () => {
      render(<Section className="my-section" data-testid="section">Test</Section>);
      expect(screen.getByTestId('section')).toHaveClass('my-section');
    });
  });
});
