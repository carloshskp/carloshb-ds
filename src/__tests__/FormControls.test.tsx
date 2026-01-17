/**
 * Testes para controles de formulário (Input, Textarea, Checkbox, Radio)
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../components/ui/primitives';
import { Textarea } from '../components/ui/primitives';
import { Checkbox } from '../components/ui/primitives';
import { Radio } from '../components/ui/primitives';

describe('Input', () => {
  it('renderiza corretamente', () => {
    render(<Input placeholder="Digite aqui" />);
    expect(screen.getByPlaceholderText('Digite aqui')).toBeInTheDocument();
  });

  it('aceita valor inicial', () => {
    render(<Input defaultValue="Valor inicial" />);
    expect(screen.getByDisplayValue('Valor inicial')).toBeInTheDocument();
  });

  it('chama onChange quando digitado', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'teste');
    expect(handleChange).toHaveBeenCalled();
  });

  it('snapshot: input padrão', () => {
    const { container } = render(<Input placeholder="Email" />);
    expect(container).toMatchSnapshot();
  });

  it('pode ser disabled', () => {
    render(<Input disabled placeholder="Disabled" />);
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled();
  });
});

describe('Textarea', () => {
  it('renderiza corretamente', () => {
    render(<Textarea placeholder="Mensagem" />);
    expect(screen.getByPlaceholderText('Mensagem')).toBeInTheDocument();
  });

  it('aceita valor inicial', () => {
    render(<Textarea defaultValue="Texto longo" />);
    expect(screen.getByDisplayValue('Texto longo')).toBeInTheDocument();
  });

  it('snapshot: textarea padrão', () => {
    const { container } = render(<Textarea placeholder="Descrição" />);
    expect(container).toMatchSnapshot();
  });

  it('pode ser disabled', () => {
    render(<Textarea disabled placeholder="Disabled" />);
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled();
  });
});

describe('Checkbox', () => {
  // Checkbox usa prop "label" em vez de children
  it('renderiza corretamente', () => {
    render(<Checkbox label="Aceito os termos" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Aceito os termos')).toBeInTheDocument();
  });

  it('alterna estado quando clicado', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Toggle" onChange={handleChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  it('snapshot: checkbox não marcado', () => {
    const { container } = render(<Checkbox id="test-checkbox" label="Opção" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot: checkbox marcado', () => {
    const { container } = render(<Checkbox id="test-checkbox-checked" label="Selecionado" checked readOnly />);
    expect(container).toMatchSnapshot();
  });

  it('pode ser disabled', () => {
    render(<Checkbox label="Disabled" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});

describe('Radio', () => {
  // Radio usa prop "label" em vez de children
  it('renderiza corretamente', () => {
    render(<Radio name="test" label="Opção 1" />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByText('Opção 1')).toBeInTheDocument();
  });

  it('seleciona quando clicado', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Radio name="test" label="Opção" onChange={handleChange} />);
    
    const radio = screen.getByRole('radio');
    expect(radio).not.toBeChecked();
    
    await user.click(radio);
    expect(handleChange).toHaveBeenCalled();
  });

  it('snapshot: radio não selecionado', () => {
    const { container } = render(<Radio id="test-radio" name="group" label="Opção A" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot: radio selecionado', () => {
    const { container } = render(
      <Radio id="test-radio-checked" name="group" label="Opção Selecionada" checked readOnly />
    );
    expect(container).toMatchSnapshot();
  });

  it('pode ser disabled', () => {
    render(<Radio name="test" label="Disabled" disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });
});
