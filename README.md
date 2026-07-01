# 🐙 Visualizador de Perfil GitHub

Um aplicativo web interativo que permite visualizar perfis de usuários do GitHub e seus repositórios em tempo real, com uma interface moderna e responsiva.

## 🚀 Funcionalidades

- ✨ Buscar perfis de usuários do GitHub
- 👤 Visualizar informações completas do perfil (avatar, nome, bio, seguidores)
- 📚 Listar os últimos 10 repositórios do usuário
- ⭐ Exibir estatísticas dos repositórios (stars, forks, watchers, linguagem)
- 📱 Design totalmente responsivo para mobile, tablet e desktop
- ⌨️ Buscar pressionando Enter ou clicando no botão
- 🎨 Interface moderna com gradiente e animações suaves

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização responsiva com CSS Grid e Flexbox
- **JavaScript (ES6+)** - Lógica da aplicação com módulos
- **GitHub API** - Integração com API pública do GitHub
- **Fetch API** - Requisições HTTP

## 📂 Estrutura do Projeto

```
visualizador-perfil-github/
├── index.html                 # Arquivo principal HTML
├── README.md                  # Este arquivo
└── src/
    ├── css/
    │   ├── animations.css     # Animações e transições
    │   ├── reset.css          # Reset de estilos padrão
    │   ├── responsive.css     # Media queries responsivas
    │   └── styles.css         # Estilos principais
    └── js/
        ├── index.js           # Lógica principal e event listeners
        └── modules/
            ├── api.js         # Funções de integração com GitHub API
            ├── renderer.js    # Funções de renderização HTML
            └── ui.js          # Funções de manipulação da UI
```

## 🎯 Como Usar

### 1. Abrir o Projeto

- Clone ou baixe este repositório
- Abra o arquivo `index.html` em seu navegador

### 2. Buscar um Usuário

- Digite o nome de usuário do GitHub no campo de busca
- Pressione **Enter** ou clique no botão **Buscar**
- Os dados do perfil e repositórios aparecerão automaticamente

### 3. Visualizar Informações

- **Perfil**: Avatar, nome, biografia, seguidores e seguindo
- **Repositórios**: Nome, stars, forks, watchers e linguagem principal

## 📋 Exemplos de Uso

Digite nomes de usuários conhecidos do GitHub para testar:

- `torvalds` (Linus Torvalds)
- `gvanrossum` (Guido van Rossum)
- `octocat` (GitHub mascot)

## 🔧 API Utilizada

O projeto utiliza a **GitHub REST API** (pública, sem autenticação necessária):

- `GET /users/{username}` - Dados do usuário
- `GET /users/{username}/repos` - Lista de repositórios

Documentação: [GitHub API Docs](https://docs.github.com/pt/rest)

## ⚠️ Limitações

- A API pública do GitHub tem limite de 60 requisições por IP por hora (sem autenticação)
- Exibe apenas os 10 repositórios mais recentes
- Repositórios vazios ou forkados podem não aparecer

## 🎨 Recursos de Design

- **Gradiente de fundo** animado em 6 cores
- **Grid responsivo** para exibição dos repositórios
- **Cards com efeito hover** para melhor interatividade
- **Animação de carregamento** com spinner
- **Layout fluido** que se adapta a qualquer tamanho de tela

## 🤝 Melhorias Futuras

- [ ] Autenticação com GitHub para aumentar limite de requisições
- [ ] Filtrar repositórios por linguagem
- [ ] Busca avançada com filtros adicionais
- [ ] Modo escuro
- [ ] Exportar dados em PDF
- [ ] Histórico de buscas

## 📝 Notas

Este projeto foi desenvolvido como exercício prático de integração com APIs e desenvolvimento frontend com HTML, CSS e JavaScript vanilla.

## 📄 Licença

Este projeto é de código aberto e pode ser utilizado livremente para fins educacionais.
