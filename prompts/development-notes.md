# Notas de Desenvolvimento — G.R.B.C. Império da Pedra

## Decisões Técnicas

### Stack Escolhida
- **HTML/CSS/JS puro** — Sem frameworks para manter projeto leve e de baixo custo
- **Sem build step** — Arquivos servidos diretamente, sem necessidade de compilação
- **Google Fonts** — CDN para fontes (Anton + Inter)
- **Imagens locais** — Baixadas e servidas localmente para melhor performance

### Por que não usar React/Vue?
- Landing page estática não precisa de framework
- Menor complexidade = menor custo de manutenção
- Performance superior sem JavaScript pesado
- Mais fácil para qualquer desenvolvedor entender e modificar

---

## Estrutura de Arquivos

### `index.html`
- Estrutura semântica completa
- Meta tags para SEO e Open Graph
- Acessibilidade (skip link, ARIA labels)
- Referências a CSS e JS no final do body

### `src/styles/main.css`
- **CSS Variables** no `:root` para fácil customização
- **Mobile-first** com media queries progressivas
- **Design tokens** centralizados (cores, espaçamentos, transições)
- **Animações** com `@keyframes` e `transition`
- **Respeita `prefers-reduced-motion`** para acessibilidade

### `src/data/content.js`
- **Todo conteúdo centralizado** em um único objeto
- Fácil manutenção sem tocar no HTML/JS
- Dados estruturados para galeria, agenda e informações

### `src/utils/main.js`
- **IIFE** para evitar poluição do escopo global
- **IntersectionObserver** para animações de entrada
- **Event delegation** onde aplicável
- **Passive listeners** para scroll (performance)

---

## Funcionalidades Implementadas

### ✅ Navegação
- Menu fixo com blur
- Menu mobile hambúrguer
- Scroll suave para âncoras
- Link ativo destacado baseado no scroll

### ✅ Hero
- Logo com animação float
- Círculos concêntricos animados
- Badge "Desde 2019"
- CTAs com hover effects
- Indicador de scroll

### ✅ Seções
- Sobre com grid de valores
- História com timeline vertical
- Carnaval com features em grid
- Galeria com 12 imagens e hover overlay
- Agenda com cards de eventos
- Contato com formulário validado

### ✅ Extras
- Botão flutuante do WhatsApp
- Footer completo
- Animações de entrada (fade-in)
- Header muda no scroll

---

## Performance

### Otimizações Aplicadas
- Imagens com `loading="lazy"`
- CSS e JS minificáveis (sem dependências)
- Fontes com `preconnect`
- Event listeners passive para scroll
- IntersectionObserver para animações

### Tamanhos Estimados
- HTML: ~15KB
- CSS: ~20KB
- JS: ~10KB
- Imagens: ~2-3MB total (12 imagens otimizadas)

---

## SEO Básico

### Meta Tags Implementadas
- `title` — Título descritivo
- `description` — Descrição para buscadores
- `og:title` — Título para redes sociais
- `og:description` — Descrição para redes sociais
- `og:image` — Imagem de preview
- `og:type` — Tipo de conteúdo
- `theme-color` — Cor do navegador mobile

### Recomendações Futuras
- Adicionar `sitemap.xml`
- Adicionar `robots.txt`
- Implementar dados estruturados (Schema.org)
- Adicionar Open Graph para cada seção

---

## Acessibilidade

### Implementado
- Skip link para conteúdo principal
- ARIA labels em botões e navegação
- `aria-expanded` no menu mobile
- `aria-live` no feedback do formulário
- Contraste de cores AA compliant
- `prefers-reduced-motion` support
- Navegação por teclado (ESC fecha menu)

### Recomendações Futuras
- Testar com leitores de tela
- Adicionar foco visível em todos os elementos interativos
- Testar navegação apenas por teclado

---

## Browser Support

### Navegadores Suportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features CSS Utilizadas
- CSS Grid
- Flexbox
- CSS Variables
- `clamp()`
- `backdrop-filter` (com fallback)
- `aspect-ratio`

---

## Deploy

### Opções de Hospedagem
1. **Netlify** — Arrastar e soltar pasta
2. **Vercel** — Importar repositório
3. **GitHub Pages** — Gratuito para sites estáticos
4. **Hostinger/Outra** — Upload via FTP

### Variáveis de Ambiente
Nenhuma necessária para o site estático.

---

## Manutenção Futura

### Adicionar Novo Evento
1. Abra `src/data/content.js`
2. Adicione novo objeto no array `events`
3. Salve — o site atualiza automaticamente

### Adicionar Nova Imagem na Galeria
1. Coloque a imagem em `public/assets/images/gallery/`
2. Adicione referência em `src/data/content.js` no array `gallery`
3. Salve

### Alterar Cores
1. Abra `src/styles/main.css`
2. Modifique as variáveis no `:root`
3. Salve

### Alterar Textos
1. Abra `src/data/content.js` para conteúdo dinâmico
2. Abra `index.html` para textos estáticos
3. Salve

---

## Contato do Desenvolvedor

Para dúvidas ou sugestões sobre este projeto, consulte a documentação em `prompts/`.
