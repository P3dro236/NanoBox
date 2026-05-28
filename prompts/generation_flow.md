# NanoBox — Fluxo Modular de Geração de Código

Para evitar que a IA esgote a janela de contexto ou gere códigos incompletos e genéricos, **NUNCA peça o site inteiro de uma vez**. Siga rigorosamente os passos abaixo durante as interações com o gerador do Antigravity ou do chat.

---

## Passo 1: Inicialização do Ambiente e Configurações Globais
1. Solicite a criação do arquivo de configuração do Tailwind (`tailwind.config.js`) injetando os tokens exatos presentes no `context/02_design-system.md`.
2. Configure a estrutura básica do projeto Vite, instalando as dependências corretas (`framer-motion`, `lucide-react`).

## Passo 2: O Coração da Página (Animações Globais)
1. Forneça o prompt `prompts/animations/motion_variants.md` para a IA criar o arquivo de utilitários de animação. Esses tokens serão importados por todas as seções.

## Passo 3: Geração Individual de Componentes (Na Ordem Narrativa)
1. Use o prompt do Hero (`prompts/components/hero_section.md`) para gerar a primeira dobra. Revise o resultado visual antes de prosseguir.
2. Siga gerando componente por componente seguindo as especificações contidas no arquivo `context/03_architecture.md`, sempre reafirmando o estilo visual Apple/Linear (Dark Mode).

## Passo 4: Integração, Responsividade e Refinamento
1. Monte o arquivo principal `App.jsx` importando sequencialmente todas as dobras.
2. Solicite a checagem de responsividade mantendo a regra *desktop-first* com colapsos elegantes para telas mobile de toque.