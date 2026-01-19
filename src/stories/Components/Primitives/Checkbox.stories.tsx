import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@/components/ui/primitives/checkbox';
import { useState } from 'react';

const meta = {
  title: 'Components/Primitives/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkbox com suporte a label, descrição e estados desabilitados.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do checkbox',
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
      description: 'Desabilita o checkbox',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Aceito os termos e condições',
  },
};

export const Checked: Story = {
  args: {
    label: 'Receber notificações por email',
    checked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Receber newsletter',
    description: 'Receba atualizações semanais sobre novos produtos e ofertas especiais.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Opção desabilitada',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Opção desabilitada e marcada',
    checked: true,
    disabled: true,
  },
};

export const Multiple: Story = {
  render: () => {
    const [checked, setChecked] = useState({
      terms: false,
      newsletter: false,
      updates: true,
    });

    return (
      <div className="w-96 space-y-3">
        <Checkbox
          label="Aceito os termos e condições"
          checked={checked.terms}
          onChange={(e) => setChecked({ ...checked, terms: e.target.checked })}
        />
        <Checkbox
          label="Receber newsletter"
          description="Receba atualizações semanais sobre novos produtos"
          checked={checked.newsletter}
          onChange={(e) => setChecked({ ...checked, newsletter: e.target.checked })}
        />
        <Checkbox
          label="Receber atualizações de produtos"
          checked={checked.updates}
          onChange={(e) => setChecked({ ...checked, updates: e.target.checked })}
        />
      </div>
    );
  },
};
