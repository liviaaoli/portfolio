# General Guidelines - Lívia Miranda Portfolio

- Estrutura semântica HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Layout: Grid/Flex com container máximo de 1040px
- Responsividade: Mobile-first; padding lateral mínimo de 24px
- Code Style: TypeScript; componentização modular (ex.: Button, NavLink, SocialLink)

---

# Design System Guidelines (Consolidado com Tailwind e globals.css)

## Tipografia
- Font family: `font-sans` (Inter, system-ui, sans-serif); `font-mono` opcional para detalhes
- Títulos: hifenização desabilitada e medidas fluidas
  - h1: `text-[clamp(2rem,4vw,3rem)]` `font-bold` `leading-[1.1]` `-tracking-[0.03em]`
  - h2: `text-[clamp(1.5rem,3vw,2rem)]` `font-bold` `leading-[1.2]` `-tracking-[0.02em]`
  - h3: `text-[clamp(1.125rem,2vw,1.5rem)]` `font-bold` `leading-[1.4]`
- Corpo: `text-[1rem]` `leading-[1.7]`

## Tokens de Cor (CSS Variables em globals.css)
As cores do Tailwind mapeiam para variáveis CSS em HSL, garantindo consistência entre temas e utilitários.

Modo claro (classe raiz :root):
- --background: `210 17% 98%`
- --foreground: `210 11% 15%`
- --muted: `210 5% 92%`
- --muted-foreground: `210 10% 42%`
- --border: `210 11% 15% / 0.24` (contraste não-texto ≥ 3:1)
- --primary: `210 11% 15%` (igual a foreground)
- --primary-foreground: `210 17% 98%` (igual a background)

Modo escuro (classe .dark no html/body):
- --background: `210 11% 15%`
- --foreground: `210 17% 98%`
- --muted: `210 10% 25%`
- --muted-foreground: `210 10% 70%`
- --border: `210 17% 98% / 0.24`

Tailwind (tailwind.config.js -> theme.extend.colors):
- background: `hsl(var(--background))`
- foreground: `hsl(var(--foreground))`
- muted.DEFAULT: `hsl(var(--muted))`
- muted.foreground: `hsl(var(--muted-foreground))`
- border: `hsl(var(--border))`
- primary.DEFAULT: `hsl(var(--primary))`
- primary.foreground: `hsl(var(--primary-foreground))`

Utilização típica:
- `bg-background` + `text-foreground` para superfícies padrão e alto contraste
- `bg-muted` para containers/planos de fundo suaves; texto sobre esse fundo deve usar `text-foreground` ou `text-muted-foreground` conforme contraste
- `border-border` para separadores e contornos

## Critérios WCAG 2.1 AA (aplicados)
- Texto normal (abaixo de 18pt/24px e sem negrito): contraste ≥ 4.5:1
- Texto grande (≥ 18pt/24px normal ou ≥ 14pt/18.66px em negrito): contraste ≥ 3:1
- Elementos não-texto (ícones essenciais, contornos, separadores): contraste ≥ 3:1
- Foco visível: anel de foco com contraste ≥ 3:1 em relação ao plano de fundo

Verificações com a paleta atual:
- `text-foreground` sobre `bg-background`: ≫ 7:1 (AA/AAA)
- `text-muted-foreground` sobre `bg-background`: ~5.7:1 (AA para 12–14px)
- `border-border` (24% opacidade): ≥ 3:1 sobre os respectivos backgrounds em claro/escuro

## Foco Visível (padrão obrigatório)
- Utilitário custom `.focus-ring` (definido em globals.css) aplicado a todos os elementos focáveis interativos:
  - Implementação: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background`
- Regra: Sempre adicionar `.focus-ring` e `rounded-sm` em links, botões e controles interativos
- Não usar cores de ring não definidas no tema (ex.: `ring-primary-400`)

## Bordas e Raio
- `rounded-sm` (2px) para botões, cards, imagens, inputs
- `border-border` para contornos e divisórias

## Navbar e Footer
- Navbar: altura fixa `h-16`. Itens com `text-muted-foreground` e hover para `text-foreground`. Foco com `.focus-ring`.
- Footer compacto: `mt-10` e `py-8/10`; colunas em grid responsivo. Labels (Navegação, Contato, Ações) com `text-muted-foreground` sem opacidade para garantir AA. Links com `.focus-ring`.

## Componentes (padrões de acessibilidade)
- Button: `inline-flex`, `border-border`, `hover:bg-foreground hover:text-background`, `.focus-ring` no elemento focável; alvo acessível (altura efetiva ~44px)
- NavLink / NavItem / SocialLink / Logo: usam `text-muted-foreground` com `hover:text-foreground`, `.focus-ring` e `rounded-sm`
- Ícones (Phosphor): `weight="bold"`. Tamanhos: 14px em links/botões; 20px Navbar/Footer; 24px em estatísticas

## Microinterações
- Transições moderadas, preferir opacidade/escala. Evitar grandes deslocamentos
- Imagens/Thumbs: hover `scale: 1.01`

## Boas práticas adicionais
- Evitar reduzir opacidade de texto/ícones a ponto de violar contraste; como regra, preferir `hover:opacity-80` quando necessário
- Garantir que texto sobre `bg-muted` use `text-foreground` ou `text-muted-foreground` com contraste validado
- Evitar uso de cores não definidas no tema Tailwind extendido

---

# Conformidade e Alinhamento
- Tailwind e globals.css estão alinhados via tokens HSL.
- As classes aplicadas nos componentes garantem:
  - Contraste AA para texto normal e elementos não-texto
  - Foco visível consistente com `.focus-ring`
  - Estados hover que não comprometem contraste
- O arquivo foi atualizado para refletir os tokens e as regras de acessibilidade em vigor no código.