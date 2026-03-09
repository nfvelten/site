---
title: Claude Code como assistente pessoal — vault, Neovim, temas e site
date: 2026-03-09
description: Como tenho usado o Claude Code para montar um sistema de conhecimento pessoal no Obsidian, configurar o ambiente de desenvolvimento e construir este site — tudo em uma semana de férias.
tags: [notas, tecnologia]
---

Comecei esse fim de semana sem nenhuma intenção de trabalhar. Era domingo de férias, e o
plano era descansar. Resolvi finalmente sentar e montar o sistema que ficava postergando
há meses. Passei os dois dias seguintes com o Claude Code, e saí do outro lado com algo
que realmente uso.

---

## O vault Obsidian

Tenho um vault no Obsidian há um tempo. Notas acumulam, links se formam, mas o sistema
nunca ficava redondo. O problema não era a ferramenta — era o atrito de capturar as coisas
no momento certo, de manter as notas conectadas, de não deixar o vault virar um cemitério
de arquivos soltos.

O que mudou foi usar o Claude Code como um colaborador ativo dentro do vault. Ele tem
acesso ao diretório inteiro, lê e escreve Markdown diretamente, respeita os links wiki,
o frontmatter YAML e as convenções que o Obsidian usa.

Criei uma série de comandos — o Claude chama de *skills* — que funcionam como assistentes
especializados. No total foram onze: um para a revisão semanal, outro para capturar
aprendizados técnicos, outro para o standup diário, outro para registrar sessões de
trabalho, outro para brainstorming, outro para captura de ideias, outro para contexto de
projeto, entre outros.

O que mais uso é o `/morning` — um briefing de manhã que lê as notas dos últimos dias,
lista tarefas em aberto, faz algumas perguntas sobre humor e foco, e preenche a daily note
com tudo isso. Tira o atrito de começar o dia sem contexto.

Outra coisa que funcionou bem: o Claude detecta entidades nas coisas que escrevo e cria
notas automaticamente. Menciono que vou para Florianópolis e ele cria
`Pessoal/Lugares/Florianópolis.md`, linka na daily note, conecta com notas relacionadas
já existentes no vault. O sistema cresce junto com o que acontece, sem precisar gerenciar
isso manualmente.

---

## Neovim integrado ao vault

Uso Neovim como editor principal, então queria que a interação com o vault funcionasse de
dentro do nvim, sem precisar abrir o Obsidian toda hora.

O Claude Code ajudou a configurar isso de forma prática. O resultado foi um arquivo
`vault-tasks.lua` com um conjunto de keybindings específicos para o vault:

- `<leader>va` — task picker de tarefas de trabalho
- `<leader>vp` — task picker de tarefas pessoais
- `<leader>vd` — tasks da daily note de hoje
- `<leader>vf` — busca fulltext no vault
- `<leader>vn` — nova nota
- `<leader>vb` — backlinks da nota atual
- `<leader>vm` — navegar pelo vault via MOC
- `<leader>vi` — captura rápida para o Inbox
- `<leader>vg` — lazygit no vault
- `[[` em insert mode — autocomplete de wikilinks

Além disso, instalamos o `obsidian.nvim` com hover preview flutuante — pressionar `K`
sobre um wikilink abre um preview da nota sem sair do arquivo atual. Também configuramos
o Yazi (`<leader>e/E`) para navegar arquivos e o Zoxide para navegação rápida de
diretórios no shell e no nvim.

Para completar, remapeamos o `Super+N` no Hyprland para abrir a daily note como um
scratchpad — uma janela flutuante do Alacritty com o nvim já apontando para o arquivo
de hoje. O script `~/.local/bin/daily-note` cria a nota se não existir, com o template
certo, e faz o toggle da janela. Antes o `Super+N` abria o editor padrão. Agora abre
o contexto do dia.

---

## Os temas cimarrão e tererê

Uma das coisas que mais me incomodava era a inconsistência visual entre os ambientes.
Terminal com uma paleta, Neovim com outra, Waybar com outra. Nada conversava entre si.

Resolvi isso criando dois temas com o Claude Code: **cimarrão** e **tererê**.

O cimarrão é o tema escuro — paleta oliva-industrial, inspirada no mate. Fundos em
tons de `#282d1c` a `#363c26`, texto em `#dce0d9`, accent em azul-aço `#7eb2d1`.
O tererê é o tema claro — manteiga de papel, com fundo `#fbf1c7`, texto marrom escuro
`#3c3836`, accent em teal `#076678`.

A ideia foi criar uma paleta unificada e aplicar em todos os lugares de uma vez:

- **Neovim** — `cimarrao.lua` e `terere.lua` com highlighting completo para treesitter,
  LSP, telescope, gitsigns, lazy.nvim, which-key e outros plugins
- **Omarchy** — temas completos em `~/.config/omarchy/themes/cimarrao/` e `/terere/`,
  incluindo `colors.toml`, `waybar.css`, `btop.theme`, `neovim.lua`, wallpapers e
  configurações para Alacritty, Ghostty, Kitty, Mako, Hyprlock e Hyprland
- **Obsidian** — `theme.css` com as cores do cimarrão aplicadas aos headings, links,
  tags, código e syntax highlighting
- **Este site** — tererê de dia (6h–18h), cimarrão à noite (18h–6h), alternando
  automaticamente via `data-theme` no HTML sem flash de carregamento

Tudo na mesma paleta. Terminal, editor, barra de tarefas, lock screen, notificações e
site pessoal.

---

## O site

Este site foi construído do zero durante esses dois dias, também com o Claude Code.

A stack é Astro com MDX, deploy automático no Vercel a cada push no `main`. O processo
foi iterativo: o Claude propunha, eu avaliava, ajustávamos. Sidebar com layout correto,
sistema de temas por horário, Giscus com tema dinâmico seguindo o tema do site, tipografia
em EB Garamond, newsletter inline, RSS.

Uma coisa que funcionou bem foi gerar conteúdo a partir de fontes existentes. A página
de currículo saiu do meu PDF do LinkedIn — passei o arquivo, o Claude leu as cinco
páginas e montou a página completa com as experiências, stack por empresa, competências e
certificações. A página Sobre e a página Agora foram escritas a partir das daily notes dos
últimos dias. Não precisei redigir nada do zero.

---

## O que mudou

O vault virou algo que eu realmente consulto. As notas se conectam de forma útil. Tenho
contexto quando retomo um projeto depois de dias afastado.

O ambiente de desenvolvimento está consistente pela primeira vez — mesma paleta em todo
lugar, keybindings que fazem sentido, daily note acessível com um atalho.

O site foi do zero ao publicado em dois dias, com conteúdo real.

Não acho que o Claude Code substitui entender o que está sendo feito. Pelo contrário:
quanto mais você entende, melhor ele funciona. O que ele faz bem é remover o atrito
mecânico — o tipo de coisa que você procrastina não porque é difícil, mas porque é chato.

Configurar um tema completo para cinco ambientes diferentes ao mesmo tempo seria um
trabalho de vários dias feito manualmente. Criar onze commands para um vault, cada um com
sua lógica de escrita e linkagem, idem. Com o Claude Code foi um domingo e uma segunda.

Para sistemas pessoais — onde você é o único usuário e o único mantenedor — essa
alavancagem faz diferença real.
