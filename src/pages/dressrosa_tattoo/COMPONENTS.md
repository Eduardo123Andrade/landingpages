# DressRosa Tattoo - Componentes

## Estrutura de Componentes

### UI Components (Reutilizáveis)
Componentes pequenos e reutilizáveis em `components/ui/`:

- **Button** - Botões com 3 variantes (primary, secondary, ghost)
- **Input** - Campos de entrada com label e validação
- **Section** - Container para seções da página
- **SectionHeader** - Header padrão para seções (subtítulo + título + divider)

### Page Components (Seções Principais)
Componentes que formam as seções da página em `components/`:

- **Hero** - Banner principal com animação glitch
- **Portfolio** - Galeria de trabalhos com lightbox
- **Estilos** - Grid de estilos de tatuagem
- **Sobre** - Sobre a artista com foto
- **Precos** - Tabela de preços
- **Agendamento** - Formulário de contato
- **FAQ** - Perguntas frequentes com accordion
- **Footer** - Rodapé com links

## Como Rodar os Testes

```bash
# Rodar todos os testes
yarn test

# Rodar com watch mode
yarn test --watch

# Rodar com cobertura
yarn test --coverage

# Rodar testes específicos
yarn test Button.test.tsx
```

## Estrutura de Testes

Todos os testes estão em `__tests__/` dentro do mesmo diretório do componente.

### Exemplo de Teste
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button theme={mockTheme}>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

## Padrões de Componente

### Theme Prop
Todos os componentes recebem um `theme` object com cores:
```typescript
theme = {
  accent: '#c9a96e',
  bg: '#0d0010',
  bg2: '#120018',
  text: '#f0ede6',
  muted: '#888',
}
```

### Fonts Prop
Alguns componentes recebem um `fonts` object:
```typescript
fonts = {
  title: "'DM Serif Display', serif",
  body: "'Cormorant Garamond', serif",
}
```

## Benefícios da Componentização

✅ Componentes reutilizáveis
✅ Testes isolados
✅ Fácil manutenção
✅ Reduz duplicação de código
✅ Melhor organização
✅ Facilita mudanças de design
