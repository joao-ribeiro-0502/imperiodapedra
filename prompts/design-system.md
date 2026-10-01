# Design System — G.R.B.C. Império da Pedra

## Identidade Visual

**Conceito:** Brasão contemporâneo em preto e ouro, transmitindo luxo, tradição e força carnavalesca.

---

## Paleta de Cores

### Neutros (Preto)
| Cor | Hex | Uso |
|-----|-----|-----|
| Black | `#000000` | Fundo principal |
| Black 900 | `#050505` | Variação de fundo |
| Black 800 | `#0B0B0B` | Seções alternadas |
| Black 700 | `#111111` | Cards e elementos |

### Dourado (Metálico)
| Cor | Hex | Uso |
|-----|-----|-----|
| Gold 900 | `#8A5200` | Dourado escuro |
| Gold 700 | `#D99A00` | Dourado médio |
| Gold 500 | `#F5B800` | Ouro principal |
| Gold 400 | `#FFD447` | Ouro claro |
| Gold 100 | `#FFF3B0` | Highlight |

### Branco
| Cor | Hex | Uso |
|-----|-----|-----|
| White | `#FFFFFF` | Texto principal |
| White 100 | `#f5f5f5` | Texto secundário |
| White 200 | `#e0e0e0` | Texto terciário |

---

## Gradientes

```css
/* Gradiente dourado principal */
--gradient-gold: linear-gradient(135deg, #8A5200 0%, #D99A00 25%, #F5B800 50%, #FFD447 75%, #FFF3B0 100%);

/* Gradiente vertical */
--gradient-gold-vertical: linear-gradient(180deg, #FFD447 0%, #F5B800 50%, #D99A00 100%);

/* Gradiente escuro (fundo) */
--gradient-dark: linear-gradient(180deg, #000000 0%, #0B0B0B 100%);
```

---

## Tipografia

### Títulos
- **Fonte:** Anton (Google Fonts)
- **Estilo:** Caixa alta, pesada, condensada
- **Uso:** Headlines, títulos de seção, CTAs

### Textos
- **Fonte:** Inter (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700
- **Uso:** Parágrafos, botões, navegação

---

## Elementos de Design

### Círculos Concêntricos
Inspirados no brasão, utilizados no hero como elemento decorativo animado.

### Linhas Finas
Divisores e bordas com `1px` em dourado, criando elegância e sofisticação.

### Diamantes
Pequenos quadrados rotacionados (45°) como divisores decorativos.

### Brilhos Discretos
Gradientes radiais sutis para efeito metálico e profundidade.

---

## Componentes

### Botões
- **Primário:** Gradiente dourado, texto preto, sombra dourada
- **Secundário:** Transparente, borda dourada, texto branco

### Cards
- Fundo escuro (`#111111`)
- Borda sutil dourada
- Hover com deslocamento e destaque

### Navegação
- Fixa no topo
- Fundo com blur
- Links com underline animado

---

## Animações

### Entrada
- Fade-in com translateY (30px)
- Trigger: IntersectionObserver
- Duração: 0.6s

### Hover
- Elevação (-2px a -5px)
- Sombra dourada intensificada
- Transição: 0.3s

### Hero
- Círculos com pulse (8s loop)
- Logo com float (6s loop)
- Linha de scroll animada

---

## Responsividade

### Breakpoints
- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

### Mobile First
- Menu hambúrguer
- Grid single column
- Fontes escalonadas com `clamp()`

---

## Acessibilidade

- Skip link para conteúdo
- ARIA labels em elementos interativos
- Contraste AA compliant
- `prefers-reduced-motion` support
- Navegação por teclado (ESC fecha menu)
