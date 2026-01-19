import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '@/components/ui/primitives/radio';
import { useState } from 'react';

const meta = {
  title: 'Components/Primitives/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Radio button com suporte a label, descrição e estados desabilitados. Use em grupos para seleção única.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do radio',
    },
    description: {
      control: 'text',
      description: 'Descrição adicional abaixo do label',
    },
    checked: {
      control: 'boolean',
      description: 'Estado marcado/desmarcado',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o radio',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Opção 1',
    name: 'radio-group',
  },
};

export const Checked: Story = {
  args: {
    label: 'Opção selecionada',
    name: 'radio-group',
    checked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Plano Premium',
    description: 'Acesso completo a todos os recursos e suporte prioritário.',
    name: 'radio-group',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Opção desabilitada',
    name: 'radio-group',
    disabled: true,
  },
};

export const Group: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    return (
      <div className="w-96 space-y-3">
        <Radio
          label="Opção 1"
          name="radio-group"
          value="option1"
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
        />
        <Radio
          label="Opção 2"
          name="radio-group"
          value="option2"
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
        />
        <Radio
          label="Opção 3"
          name="radio-group"
          value="option3"
          checked={selected === 'option3'}
          onChange={() => setSelected('option3')}
        />
      </div>
    );
  },
};

export const GroupWithDescriptions: Story = {
  render: () => {
    const [selected, setSelected] = useState('basic');

    return (
      <div className="w-96 space-y-3">
        <Radio
          label="Plano Básico"
          description="R$ 29/mês - Recursos essenciais para começar"
          name="plan"
          value="basic"
          checked={selected === 'basic'}
          onChange={() => setSelected('basic')}
        />
        <Radio
          label="Plano Pro"
          description="R$ 79/mês - Recursos avançados e suporte prioritário"
          name="plan"
          value="pro"
          checked={selected === 'pro'}
          onChange={() => setSelected('pro')}
        />
        <Radio
          label="Plano Enterprise"
          description="R$ 199/mês - Solução completa com suporte dedicado"
          name="plan"
          value="enterprise"
          checked={selected === 'enterprise'}
          onChange={() => setSelected('enterprise')}
        />
      </div>
    );
  },
};
