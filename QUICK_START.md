# Quick Start Guide

Guia rápido para começar a usar o Design System @carloshb/ds em seu projeto.

## Instalação

```bash
npm install @carloshb/ds
# ou
yarn add @carloshb/ds
# ou
pnpm add @carloshb/ds
```

## Setup Básico

### 1. Importar Estilos

No ponto de entrada da sua aplicação (geralmente `main.tsx`, `index.tsx` ou `App.tsx`):

```tsx
import '@carloshb/ds/styles.css';
```

### 2. Importar Componentes

```tsx
import { Button, Card, Alert } from '@carloshb/ds';
```

### 3. Usar os Componentes

```tsx
function App() {
  return (
    <Card>
      <Button>Clique aqui</Button>
      <Alert variant="success">Sucesso!</Alert>
    </Card>
  );
}
```

## Setup por Framework

### Next.js

#### 1. Instalar dependências

```bash
npm install @carloshb/ds
```

#### 2. Criar arquivo de estilos globais

Crie `styles/globals.css`:

```css
@import '@carloshb/ds/styles.css';
```

#### 3. Importar no `_app.tsx`

```tsx
// pages/_app.tsx ou app/layout.tsx
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

#### 4. Usar componentes

```tsx
// pages/index.tsx ou app/page.tsx
import { Button, Card } from '@carloshb/ds';

export default function Home() {
  return (
    <Card>
      <Button>Clique aqui</Button>
    </Card>
  );
}
```

### Vite + React

#### 1. Instalar dependências

```bash
npm install @carloshb/ds
```

#### 2. Importar estilos no `main.tsx`

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@carloshb/ds/styles.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### 3. Configurar TypeScript (se usar)

Certifique-se de que o `tsconfig.json` está configurado corretamente:

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2020"
  }
}
```

### Create React App

#### 1. Instalar dependências

```bash
npm install @carloshb/ds
```

#### 2. Importar estilos no `index.tsx`

```tsx
// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@carloshb/ds/styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Remix

#### 1. Instalar dependências

```bash
npm install @carloshb/ds
```

#### 2. Importar estilos no `root.tsx`

```tsx
// app/root.tsx
import type { LinksFunction } from '@remix-run/node';
import '@carloshb/ds/styles.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: '@carloshb/ds/styles.css' },
];
```

## Exemplo Completo

### Formulário de Login

```tsx
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  Field,
  Input,
  Button,
  Alert
} from '@carloshb/ds';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Sua lógica de login aqui
  };

  return (
    <Card>
      <CardHeader>
        <h2>Login</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {error && (
            <Alert variant="error" className="mb-4">
              {error}
            </Alert>
          )}
          
          <Field label="Email" required>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
            />
          </Field>

          <Field label="Senha" required>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </Field>

          <Button type="submit" variant="primary" className="w-full">
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
```

## Configuração TypeScript

Se você está usando TypeScript, o Design System inclui tipos completos. Certifique-se de que seu `tsconfig.json` está configurado:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Troubleshooting

### Erro: "Cannot find module '@carloshb/ds'"

**Solução:**
1. Verifique se o pacote foi instalado: `npm list @carloshb/ds`
2. Certifique-se de que está usando Node.js >= 18.0.0
3. Limpe o cache: `npm cache clean --force` e reinstale

### Erro: "Module not found: Can't resolve '@carloshb/ds/styles.css'"

**Solução:**
1. Certifique-se de que importou os estilos: `import '@carloshb/ds/styles.css'`
2. Verifique se o caminho está correto
3. Em alguns bundlers, você pode precisar usar: `import '@carloshb/ds/dist/styles.css'`

### Erros de TypeScript

**Solução:**
1. Certifique-se de que as versões do React são compatíveis (>= 19.0.0)
2. Verifique se `skipLibCheck: true` está no `tsconfig.json`
3. Reinicie o servidor TypeScript

### Estilos não estão sendo aplicados

**Solução:**
1. Certifique-se de que os estilos foram importados antes de usar os componentes
2. Verifique a ordem de importação (estilos do DS antes dos seus)
3. Limpe o cache do bundler

## Próximos Passos

Agora que você configurou o Design System:

1. **Explore os Componentes**: Veja a [documentação completa de componentes](./docs/COMPONENTS.md)
2. **Customize os Tokens**: Aprenda sobre [Design Tokens](./docs/DESIGN_TOKENS.md)
3. **Veja Exemplos**: Confira [receitas e padrões](./docs/EXAMPLES.md)
4. **Storybook**: Explore a [documentação interativa](https://storybook.carloshb.com.br)

## Recursos Adicionais

- [README](./README.md) - Visão geral completa
- [Documentação de Componentes](./docs/COMPONENTS.md) - Referência de API
- [Design Tokens](./docs/DESIGN_TOKENS.md) - Sistema de tokens
- [Exemplos](./docs/EXAMPLES.md) - Padrões e receitas
- [Storybook](https://storybook.carloshb.com.br) - Documentação interativa
