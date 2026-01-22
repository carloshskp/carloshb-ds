# @carloshb/ds

Design System library para projetos carloshb.com.br. Componentes React reutilizáveis, tokens de design e estilos padronizados.

## Instalação

```bash
npm install @carloshb/ds
# ou
yarn add @carloshb/ds
```

**Nota:** Esta biblioteca é ESM-only (ES Modules). Para usar em projetos CommonJS, você precisará usar um bundler moderno (Vite, Webpack 5+, ou similar) ou configurar seu projeto para suportar ESM.

## Uso

```tsx
import { Button, Card, Alert } from '@carloshb/ds';
import '@carloshb/ds/styles.css';

function App() {
  return (
    <Card>
      <Button>Clique aqui</Button>
      <Alert variant="success">Sucesso!</Alert>
    </Card>
  );
}
```

### Importação por Categoria

```tsx
// Importação principal (todos os componentes)
import { Button, Card, Alert } from '@carloshb/ds';

// Importação por categoria
import { Button } from '@carloshb/ds/primitives';
import { TerminalContainer } from '@carloshb/ds/terminal';
import { CardModal } from '@carloshb/ds/modal';
```

## API Pública (Exports)

A biblioteca exporta os seguintes módulos:

| Export | Descrição | Exemplo |
|--------|-----------|---------|
| `.` | Export principal (todos os componentes) | `import { Button } from '@carloshb/ds'` |
| `./primitives` | Componentes primitivos | `import { Button } from '@carloshb/ds/primitives'` |
| `./terminal` | Componentes de terminal | `import { TerminalContainer } from '@carloshb/ds/terminal'` |
| `./modal` | Componentes de modal | `import { CardModal } from '@carloshb/ds/modal'` |
| `./styles.css` | Estilos do Design System | `import '@carloshb/ds/styles.css'` |

## Componentes Disponíveis

### Primitives

- **Button** - Botão com variantes (primary, secondary, ghost, outlined, destructive)
- **Input** - Campo de entrada de texto
- **Textarea** - Área de texto multilinha
- **Checkbox** - Caixa de seleção
- **Radio** - Botão de opção
- **Field** - Campo de formulário com label e validação
- **Card** - Card com header, content e footer
- **Alert** - Alerta com variantes (error, success, warning, info)
- **Badge** - Badge para tags e labels
- **Container** - Container responsivo
- **LinkButton** - Botão estilizado como link
- **Section** - Seção com header e content
- **Stepper** - Indicador de progresso em etapas
- **Text** - Componentes de texto (Heading, Paragraph, Label, Text)

### Terminal

- **TerminalContainer** - Container principal do terminal
- **TerminalHeader** - Cabeçalho do terminal
- **TerminalBody** - Corpo do terminal
- **TerminalControls** - Controles do terminal
- **TypeWriter** - Efeito de digitação

### Modal

- **CardModal** - Modal estilizado como card

### Navigation

- **SideNav** - Navegação lateral

## Requisitos

### Peer Dependencies

A biblioteca requer as seguintes dependências no projeto consumidor:

- `react` >= 19.0.0
- `react-dom` >= 19.0.0
- `react-router-dom` >= 7.0.0

## Documentação

Documentação completa disponível em: [Storybook](https://storybook.carloshb.com.br)

## Licença

Apache-2.0
