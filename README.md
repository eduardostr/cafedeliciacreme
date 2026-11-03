# Café Delícia Creme

Landing page da Café Delícia Creme para apresentar a marca, divulgar cafés gourmet saborizados e direcionar encomendas para o WhatsApp.

## About do repositório

> Landing page responsiva da Café Delícia Creme, desenvolvida com React, Vite, Tailwind CSS e Framer Motion. Apresenta a marca, seis sabores de cafés gourmet, informações sobre encomendas e atalhos para contato pelo WhatsApp e Instagram.

Esse texto tem menos de 350 caracteres e pode ser usado no campo **About → Description** do GitHub. Essa configuração é independente do README.

## Recursos implementados

- Navegação fixa entre as seções, rolagem suave e menu para dispositivos móveis.
- Apresentação da marca e seção sobre o negócio.
- Cardápio com imagens e descrições de seis sabores: Tradicional, Churros, Nutella, Paçoca, Cappuccino e Ovomaltine.
- Explicação das etapas da encomenda e apresentação dos diferenciais.
- Chamadas para contato pelo WhatsApp e Instagram, além de botão flutuante do WhatsApp.
- Layout responsivo, animações de entrada e efeitos de interação.
- Identidade visual com logotipo, imagens dos produtos e favicon.

O projeto atual é uma aplicação frontend. Os pedidos são encaminhados ao WhatsApp; não há backend, banco de dados, carrinho ou pagamento integrado no código.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 | Componentes e interface |
| Vite 8 | Desenvolvimento e geração do build |
| Tailwind CSS 4 | Estilos utilitários e responsividade |
| Framer Motion 12 | Animações e transições |
| ESLint 9 | Análise estática do código |

## Executar localmente

Requisitos: Node.js compatível com o Vite 8 (`^20.19.0` ou `>=22.12.0`) e npm.

Na pasta do projeto, instale as dependências e inicie o servidor:

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite no terminal.

### Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Iniciar o servidor de desenvolvimento |
| `npm run build` | Gerar os arquivos de produção em `dist/` |
| `npm run preview` | Visualizar localmente o build de produção |
| `npm run lint` | Executar a análise estática com ESLint |

Para conferir o build localmente:

```bash
npm run build
npm run preview
```

## Estrutura

```text
public/                  # Logotipo, imagens dos sabores e favicons
src/
  assets/                # Recursos de imagem adicionais
  components/
    Navbar.jsx           # Navegação e menu móvel
    Hero.jsx             # Apresentação inicial
    About.jsx            # Sobre a marca
    Flavors.jsx          # Cardápio de sabores
    HowItWorks.jsx       # Etapas da encomenda
    Differentials.jsx    # Diferenciais da marca
    CtaFooter.jsx        # Chamadas para contato e rodapé
    WhatsAppButton.jsx   # Botão flutuante de contato
    Icons.jsx            # Ícones da interface
  App.jsx                # Composição das seções
  main.jsx               # Inicialização do React
  index.css              # Estilos globais, fontes e cores
index.html               # Documento HTML e metadados básicos
vite.config.js           # Plugins do React e Tailwind CSS
eslint.config.js         # Configuração da análise estática
```

## Manutenção

- **Sabores:** edite a lista em `src/components/Flavors.jsx` e as imagens em `public/`.
- **Textos e seções:** altere o componente correspondente em `src/components/`.
- **Cores e fontes:** ajuste `src/index.css`. As fontes são carregadas pelo Google Fonts e dependem de acesso à internet.
- **Contato:** os links estão definidos nos componentes `Hero.jsx`, `Navbar.jsx`, `CtaFooter.jsx` e `WhatsAppButton.jsx`. Mantenha os destinos consistentes ao atualizar o contato comercial.
- **Publicação:** utilize o conteúdo gerado em `dist/` em uma hospedagem de arquivos estáticos. Os caminhos atuais dos recursos pressupõem publicação na raiz do domínio; hospedagem em subdiretório exige ajustar a base do Vite e os caminhos dos recursos.

## Dados e credenciais

A execução atual não exige arquivo `.env` nem credenciais de serviços. Esta documentação não reproduz números de telefone, dados pessoais ou segredos.

Ao adicionar integrações, mantenha credenciais fora do repositório e do frontend. Variáveis com prefixo `VITE_` ficam acessíveis no código entregue ao navegador e devem conter apenas informações públicas. Links de contato publicados na interface também são visíveis aos visitantes.
