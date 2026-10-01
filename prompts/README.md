# G.R.B.C. Império da Pedra — Landing Page

## Visão Geral

Landing page oficial do **G.R.B.C. Império da Pedra** (Grêmio Recreativo Bloco Carnavalesco), fundado em 10 de março de 2019.

**Objetio:** Apresentar o bloco, sua história, valores e proporcionar contato com a comunidade.

**Público-alvo:** Foliões, ritmistas, apoiadores e interessados em fazer parte do bloco.

---

## Estrutura do Projeto

```
C:\imperio-site\
├── public\
│   └── assets\
│       ├── images\
│       │   ├── logo-imperio.jpeg    # Logo oficial (NÃO MODIFICAR)
│       │   ├── gallery/             # Imagens da galeria (12 imagens)
│       │   ├── hero/                # Imagens do hero (reservado)
│       │   └── icons/               # Ícones (reservado)
│       └── fonts/                   # Fontes locais (reservado)
├── src\
│   ├── components/                  # Componentes reutilizáveis
│   ├── sections/                    # Seções da página
│   ├── styles\
│   │   └── main.css                 # Estilos principais + Design System
│   ├── data\
│   │   └── content.js               # Conteúdo centralizado do site
│   └── utils\
│       └── main.js                  # JavaScript principal
├── prompts\
│   ├── README.md                    # Este arquivo
│   ├── design-system.md             # Documentação do Design System
│   ├── content.md                   # Conteúdo e informações
│   └── development-notes.md         # Notas de desenvolvimento
├── index.html                       # Página principal
└── README.md                        # Instruções de uso
```

---

## Como Executar

### Opção 1: Servidor Local Simples

```bash
# Na pasta do projeto
cd C:\imperio-site

# Python 3
python -m http.server 8000

# ou Node.js
npx serve .
```

Acesse: `http://localhost:8000`

### Opção 2: Live Server (VS Code)

1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

---

## Manutenção

### Alterar Conteúdo

Edite o arquivo `src/data/content.js` para atualizar:
- Textos e informações
- Galeria de imagens
- Agenda de eventos
- Links de redes sociais

### Alterar Estilos

Edite o arquivo `src/styles/main.css` para modificar:
- Cores (variáveis CSS no `:root`)
- Tipografia
- Espaçamentos
- Animações

### Adicionar Imagens

1. Coloque a imagem em `public/assets/images/gallery/`
2. Adicione a referência em `src/data/content.js` no array `gallery`

---

## Stack Técnica

- **HTML5** — Semântico e acessível
- **CSS3** — Variáveis, Grid, Flexbox, Animações
- **JavaScript (Vanilla)** — Sem frameworks pesados
- **Fontes** — Google Fonts (Anton + Inter)
- **Imagens** — Unsplash (licença livre)

---

## Contato

- **Instagram:** [@bloco_imperio_da_pedra](https://www.instagram.com/bloco_imperio_da_pedra/)
- **WhatsApp:** [A definir]
