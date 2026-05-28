# NanoBox — Design System & Visual Tokens

## 1. Identidade e Atmosfera Visual
A atmosfera da marca deve evocar **silêncio técnico, sofisticação, segurança física e tecnologia invisível**. O layout se apoia fortemente no uso de espaço negativo abundante para deixar a tipografia gigante e os mockups respirarem.

---

## 2. Paleta de Cores Clássica (Tokens Tailwind)

### Backgrounds (Modo Escuro Obrigatório)
- **Base Principal:** `#050505` (`bg-[#050505]`)
- **Superfícies de Cards/Seções:** `#0F0F10` (`bg-[#0F0F10]`)
- **Elevações/Elementos Flutuantes:** `#171717` (`bg-[#171717]`)

### Texto e Legibilidade
- **Título Primário:** `#F5F5F5` (Branco Puro / Off-white de Alto Contraste - `text-[#F5F5F5]`)
- **Texto Secundário/Subtítulos:** `#D4D4D8` (`text-zinc-300`)
- **Texto de Suporte/Muted:** `#A1A1AA` (`text-zinc-400`)

### Fronteiras e Detalhes
- **Bordas de Cards e Divisores:** `rgba(255, 255, 255, 0.08)` (`border-white/5` ou `border-white/8`)

---

## 3. Tipografia e Escala
- **Fontes Permitidas:** `Inter` ou `SF Pro Display` (sans-serif limpa).
- **Headlines da Hero:** `text-5xl` a `text-7xl` no desktop, com `font-bold` ou `font-extrabold`, `tracking-tighter`.
- **Alinhamento:** Uso rigoroso de alinhamento consistente em tabelas e listas para preservar a estética de arquitetura limpa.

---

## 4. Componentes e Micro-interações

### Botões Premium (CTAs)
- **Estrutura:** `rounded-full`, padding compensado, sem bordas pesadas.
- **Efeito Hover:** Transição suave de opacidade ou escala leve (`scale: 1.02`), utilizando o tempo de transição de `300ms` a `500ms` com `ease-in-out`.

### Cards de Conteúdo
- Glassmorphism sutil: `backdrop-blur-md bg-white/[0.02] border border-white/10`.
- Bordas levemente arredondadas (`rounded-2xl` ou `rounded-3xl`).

### Navbar Flutuante
- Fixa no topo com `position: fixed`, largura reduzida (`max-w-6xl`), `rounded-full`, fundo transparente com `backdrop-blur-lg bg-[#050505]/60`.

---

## 5. Motion Tokens (Framer Motion Constants)
Para garantir consistência em todas as seções, utilize estas variantes padrão:

```javascript
export const cinematicFadeReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const smoothScaleOnScroll = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
};