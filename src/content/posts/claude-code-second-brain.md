---
title: Claude Code como assistente pessoal — código e second brain
date: 2026-03-09
description: Como tenho usado o Claude Code para montar um sistema de conhecimento pessoal no Obsidian e como assistente de código no dia a dia.
tags: [notas, tecnologia]
---

Comecei esse fim de semana sem nenhuma intenção de trabalhar. Era domingo, estava de férias,
e o plano era descansar. Acabei passando boa parte do tempo configurando um sistema inteiro
com o Claude Code — e saí do outro lado com algo que realmente uso.

Isso diz alguma coisa sobre o que o Claude Code é, na prática.

---

## O problema que eu tinha

Tenho um vault no Obsidian há um tempo. Notas acumulam, links se formam, mas o sistema
nunca ficava redondo. O problema não era a ferramenta — era o atrito de capturar coisas no
momento certo, de manter as notas linkadas, de não deixar o vault virar um cemitério de
arquivos soltos.

Tentei resolver com templates, com plugins, com rotinas. Funcionava por um tempo e
depois parava.

O que mudou foi usar o Claude Code como um colaborador ativo dentro do vault, não só
como um gerador de texto.

---

## Como funciona na prática

O Claude Code tem acesso ao vault inteiro como diretório de trabalho. Ele lê, escreve e
edita arquivos Markdown diretamente, com os mesmos links wiki, frontmatter YAML e
convenções que o Obsidian usa.

A partir daí criei uma série de comandos — o Claude chama de *skills* — que funcionam como
assistentes especializados: um para a revisão semanal, outro para capturar aprendizados
técnicos, outro para o standup diário, outro para registrar sessões de trabalho. Cada um
sabe onde escrever, como linkar com notas existentes, como não duplicar informação.

O que mais uso no dia a dia é o `/morning` — um briefing de manhã que lê as notas dos
últimos dias, lista tarefas em aberto, faz perguntas sobre humor e foco, e preenche a daily
note com tudo isso. Parece pequeno, mas tira o atrito de começar o dia sem contexto.

Outra coisa que funcionou bem: o Claude detecta entidades nas coisas que escrevo e cria
notas automaticamente. Se eu menciono que vou para Florianópolis, ele cria
`Pessoal/Lugares/Florianópolis.md`, linka na daily note e conecta com notas relacionadas
já existentes. O vault cresce junto com o que eu vivo, sem eu ter que gerenciar isso
manualmente.

---

## Como assistente de código

Nesse mesmo fim de semana, o Claude Code construiu boa parte deste site comigo.

O fluxo é diferente do que eu esperava. Não é "escreva uma função X" e copiar o resultado.
É mais próximo de ter um dev que lê o código existente, entende o contexto, e propõe
mudanças cirúrgicas. Ele usa o histórico de commits, lê os arquivos antes de editar, e
quando faz algo errado — porque faz — é fácil reverter e tentar de novo.

O que funcionou bem: mudanças de estilo e layout (a sidebar, o sistema de temas), criação
de páginas a partir de conteúdo existente (o currículo saiu do PDF direto para o Astro),
e pequenas correções que seriam chatas de fazer manualmente.

O que exige atenção: ele pode ser prolixo nas soluções. Às vezes propõe algo mais
complexo do que o necessário, e cabe a você puxar de volta pro simples. A qualidade do
resultado depende muito de saber o que pedir — e de revisar o que foi feito.

---

## O que mudou

O vault virou algo que eu realmente consulto. As notas se conectam de forma útil. Tenho
contexto quando retomo um projeto depois de dias afastado.

O site foi do zero ao publicado em dois dias — com currículo, páginas de leitura, sistema
de temas, deploy automático no Vercel.

Não acho que o Claude Code substitui entender o que está sendo feito. Pelo contrário:
quanto mais você entende, melhor ele funciona. Mas ele remove uma quantidade grande de
atrito mecânico — o tipo de coisa que você procrastina não porque é difícil, mas porque
é chato.

Pra um sistema pessoal como um vault ou um site, onde você é o único usuário e o único
mantenedor, esse tipo de alavancagem faz diferença real.
