# NanoBox — Master Instructions & Global AI Context

## 1. Diretrizes Absolutas de Comportamento
Este arquivo serve como o "Cérebro de Comando" para qualquer IA encarregada de gerar ou refinar o código da landing page do projeto NanoBox. As regras aqui contidas anulam qualquer comportamento padrão ou tendência genérica de geração.

- **Stack Tecnológica Estrita:** React, TailwindCSS, Framer Motion, Vite.
- **Abordagem de Design:** Apple Modern + Linear App style. Foco absoluto em minimalismo premium, tipografia robusta, alto contraste interno e uso estratégico de espaço negativo.
- **Restrições Negativas Radicais:**
  - PROIBIDO o uso de Bootstrap ou qualquer outra biblioteca de UI enterprise genérica (como Ant Design ou Material UI crua).
  - PROIBIDO o uso de estéticas cyberpunk caricatas, neon exagerado ou gradientes "arco-íris".
  - PROIBIDO gerar código monolítico (toda a página em um único arquivo). O projeto deve ser estritamente modular.
- **Mentalidade de Desenvolvimento:** Código limpo, sem bloatware, focado em performance AAA e fluidez de animação.

---

## 2. Padrões de Implementação Técnica

### A. Estrutura de Componentes (React)
- Cada seção descrita na arquitetura deve ser um componente funcional independente (`src/components/sections/`).
- Use hooks nativos para controle de estado de animações e interações simples.
- Convenção de nomenclatura: PascalCase para componentes (`HeroSection.jsx`, `ProblemSection.jsx`).

### B. Estilização (TailwindCSS)
- Utilize estritamente as classes utilitárias do Tailwind configuradas de acordo com o `design-system.md`.
- Evite estilos inline (`style={{...}}`), exceto quando estritamente dinâmicos ou calculados via Framer Motion baseado no scroll.
- Fronteiras e divisores devem usar opacidade sutil: `border-white/10` ou `rgba(255,255,255,0.08)`.

### C. Animações Cinematográficas (Framer Motion)
- Toda animação deve passar a sensação de "peso físico" e suavidade.
- Use transições baseadas em springs para elementos interativos (`type: "spring", stiffness: 100, damping: 20`).
- Implemente Scroll Storytelling utilizando os hooks `useScroll` e `useTransform` do Framer Motion para seções do tipo *sticky*.

---

## 3. Instruções de Consumo de Contexto
Ao ler os arquivos subsequentes (`01_project.md`, `02_design-system.md`, `03_architecture.md`), a IA geradora deve cruzar as informações estruturais com as regras visuais aqui descritas. Nunca assuma caminhos não documentados. Em caso de omissão de cores ou espaçamentos, recorra estritamente ao Design System oficial.