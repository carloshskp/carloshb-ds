import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@/components/ui/primitives/textarea';
import { Label } from '@/components/ui/primitives/text';

const meta = {
  title: 'Components/Primitives/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Campo de texto multilinha com suporte a estados de erro e diferentes tamanhos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
    },
    rows: {
      control: 'number',
      description: 'Número de linhas visíveis',
    },
    invalid: {
      control: 'boolean',
      description: 'Estado de erro do campo',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite sua mensagem...',
    rows: 5,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="textarea-default" className="mb-2 block">Mensagem</Label>
        <Story id="textarea-default" />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    placeholder: 'Mensagem curta...',
    rows: 3,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="textarea-small" className="mb-2 block">Mensagem Curta</Label>
        <Story id="textarea-small" />
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    placeholder: 'Digite uma mensagem mais longa...',
    rows: 10,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="textarea-large" className="mb-2 block">Mensagem Longa</Label>
        <Story id="textarea-large" />
      </div>
    ),
  ],
};

export const Invalid: Story = {
  args: {
    placeholder: 'Digite sua mensagem...',
    invalid: true,
    defaultValue: 'Mensagem muito curta',
    rows: 5,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="textarea-invalid" className="mb-2 block">Mensagem</Label>
        <Story id="textarea-invalid" />
        <p className="mt-2 text-sm text-destructive">A mensagem deve ter pelo menos 20 caracteres</p>
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    placeholder: 'Campo desabilitado',
    disabled: true,
    defaultValue: 'Este campo está desabilitado e não pode ser editado.',
    rows: 5,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="textarea-disabled" className="mb-2 block">Mensagem</Label>
        <Story id="textarea-disabled" />
      </div>
    ),
  ],
};
