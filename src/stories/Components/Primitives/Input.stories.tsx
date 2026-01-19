import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@/components/ui/primitives/input';
import { Label } from '@/components/ui/primitives/text';

const meta = {
  title: 'Components/Primitives/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Campo de entrada de texto com suporte a estados de erro e diferentes tipos de input.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo do input HTML',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Digite seu nome',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="input-default" className="mb-2 block">Nome</Label>
        <Story id="input-default" />
      </div>
    ),
  ],
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'seu@email.com',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="input-email" className="mb-2 block">Email</Label>
        <Story id="input-email" />
      </div>
    ),
  ],
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Digite sua senha',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="input-password" className="mb-2 block">Senha</Label>
        <Story id="input-password" />
      </div>
    ),
  ],
};

export const Invalid: Story = {
  args: {
    type: 'email',
    placeholder: 'seu@email.com',
    invalid: true,
    defaultValue: 'email-invalido',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="input-invalid" className="mb-2 block">Email</Label>
        <Story id="input-invalid" />
        <p className="mt-2 text-sm text-destructive">Por favor, insira um email válido</p>
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Campo desabilitado',
    disabled: true,
    defaultValue: 'Valor pré-preenchido',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Label htmlFor="input-disabled" className="mb-2 block">Campo Desabilitado</Label>
        <Story id="input-disabled" />
      </div>
    ),
  ],
};

export const Types: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <Label htmlFor="input-text" className="mb-2 block">Texto</Label>
        <Input id="input-text" type="text" placeholder="Digite texto" />
      </div>
      <div>
        <Label htmlFor="input-number" className="mb-2 block">Número</Label>
        <Input id="input-number" type="number" placeholder="Digite um número" />
      </div>
      <div>
        <Label htmlFor="input-tel" className="mb-2 block">Telefone</Label>
        <Input id="input-tel" type="tel" placeholder="(00) 00000-0000" />
      </div>
      <div>
        <Label htmlFor="input-url" className="mb-2 block">URL</Label>
        <Input id="input-url" type="url" placeholder="https://exemplo.com" />
      </div>
      <div>
        <Label htmlFor="input-search" className="mb-2 block">Busca</Label>
        <Input id="input-search" type="search" placeholder="Pesquisar..." />
      </div>
    </div>
  ),
};
