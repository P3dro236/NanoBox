# Prompt de Geração: Componente HeroSection (NanoBox)

## Contexto e Objetivo
Crie o componente React `HeroSection.jsx` para o projeto NanoBox. Este componente representa a primeira dobra da landing page e deve causar um impacto visual digno de um lançamento da Apple ou Linear App. O foco é minimalismo extremo, sofisticação e storytelling cinematográfico.

---

## Estrutura do Componente

### 1. Elementos de Texto (Hierarquia)
- **Tagline Superior:** Um pequeno badge ou texto discreto com borda suave escrito "Soberania Digital Reinventada".
- **Headline Principal:** Frase gigante, utilizando as fontes configuradas, com espaçamento ultra-compacto (`tracking-tighter`):
  "Seu próprio Google Drive dentro da sua casa."
- **Sub-headline:** Texto explicativo em tom cinza muted, descrevendo em poucas palavras a fusão entre hardware local e facilidade cloud.

### 2. Ações (CTAs)
- **Botão Principal:** Arredondado (`rounded-full`), fundo off-white/branco, texto preto, com efeito hover suave e micro-escala, escrito "Garantir Meu NanoBox".
- **Botão Secundário:** Link ou botão transparente com uma seta discreta (`lucide-react`), escrito "Conhecer a tecnologia".

### 3. Mockup Central e Efeito Scroll/Parallax
- Inclua um contêiner centralizado que representará o hardware físico do NanoBox.
- O elemento deve iniciar com uma animação de revelação suave (`fade-in` + `blur-reveal` + `scale-up`) ao carregar a página.
- Amarre o componente ao hook `useScroll` do Framer Motion para que, à medida que o usuário faça o scroll, o mockup mude levemente de ângulo ou escala (efeito parallax cinematográfico).

---

## Restrições de Estilo e Código (Tailwind)
- Fundo estrito: `#050505`.
- Texto estrito: `#F5F5F5` para o título principal.
- Use espaço negativo generoso (`py-24` ou `py-32`) para dar imponência ao layout.
- Certifique-se de que o componente é exportado corretamente e não contém dependências externas fantasmas.