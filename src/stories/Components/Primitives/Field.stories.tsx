import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from '@/components/ui/primitives/field';
import { Input } from '@/components/ui/primitives/input';
import { Textarea } from '@/components/ui/primitives/textarea';

const meta = {
  title: 'Components/Primitives/Field',
  component: Field.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de campo que gerencia label, hint, erro e acessibilidade de forma integrada. Use com Input, Textarea e outros controles de formulário.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do campo',
    },
    hint: {
      control: 'text',
      description: 'Texto de ajuda/hint',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro',
    },
    required: {
      control: 'boolean',
      description: 'Campo obrigatório',
    },
  },
} satisfies Meta<typeof Field.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    label: 'Nome',
  },
  render: (args) => (
    <div className="w-96">
      <Field.Root {...args}>
        <Field.Control>
          <Input placeholder="Digite seu nome" />
        </Field.Control>
      </Field.Root>
    </div>
  ),
};

export const WithHint: Story = {
  args: {
    label: 'Email',
    hint: 'Nunca compartilharemos seu email com terceiros',
  },
  render: (args) => (
    <div className="w-96">
      <Field.Root {...args}>
        <Field.Control>
          <Input type="email" placeholder="seu@email.com" />
        </Field.Control>
      </Field.Root>
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Por favor, insira um email válido',
  },
  render: (args) => (
    <div className="w-96">
      <Field.Root {...args}>
        <Field.Control>
          <Input type="email" placeholder="seu@email.com" invalid />
        </Field.Control>
      </Field.Root>
    </div>
  ),
};

export const Required: Story = {
  args: {
    label: 'Senha',
    hint: 'Mínimo de 8 caracteres',
    required: true,
  },
  render: (args) => (
    <div className="w-96">
      <Field.Root {...args}>
        <Field.Control>
          <Input type="password" placeholder="Digite sua senha" />
        </Field.Control>
      </Field.Root>
    </div>
  ),
};

export const WithTextarea: Story = {
  args: {
    label: 'Mensagem',
    hint: 'Máximo de 500 caracteres',
  },
  render: (args) => (
    <div className="w-96">
      <Field.Root {...args}>
        <Field.Control>
          <Textarea placeholder="Digite sua mensagem..." rows={5} />
        </Field.Control>
      </Field.Root>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <Field.Root label="Nome completo" required>
        <Field.Control>
          <Input placeholder="Digite seu nome completo" />
        </Field.Control>
      </Field.Root>

      <Field.Root
        label="Email"
        hint="Usado para login e notificações"
        required
      >
        <Field.Control>
          <Input type="email" placeholder="seu@email.com" />
        </Field.Control>
      </Field.Root>

      <Field.Root
        label="Mensagem"
        hint="Descreva sua solicitação ou dúvida"
      >
        <Field.Control>
          <Textarea placeholder="Digite sua mensagem..." rows={6} />
        </Field.Control>
      </Field.Root>
    </div>
  ),
};
