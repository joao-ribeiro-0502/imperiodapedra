# G.R.B.C. Império da Pedra — Landing Page

Landing page oficial do **G.R.B.C. Império da Pedra** (Grêmio Recreativo Bloco Carnavalesco), fundado em 10 de março de 2019.

**Força, tradição, cultura e carnaval em preto e ouro.**

---

## Início Rápido

### Pré-requisitos
- Navegador moderno
- Servidor local (opcional, mas recomendado)

### Como Executar

#### Opção 1: Python (mais simples)
```bash
cd C:\imperio-site
python -m http.server 8000
```

#### Opção 2: Node.js
```bash
cd C:\imperio-site
npx serve .
```

#### Opção 3: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique direito no `index.html`
3. "Open with Live Server"

### Acesse
```
http://localhost:8000
```

---

## Estrutura

```
C:\imperio-site\
├── public\assets\images\     # Imagens (logo, galeria)
├── src\
│   ├── styles\main.css       # Estilos + Design System
│   ├── data\content.js       # Conteúdo do site
│   └── utils\main.js         # JavaScript
├── prompts\                  # Documentação completa
├── index.html                # Página principal
└── README.md                 # Este arquivo
```

---

## Documentação

Toda a documentação está na pasta [`prompts/`](prompts/):

- [`prompts/README.md`](prompts/README.md) — Visão geral do projeto
- [`prompts/design-system.md`](prompts/design-system.md) — Design System completo
- [`prompts/content.md`](prompts/content.md) — Conteúdo e informações
- [`prompts/development-notes.md`](prompts/development-notes.md) — Notas técnicas

---

## Personalização

### Alterar Conteúdo
Edite [`src/data/content.js`](src/data/content.js) para atualizar textos, galeria, agenda e links.

### Alterar Estilos
Edite [`src/styles/main.css`](src/styles/main.css) para modificar cores, tipografia e layout.

### Adicionar Imagens
1. Coloque em `public/assets/images/gallery/`
2. Referencie em `src/data/content.js`

---

## Contato

- **Instagram:** [@bloco_imperio_da_pedra](https://www.instagram.com/bloco_imperio_da_pedra/)

---

## Licença

© 2019-2026 G.R.B.C. Império da Pedra. Todos os direitos reservados.
