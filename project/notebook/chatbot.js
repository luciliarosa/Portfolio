/* ── Lucilia's Notebook — Assistente Virtual de Estudos ── */
(function () {
  'use strict';

  /* ─── BASE DE CONHECIMENTO COMPLETA DO CADERNO ─── */
  const KNOWLEDGE_BASE = [
    // GERAL & BOAS-VINDAS
    {
      id: 'welcome',
      category: 'Geral',
      keywords: ['ola', 'oi', 'hey', 'hello', 'bom dia', 'boa tarde', 'boa noite', 'e ai', 'saudacoes', 'tudo bem', 'ajuda'],
      title: 'Boas-vindas',
      answer: 'Olá! 👋 Sou a **Assistente Virtual do Caderno da Lucilia**!\n\nEstou aqui para tirar dúvidas sobre tudo o que está documentado neste caderno de tecnologia:\n• 💡 **Lógica de Programação** (algoritmos, pseudocódigo)\n• 🐍 **Python** (fundamentos, POO, estruturas & frameworks)\n• 🌐 **Frontend** (HTML, CSS, JavaScript & React)\n• 🐙 **DevOps** (Git & GitHub)\n• 🗄️ **Banco de Dados** (SQL & PostgreSQL)\n• 🌍 **Idiomas** (Inglês e Francês)\n\nComo posso te ajudar hoje?',
      followUps: ['O que tem no caderno?', 'Como praticar Python?', 'Quem é a Lucilia?']
    },
    {
      id: 'about_notebook',
      category: 'Geral',
      keywords: ['o que e o caderno', 'sobre o caderno', 'como funciona o caderno', 'o que tem no caderno', 'conteudo do caderno', 'materias do caderno', 'aulas do caderno'],
      title: 'Sobre o Caderno',
      answer: '📓 O **Lucilia\'s Notebook** é um caderno virtual de estudos e anotações técnicas organizado pela **Lucilia Rosa**.\n\nEle conta com **56 aulas catalogadas**, divididas em 9 módulos temáticos, além de:\n• 🎮 **Quizzes interativos** para fixação de conteúdo\n• 💻 **Console Python interativo** no navegador\n• 📝 Resumos didáticos e códigos de exemplo comentados\n\nVocê pode clicar nos menus ou usar a barra de pesquisa na página para encontrar qualquer tópico!',
      followUps: ['Ver matérias de Python', 'Ver aulas de Lógica', 'Quero fazer um Quiz']
    },
    {
      id: 'about_lucilia',
      category: 'Portfólio',
      keywords: ['quem e lucilia', 'sobre a lucilia', 'autora', 'portfolio', 'desenvolvedora', 'quem criou', 'contato'],
      title: 'Sobre a Lucilia Rosa',
      answer: '👩‍💻 **Lucilia Rosa** é desenvolvedora de software com foco em Python, JavaScript, React e Engenharia de Dados.\n\nEla criou este caderno para documentar sua trajetória de aprendizado e compartilhar conhecimento técnico de forma didática.\n\n👉 Para conhecer seus projetos práticos, experiências profissionais e certificações, você pode visitar o [Portfólio Principal da Lucilia](../../frontend/index.html)!',
      followUps: ['Ver portfólio completo', 'Quais tecnologias ela estuda?']
    },

    // LÓGICA DE PROGRAMAÇÃO
    {
      id: 'logica_intro',
      category: 'Lógica',
      keywords: ['logica', 'logica de programacao', 'o que e algoritmo', 'algoritmo', 'pseudocodigo', 'fluxograma', 'inicio'],
      title: 'Lógica de Programação',
      answer: '💡 **Lógica de Programação** é a base para qualquer linguagem!\n\n• **Algoritmo**: Uma sequência finita e ordenada de passos para resolver um problema (como uma receita de bolo).\n• **Pseudocódigo**: Uma forma estruturada de escrever algoritmos em linguagem humana simplificada.\n• **Fluxograma**: Representação gráfica dos passos (oval = início/fim, retângulo = instrução, losango = decisão condicional).\n\n📖 [Acessar aula: Lógica de Programação — do início ao código](fundamentals/logica/logica-programacao.html)',
      followUps: ['Pioneiros da computação', 'Fazer o Quiz de Lógica', 'O que é variável?']
    },
    {
      id: 'logica_history',
      category: 'Lógica',
      keywords: ['ada lovelace', 'alan turing', 'george boole', 'pioneiros', 'historia da computacao'],
      title: 'Pioneiros da Computação',
      answer: '🏛️ Os grandes nomes da história da computação presentes no caderno:\n\n• **Ada Lovelace**: Considerada a primeira programadora da história, escreveu o 1º algoritmo para a máquina analítica de Babbage.\n• **George Boole**: Criador da Álgebra Booleana (lógica de `Verdadeiro` e `Falso`), fundação de toda a computação moderna.\n• **Alan Turing**: Criador do conceito da Máquina de Turing e pioneiro da inteligência artificial.\n\n📖 [Revisar na aula de Lógica](fundamentals/logica/logica-programacao.html)',
      followUps: ['O que é Álgebra Booleana?', 'Fazer o Quiz de Lógica']
    },
    {
      id: 'logica_game',
      category: 'Lógica',
      keywords: ['quiz logica', 'jogo logica', 'game logica', 'desafio logica'],
      title: 'Quiz de Lógica',
      answer: '🎮 Você pode testar seus conhecimentos em lógica de programação agora mesmo no **Quiz Interativo**!\n\nSão perguntas dinâmicas sobre algoritmos, estruturas condicionais e história da computação.\n\n👉 [Jogar o Quiz de Lógica de Programação](fundamentals/logica/luci-game.html)',
      followUps: ['Revisar conceitos de Lógica', 'Ver Quiz de Python']
    },

    // PYTHON — HISTÓRIA & ZEN
    {
      id: 'py_history',
      category: 'Python',
      keywords: ['historia do python', 'quem criou python', 'guido van rossum', 'origem python', 'zen do python', 'pep 20'],
      title: 'História do Python & Zen',
      answer: '🐍 **Python** foi criado pelo holandês **Guido van Rossum** e lançado em 1991.\n\n• O nome é uma homenagem ao grupo britânico de comédia **Monty Python**.\n• Em 2008 foi lançado o **Python 3.0**, modernizando a linguagem.\n• **Zen do Python (PEP 20)**: princípios fundamentais de design. Dois dos mais famosos são:\n  - *"Bonito é melhor que feio."*\n  - *"Simples é melhor que complexo."*\n\n📖 [Aula: História do Python — origem e criação](backend/python/historia-python/py-historia.html)\n📖 [Aula: Ecossistema e Zen do Python](backend/python/historia-python/py-ecossistema.html)',
      followUps: ['Como praticar Python?', 'Variáveis em Python', 'Quiz de Python']
    },

    // PYTHON — FUNDAMENTOS
    {
      id: 'py_variables',
      category: 'Python',
      keywords: ['variavel em python', 'tipos primitivos', 'int', 'float', 'str', 'bool', 'type'],
      title: 'Variáveis e Tipos Primitivos em Python',
      answer: 'Em Python, a tipagem é dinâmica e forte:\n\n```python\nidade = 25          # int (número inteiro)\npreco = 49.90       # float (número decimal)\nnome = "Lucilia"    # str (texto)\nativo = True        # bool (verdadeiro/falso)\n```\n\n• Descobrir o tipo: `type(variavel)`\n• Conversão de tipos: `int("10")`, `float(5)`, `str(100)`\n\n📖 [Aula: Variáveis e Tipos Primitivos](backend/python/fundamentos/py-variaveis.html)',
      followUps: ['Operadores em Python', 'Condicionais if else', 'Console Python']
    },
    {
      id: 'py_operators',
      category: 'Python',
      keywords: ['operadores em python', 'aritmeticos', 'relacionais', 'logicos', 'soma', 'modulo'],
      title: 'Operadores em Python',
      answer: 'Os operadores essenciais no Python:\n\n• **Aritméticos**: `+` (soma), `-` (subtração), `*` (multiplicação), `/` (divisão real), `//` (divisão inteira), `%` (módulo/resto), `**` (potência).\n• **Relacionais**: `==` (igual), `!=` (diferente), `>`, `<`, `>=`, `<=`\n• **Lógicos**: `and` (ambos verdadeiros), `or` (pelo menos um verdadeiro), `not` (inverte).\n\n📖 [Aula: Operadores em Python](backend/python/fundamentos/py-operadores.html)',
      followUps: ['Condicionais if else', 'Laços for e while']
    },
    {
      id: 'py_conditionals',
      category: 'Python',
      keywords: ['if', 'elif', 'else', 'condicionais python', 'se senao python'],
      title: 'Estruturas Condicionais no Python',
      answer: 'Para tomar decisões no código, usamos `if`, `elif` e `else`:\n\n```python\nnota = 8.5\nif nota >= 7.0:\n    print("Aprovada! 🎉")\nelif nota >= 5.0:\n    print("Em recuperação! 📝")\nelse:\n    print("Reprovada. 📚")\n```\n\nLembre-se: em Python, a **indentação** (4 espaços) é obrigatória para definir o bloco de código!\n\n📖 [Aula: Estruturas Condicionais](backend/python/fundamentos/py-condicionais.html)',
      followUps: ['Laços de repetição', 'Funções em Python']
    },
    {
      id: 'py_loops',
      category: 'Python',
      keywords: ['lacos', 'loop', 'for', 'while', 'range', 'repeticao python', 'break', 'continue'],
      title: 'Laços de Repetição em Python',
      answer: 'Repetição com `for` e `while`:\n\n```python\n# Repetir um número fixo de vezes:\nfor i in range(5):\n    print(f"Passo {i}")\n\n# Repetir enquanto uma condição for verdadeira:\ncontador = 0\nwhile contador < 3:\n    print(contador)\n    contador += 1\n```\n\n• `break`: interrompe o laço imediatamente.\n• `continue`: pula para a próxima iteração.\n\n📖 [Aula: Laços de Repetição (for e while)](backend/python/fundamentos/py-lacos.html)',
      followUps: ['Funções em Python', 'Listas em Python']
    },
    {
      id: 'py_functions',
      category: 'Python',
      keywords: ['funcoes em python', 'def', 'parametros', 'return', 'args', 'kwargs'],
      title: 'Funções em Python',
      answer: 'Funções são blocos reutilizáveis declarados com a palavra `def`:\n\n```python\ndef saudacao(nome="Visitante"):\n    return f"Bem-vindo(a), {nome}!"\n\nmensagem = saudacao("Lucilia")\nprint(mensagem)\n```\n\n• `*args`: aceita múltiplos argumentos posicionais (como tupla).\n• `**kwargs`: aceita múltiplos argumentos nomeados (como dicionário).\n\n📖 [Aula: Funções — definindo e reutilizando código](backend/python/fundamentos/py-funcoes.html)',
      followUps: ['Estruturas de Dados', 'Console Python']
    },

    // PYTHON — ESTRUTURAS DE DADOS
    {
      id: 'py_data_structures',
      category: 'Python',
      keywords: ['estruturas de dados python', 'listas', 'tuplas', 'dicionarios', 'conjuntos', 'sets', 'fatiamento'],
      title: 'Estruturas de Dados em Python',
      answer: 'Python possui 4 estruturas nativas principais:\n\n1. **Listas** (`[1, 2, 3]`): Mutáveis, ordenadas e aceitam duplicatas.\n2. **Tuplas** (`(1, 2, 3)`): Imutáveis e ordenadas (mais rápidas e seguras).\n3. **Dicionários** (`{"chave": "valor"}`): Pares de chave e valor únicos.\n4. **Conjuntos / Sets** (`{1, 2, 3}`): Sem duplicatas e com operações matemáticas (união `|`, interseção `&`).\n\n📖 [Aula de Listas](backend/python/estrutura-de-dados/py-listas.html) | [Tuplas](backend/python/estrutura-de-dados/py-tuplas.html) | [Dicionários](backend/python/estrutura-de-dados/py-dicionarios.html) | [Sets](backend/python/estrutura-de-dados/py-conjuntos.html)',
      followUps: ['O que é Orientação a Objetos?', 'Console Python']
    },

    // PYTHON — POO
    {
      id: 'py_poo',
      category: 'Python',
      keywords: ['poo', 'orientacao a objetos', 'classes', 'objetos', 'atributos', 'metodos', 'heranca', 'polimorfismo', 'encapsulamento', 'abstracao', 'self', 'init'],
      title: 'Orientação a Objetos (POO) em Python',
      answer: '🏛️ **POO** é o paradigma de programação baseado em classes e objetos:\n\n• **Classe**: Molde ou blueprint.\n• **Objeto**: Instância viva da classe.\n• `__init__`: O método construtor.\n• `self`: Referência à própria instância.\n\n**Os 4 Pilares da POO**:\n1. *Abstração*: Isolar o que é essencial.\n2. *Encapsulamento*: Proteger atributos internos (usando `_` ou `__`).\n3. *Herança*: Reutilizar código de classes-mãe.\n4. *Polimorfismo*: Métodos com o mesmo nome comportando-se de forma diferente.\n\n📖 [Ver todas as 5 aulas de POO do caderno](notebook.html#python)',
      followUps: ['Exemplo de Classe em Python', 'Bibliotecas Python']
    },

    // PYTHON — CONSOLE & QUIZ
    {
      id: 'py_console',
      category: 'Python',
      keywords: ['console python', 'exercicios python', 'terminal python', 'praticar python', 'executar codigo'],
      title: 'Console Interativo Python',
      answer: '💻 O caderno conta com um **Console Python Interativo** embutido!\n\nVocê pode escrever, testar e executar códigos Python diretamente no seu navegador, resolvendo exercícios práticos sem precisar instalar nada.\n\n👉 [Abrir o Console Python Interativo](backend/python/console.html)',
      followUps: ['Quiz de Python', 'Aulas de Python']
    },

    // FRONTEND — HTML
    {
      id: 'html_info',
      category: 'Frontend',
      keywords: ['html', 'o que e html', 'tags semanticas', 'tim berners-lee', 'html5', 'estrutura html'],
      title: 'HTML & Tags Semânticas',
      answer: '🌐 **HTML** (HyperText Markup Language) é a estrutura da web, criada por **Tim Berners-Lee** em 1991.\n\n• **HTML5** introduziu tags semânticas que tornam o site acessível e amigável para motores de busca (SEO):\n  `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`\n• Elementos essenciais: `<h1>` a `<h6>` (títulos), `<p>` (parágrafo), `<a href="...">` (links), `<img src="..." alt="...">` (imagens).\n\n📖 [Aula: História do HTML](frontend/html-css/html/html-historia.html)\n📖 [Aula: Conceitos e Estrutura](frontend/html-css/html/html-conceitos.html)',
      followUps: ['O que é CSS?', 'O que é Box Model?']
    },

    // FRONTEND — CSS
    {
      id: 'css_info',
      category: 'Frontend',
      keywords: ['css', 'o que e css', 'box model', 'flexbox', 'como funciona o flexbox', 'display flex', 'grid', 'responsividade', 'hakon wium lie', 'estilizar', 'layout css'],
      title: 'CSS & Layout Moderno',
      answer: '🎨 **CSS** (Cascading Style Sheets) estiliza páginas web, criado por **Håkon Wium Lie** em 1994.\n\n• **Box Model**: Cada elemento tem 4 camadas:\n  `Content` (conteúdo) → `Padding` (espaçamento interno) → `Border` (borda) → `Margin` (espaçamento externo).\n• **Flexbox**: Perfeito para alinhar itens em 1 dimensão (`display: flex; justify-content: center; align-items: center;`).\n• **Responsividade**: Feita com `@media (max-width: 768px)` para adaptar a tela a celulares e tablets.\n\n📖 [Aula: História do CSS](frontend/html-css/css/css-historia.html)\n📖 [Aula: Conceitos e Flexbox](frontend/html-css/css/css-conceitos.html)',
      followUps: ['O que é JavaScript?', 'O que é Box Model?']
    },

    // FRONTEND — JAVASCRIPT
    {
      id: 'js_info',
      category: 'Frontend',
      keywords: ['javascript', 'js', 'dom', 'eventos', 'brendan eich', 'var let const', 'arrow function', 'es6'],
      title: 'JavaScript & Manipulação do DOM',
      answer: '⚡ **JavaScript** traz interatividade às páginas, criado por **Brendan Eich** em 1995.\n\n• **Declaração**: Prefira `const` (para valores constantes) e `let` (quando o valor muda). Evite `var`!\n• **DOM (Document Object Model)**: Interface para manipular elementos HTML via código:\n```javascript\nconst btn = document.querySelector("#meuBotao");\nbtn.addEventListener("click", () => {\n  alert("Botão clicado! 🎉");\n});\n```\n• **ES6+**: Arrow functions `() => {}`, Template literals `` `${var}` ``, desestruturação.\n\n📖 [Aula: JavaScript — história, DOM e eventos](frontend/js/js_basic.html)',
      followUps: ['O que é React?', 'O que é useState?']
    },

    // FRONTEND — REACT
    {
      id: 'react_info',
      category: 'Frontend',
      keywords: ['react', 'o que e react', 'jordan walke', 'jsx', 'virtual dom', 'componentes', 'props', 'hooks', 'usestate', 'useeffect'],
      title: 'Introdução ao React',
      answer: '⚛️ **React** é a biblioteca JavaScript para construção de interfaces criada pelo Facebook (Meta) por **Jordan Walke** em 2013.\n\n• **Componentes**: Blocos reutilizáveis que retornam interface.\n• **JSX**: Sintaxe declarativa semelhante a HTML dentro do JS.\n• **Virtual DOM**: Cópia leve do DOM em memória; o React recalcula e atualiza apenas o que mudou (alta performance).\n• **Props**: Propriedades enviadas de componente pai para filho.\n• **useState**: Hook para reatividade e gerenciamento de estado interno.\n\n📖 [Aula: Introdução ao React — história, JSX e componentes](frontend/react/react-intro.html)',
      followUps: ['O que é Git?', 'Banco de Dados SQL']
    },

    // DEVOPS — GIT & GITHUB
    {
      id: 'git_info',
      category: 'DevOps',
      keywords: ['git', 'github', 'commit', 'branch', 'merge', 'pull request', 'linus torvalds', 'staging', 'push', 'pull'],
      title: 'Git & GitHub',
      answer: '🐙 **Git** é o sistema de controle de versão mais usado no mundo, criado por **Linus Torvalds** em 2005.\n\n• **As 3 Áreas**:\n  1. *Working Directory* (arquivos locais)\n  2. *Staging Area* (`git add .`)\n  3. *Repository* (`git commit -m "mensagem"`)\n\n• **Branches**: Ramificações para trabalhar em novas features sem quebrar o código principal (`git branch`, `git switch`).\n• **GitHub**: Plataforma em nuvem para hospedar e colaborar em repositórios.\n\n📖 [Ver as 5 aulas de Git no caderno](notebook.html#git)',
      followUps: ['Comandos mais usados do Git', 'Banco de Dados']
    },

    // BANCO DE DADOS & POSTGRESQL
    {
      id: 'db_sql',
      category: 'Banco de Dados',
      keywords: ['banco de dados', 'sql', 'select', 'insert', 'update', 'delete', 'join', 'modelagem', 'chave primaria', 'pk', 'fk'],
      title: 'SQL & Modelagem de Dados',
      answer: '🗄️ **SQL** (Structured Query Language) gerencia bancos relacionais:\n\n• **Consultas**: `SELECT nome, email FROM usuarios WHERE ativo = true;`\n• **Manipulação**: `INSERT INTO`, `UPDATE ... SET`, `DELETE FROM`\n• **JOINs**: Une tabelas relacionadas (ex: `INNER JOIN` para dados correspondentes em ambas).\n• **Chave Primária (PK)**: Identificador único da linha.\n• **Chave Estrangeira (FK)**: Aponta para a PK de outra tabela.\n\n📖 [Ver as 4 aulas de SQL](notebook.html#banco)',
      followUps: ['O que é PostgreSQL?', 'Python com Banco de Dados']
    },
    {
      id: 'db_postgres',
      category: 'Banco de Dados',
      keywords: ['postgresql', 'postgres', 'slonik', 'banco relacional', 'acid', 'mvcc'],
      title: 'PostgreSQL — O Banco Open Source Mais Poderoso',
      answer: '🐘 **PostgreSQL** é o sistema gerenciador de banco de dados relacional open source mais avançado do mundo.\n\n• Criado na Universidade de Berkeley nos anos 80.\n• O mascote oficial é o elefante **Slonik**.\n• Suporta transações **ACID**, tipos avançados (JSON, arrays) e alta concorrência com **MVCC**.\n• Integrado com Python via `psycopg2` e `SQLAlchemy`.\n\n📖 [Aulas de PostgreSQL](notebook.html#banco) | [Python + PostgreSQL](backend/bd/python-banco-de-dados.html)',
      followUps: ['Como conectar Python ao PostgreSQL?', 'Aulas de Idiomas']
    },

    // IDIOMAS — ENGLISH & FRANÇAIS
    {
      id: 'lang_english',
      category: 'Idiomas',
      keywords: ['ingles', 'english', 'grammar', 'vocabulario ingles', 'preposicoes ingles', 'tempos verbais', 'writing'],
      title: 'English Notes',
      answer: '🇬🇧 O módulo de **English** foca no uso da língua para tecnologia e desenvolvimento internacional:\n\n• **Grammar**: Artigos (`a/an/the`), Pronomes, Preposições (`in`, `on`, `at`), Verbos regulares e irregulares.\n• **Tech Vocab**: Termos de programação (`deploy`, `framework`, `repository`, `endpoint`, `runtime`, `bug`).\n• **Writing**: Estruturas para e-mails profissionais e documentação.\n\n📖 [Acessar aulas de English Grammar](notebook.html#english)',
      followUps: ['Francês no caderno', 'Voltar para Lógica']
    },
    {
      id: 'lang_frances',
      category: 'Idiomas',
      keywords: ['frances', 'francais', 'premiers pas', 'saudacoes frances', 'bonjour', 'merci', 'etre avoir'],
      title: 'Français — Premiers Pas',
      answer: '🇫🇷 O módulo de **Français** aborda as bases da língua francesa:\n\n• **Cumprimentos**: *Bonjour* (Bom dia), *Bonsoir* (Boa noite), *Merci* (Obrigada), *Au revoir* (Até logo).\n• **Artigos**: Definidos (*le, la, les*) e Indefinidos (*un, une, des*).\n• **Verbos Essenciais**: *Être* (ser/estar) e *Avoir* (ter).\n\n📖 [Aula: Premiers Pas — alfabeto, pronúncia e saudações](languages/francais/fr-intro.html)',
      followUps: ['Ver todas as matérias', 'Sobre a Lucilia']
    }
  ];

  /* ─── NORMALIZAÇÃO DE TEXTO PARA BUSCA SEMÂNTICA ─── */
  function normalizeStr(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove acentos
      .replace(/[^\w\s]/gi, ' ')        // remove pontuação
      .trim();
  }

  /* ─── MOTOR DE RESPOSTA LOCAL E INTELIGENTE ─── */
  function findBestResponse(userQuery) {
    const cleanQuery = normalizeStr(userQuery);
    const queryTokens = cleanQuery.split(/\s+/).filter(t => t.length > 1);

    if (queryTokens.length === 0) {
      return {
        answer: 'Poderia digitar sua dúvida ou escolher um dos tópicos sugeridos abaixo? 😊',
        followUps: ['Lógica de Programação', 'Fundamentos de Python', 'HTML e CSS']
      };
    }

    let bestMatch = null;
    let highestScore = 0;

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;

      for (const kw of item.keywords) {
        const cleanKw = normalizeStr(kw);
        // Correspondência exata da frase-chave
        if (cleanQuery.includes(cleanKw)) {
          score += 25;
        } else {
          // Correspondência por tokens
          const kwTokens = cleanKw.split(/\s+/);
          let matches = 0;
          for (const token of kwTokens) {
            if (queryTokens.includes(token)) matches++;
          }
          if (matches > 0) {
            score += matches * 4;
          }
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    // Se o score for suficiente, retorna o item encontrado
    if (bestMatch && highestScore >= 4) {
      return {
        answer: bestMatch.answer,
        followUps: bestMatch.followUps || ['Ver outras matérias', 'Quem é a Lucilia?']
      };
    }

    // Resposta padrão inteligente quando a pergunta for fora de escopo
    return {
      answer: `Não encontrei anotações específicas sobre "${userQuery}" no caderno ainda. 🧐\n\nMas posso te ajudar com os seguintes temas estudados aqui:\n• 💡 **Lógica de Programação & Algoritmos**\n• 🐍 **Python & Orientação a Objetos**\n• 🌐 **HTML, CSS, JavaScript & React**\n• 🐙 **Git & Controle de Versão**\n• 🗄️ **SQL & PostgreSQL**\n• 🌍 **Inglês & Francês**\n\nQue tal tentar uma dessas opções?`,
      followUps: ['O que é Python?', 'Como funciona o Git?', 'O que é React?']
    };
  }

  /* ─── ESTILOS CSS DO CHATBOT ─── */
  const style = document.createElement('style');
  style.textContent = `
    /* BOTÃO FLUTUANTE (FAB) */
    #nb-chat-fab {
      position: fixed;
      bottom: 1.8rem;
      right: 1.8rem;
      z-index: 9999;
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: var(--ink, #1c1917);
      color: #ffffff;
      border: 2px solid rgba(255, 255, 255, 0.2);
      cursor: pointer;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 24px rgba(28, 25, 23, 0.25);
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    #nb-chat-fab:hover {
      transform: scale(1.1) rotate(-4deg);
      box-shadow: 0 8px 30px rgba(28, 25, 23, 0.35);
      background: var(--accent, #be185d);
    }

    #nb-chat-fab.open {
      background: var(--ink2, #44403c);
      transform: rotate(90deg);
    }

    /* BADGE DE ONLINE NO FAB */
    .nb-fab-pulse {
      position: absolute;
      top: 2px;
      right: 2px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #22c55e;
      border: 2px solid #ffffff;
    }

    /* TOOLTIP CONVITE */
    #nb-fab-tooltip {
      position: fixed;
      bottom: 2.2rem;
      right: 5.6rem;
      background: #ffffff;
      color: var(--ink, #1c1917);
      border: 1px solid rgba(28, 25, 23, 0.12);
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 11.5px;
      font-weight: 700;
      font-family: 'Nunito', sans-serif;
      box-shadow: 0 4px 16px rgba(28, 25, 23, 0.10);
      pointer-events: none;
      white-space: nowrap;
      opacity: 0;
      transform: translateX(8px);
      transition: all 0.25s ease;
      z-index: 9998;
    }

    #nb-chat-fab:hover + #nb-fab-tooltip,
    #nb-fab-tooltip.show {
      opacity: 1;
      transform: translateX(0);
    }

    /* JANELA DO CHAT */
    #nb-chat-widget {
      position: fixed;
      bottom: 5.6rem;
      right: 1.8rem;
      z-index: 9998;
      width: 360px;
      height: 520px;
      max-height: calc(100vh - 7rem);
      background: #ffffff;
      border: 1px solid rgba(28, 25, 23, 0.12);
      border-radius: 16px;
      box-shadow: 0 16px 48px rgba(28, 25, 23, 0.18), 0 2px 8px rgba(28, 25, 23, 0.06);
      display: flex;
      flex-direction: column;
      font-family: 'Nunito', sans-serif;
      opacity: 0;
      pointer-events: none;
      transform: translateY(16px) scale(0.96);
      transform-origin: bottom right;
      transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      overflow: hidden;
    }

    #nb-chat-widget.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scale(1);
    }

    /* CABEÇALHO DO CHAT */
    .nb-chat-header {
      padding: 12px 16px;
      background: var(--ink, #1c1917);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-shrink: 0;
      border-bottom: 2px solid var(--accent, #be185d);
    }

    .nb-header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .nb-header-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent, #be185d), #e11d48);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .nb-header-titles {
      display: flex;
      flex-direction: column;
    }

    .nb-header-title {
      font-family: 'Lora', serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.2;
    }

    .nb-header-status {
      font-size: 10.5px;
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .nb-status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #22c55e;
      display: inline-block;
    }

    .nb-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .nb-hdr-btn {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      transition: all 0.15s ease;
    }

    .nb-hdr-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #ffffff;
    }

    /* ÁREA DE MENSAGENS */
    .nb-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 14px 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: var(--paper, #faf7f2);
      background-image: repeating-linear-gradient(
        to bottom,
        transparent,
        transparent 27px,
        rgba(28, 25, 23, 0.025) 27px,
        rgba(28, 25, 23, 0.025) 28px
      );
      scroll-behavior: smooth;
    }

    .nb-chat-messages::-webkit-scrollbar {
      width: 4px;
    }

    .nb-chat-messages::-webkit-scrollbar-thumb {
      background: rgba(28, 25, 23, 0.15);
      border-radius: 4px;
    }

    /* BOLHAS DE MENSAGEM */
    .nb-msg {
      display: flex;
      flex-direction: column;
      gap: 3px;
      max-width: 88%;
      animation: nbFadeIn 0.2s ease;
    }

    @keyframes nbFadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .nb-msg.user {
      align-self: flex-end;
      align-items: flex-end;
    }

    .nb-msg.bot {
      align-self: flex-start;
      align-items: flex-start;
    }

    .nb-bubble {
      padding: 10px 14px;
      border-radius: 14px;
      font-size: 13px;
      line-height: 1.55;
      word-break: break-word;
    }

    .nb-msg.user .nb-bubble {
      background: var(--ink, #1c1917);
      color: #ffffff;
      border-bottom-right-radius: 4px;
      box-shadow: 0 2px 6px rgba(28, 25, 23, 0.12);
    }

    .nb-msg.bot .nb-bubble {
      background: #ffffff;
      color: var(--ink, #1c1917);
      border: 1px solid rgba(28, 25, 23, 0.09);
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 4px rgba(28, 25, 23, 0.04);
    }

    .nb-bubble a {
      color: var(--accent2, #2563a8);
      font-weight: 700;
      text-decoration: underline;
    }

    .nb-bubble code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      background: rgba(28, 25, 23, 0.07);
      padding: 2px 5px;
      border-radius: 4px;
      color: var(--accent, #be185d);
    }

    .nb-bubble pre {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      line-height: 1.5;
      background: #1c1917;
      color: #f3efe8;
      padding: 10px 12px;
      border-radius: 8px;
      margin-top: 8px;
      overflow-x: auto;
      white-space: pre-wrap;
    }

    .nb-bubble pre code {
      background: transparent;
      color: inherit;
      padding: 0;
    }

    .nb-msg-time {
      font-size: 9.5px;
      color: var(--ink4, #a8a29e);
      padding: 0 4px;
    }

    /* DIGITAÇÃO */
    .nb-typing {
      display: flex;
      gap: 5px;
      align-items: center;
      padding: 10px 14px;
    }

    .nb-typing span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ink3, #78716c);
      animation: nbBounce 0.9s infinite ease-in-out;
    }

    .nb-typing span:nth-child(2) { animation-delay: 0.15s; }
    .nb-typing span:nth-child(3) { animation-delay: 0.30s; }

    @keyframes nbBounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-5px); }
    }

    /* SUGESTÕES RÁPIDAS (CHIPS) */
    .nb-suggestions {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 8px 12px 10px;
      background: var(--paper, #faf7f2);
      border-top: 1px dashed rgba(28, 25, 23, 0.08);
      max-height: 90px;
      overflow-y: auto;
    }

    .nb-sug-btn {
      font-size: 11px;
      font-weight: 700;
      color: var(--ink2, #44403c);
      background: #ffffff;
      border: 1px solid rgba(28, 25, 23, 0.14);
      border-radius: 20px;
      padding: 4px 10px;
      cursor: pointer;
      font-family: 'Nunito', sans-serif;
      transition: all 0.15s ease;
      white-space: nowrap;
    }

    .nb-sug-btn:hover {
      background: var(--ink, #1c1917);
      color: #ffffff;
      border-color: var(--ink, #1c1917);
      transform: translateY(-1px);
    }

    /* RODAPÉ DO CHAT */
    .nb-chat-footer {
      padding: 10px 12px;
      border-top: 1px solid rgba(28, 25, 23, 0.10);
      background: #ffffff;
      display: flex;
      gap: 8px;
      align-items: flex-end;
      flex-shrink: 0;
    }

    #nb-chat-input {
      flex: 1;
      resize: none;
      border: 1.5px solid rgba(28, 25, 23, 0.14);
      border-radius: 10px;
      padding: 8px 12px;
      font-size: 13px;
      font-family: 'Nunito', sans-serif;
      background: var(--paper, #faf7f2);
      color: var(--ink, #1c1917);
      outline: none;
      max-height: 90px;
      min-height: 38px;
      transition: all 0.15s ease;
      line-height: 1.4;
    }

    #nb-chat-input:focus {
      border-color: var(--accent2, #2563a8);
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(37, 99, 168, 0.12);
    }

    #nb-chat-input::placeholder {
      color: rgba(28, 25, 23, 0.4);
    }

    #nb-chat-send {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      flex-shrink: 0;
      background: var(--ink, #1c1917);
      color: #ffffff;
      border: none;
      cursor: pointer;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
    }

    #nb-chat-send:hover {
      background: var(--accent, #be185d);
      transform: scale(1.05);
    }

    #nb-chat-send:disabled {
      opacity: 0.35;
      cursor: not-allowed;
      transform: none;
    }

    /* RESPONSIVIDADE NO MOBILE */
    @media (max-width: 480px) {
      #nb-chat-widget {
        width: calc(100vw - 1.5rem);
        height: min(480px, 80vh);
        right: 0.75rem;
        bottom: 5.2rem;
      }
      #nb-chat-fab {
        bottom: 1.2rem;
        right: 1.2rem;
      }
      #nb-fab-tooltip {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  /* ─── CRIAÇÃO DO HTML DO WIDGET ─── */
  const fab = document.createElement('button');
  fab.id = 'nb-chat-fab';
  fab.title = 'Abrir Assistente do Notebook';
  fab.setAttribute('aria-label', 'Assistente do Notebook');
  fab.innerHTML = `
    <span>💬</span>
    <span class="nb-fab-pulse" title="Online"></span>
  `;

  const tooltip = document.createElement('div');
  tooltip.id = 'nb-fab-tooltip';
  tooltip.innerHTML = 'Dúvidas nas aulas? Fale comigo! 📓';

  const widget = document.createElement('div');
  widget.id = 'nb-chat-widget';
  widget.setAttribute('role', 'dialog');
  widget.setAttribute('aria-label', 'Janela da Assistente do Notebook');
  widget.innerHTML = `
    <div class="nb-chat-header">
      <div class="nb-header-left">
        <div class="nb-header-avatar">📓</div>
        <div class="nb-header-titles">
          <div class="nb-header-title">Assistente do Notebook</div>
          <div class="nb-header-status">
            <span class="nb-status-dot"></span> Online • 56 aulas catalogadas
          </div>
        </div>
      </div>
      <div class="nb-header-actions">
        <button class="nb-hdr-btn" id="nb-chat-clear" title="Limpar conversa">🗑️</button>
        <button class="nb-hdr-btn" id="nb-chat-close" title="Fechar assistente">✕</button>
      </div>
    </div>

    <div class="nb-chat-messages" id="nb-msgs">
      <div class="nb-msg bot">
        <div class="nb-bubble">
          Olá! 👋 Eu sou a <strong>Assistente Virtual do Caderno da Lucilia</strong>.<br><br>
          Posso explicar conceitos, mostrar exemplos de código e direcionar você para as aulas de <strong>Python</strong>, <strong>Lógica</strong>, <strong>HTML/CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Git</strong> e <strong>Banco de Dados</strong>!
        </div>
        <span class="nb-msg-time">agora</span>
      </div>
    </div>

    <div class="nb-suggestions" id="nb-sugs">
      <button class="nb-sug-btn" onclick="window.nbAsk('O que é uma variável em Python?')">Variável em Python</button>
      <button class="nb-sug-btn" onclick="window.nbAsk('Como funciona o Flexbox?')">Flexbox no CSS</button>
      <button class="nb-sug-btn" onclick="window.nbAsk('O que é um commit no Git?')">Commit no Git</button>
      <button class="nb-sug-btn" onclick="window.nbAsk('Quais são os 4 pilares da POO?')">4 Pilares da POO</button>
    </div>

    <div class="nb-chat-footer">
      <textarea id="nb-chat-input" placeholder="Tire sua dúvida sobre as matérias..." rows="1"></textarea>
      <button id="nb-chat-send" onclick="window.nbSend()" title="Enviar mensagem">➤</button>
    </div>
  `;

  document.body.appendChild(fab);
  document.body.appendChild(tooltip);
  document.body.appendChild(widget);

  // Exibe tooltip nos primeiros 6 segundos para convidar o usuário
  setTimeout(() => {
    tooltip.classList.add('show');
    setTimeout(() => tooltip.classList.remove('show'), 5000);
  }, 1800);

  /* ─── TOGGLE ABRIR/FECHAR ─── */
  function toggleChat(forceState) {
    const isOpen = forceState !== undefined ? forceState : !widget.classList.contains('open');
    widget.classList.toggle('open', isOpen);
    fab.classList.toggle('open', isOpen);
    fab.querySelector('span:first-child').textContent = isOpen ? '✕' : '💬';
    tooltip.classList.remove('show');

    if (isOpen) {
      setTimeout(() => document.getElementById('nb-chat-input')?.focus(), 200);
    }
  }

  fab.addEventListener('click', () => toggleChat());
  document.getElementById('nb-chat-close').addEventListener('click', () => toggleChat(false));

  // Limpar conversa
  document.getElementById('nb-chat-clear').addEventListener('click', () => {
    const msgs = document.getElementById('nb-msgs');
    msgs.innerHTML = `
      <div class="nb-msg bot">
        <div class="nb-bubble">Histórico limpo! Como posso te ajudar agora? 📓</div>
        <span class="nb-msg-time">${now()}</span>
      </div>
    `;
    renderSuggestions(['O que tem no caderno?', 'Console Python', 'Dicas de Lógica']);
  });

  /* ─── CONTROLE DE TECLADO (ENTER) ─── */
  document.getElementById('nb-chat-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      window.nbSend();
    }
  });

  /* ─── AUTO-RESIZE DO TEXTAREA ─── */
  document.getElementById('nb-chat-input').addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 90) + 'px';
  });

  /* ─── AUXILIARES DE FORMATAÇÃO ─── */
  function now() {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  function formatText(text) {
    return text
      // Bloco de código com markdown ```lang\ncode```
      .replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
      // Código inline `code`
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Negrito **bold**
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Itálico *italic*
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Links em markdown [texto](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_self">$1</a>')
      // Quebras de linha
      .replace(/\n/g, '<br>');
  }

  function addMsg(role, text) {
    const msgs = document.getElementById('nb-msgs');
    const div = document.createElement('div');
    div.className = `nb-msg ${role}`;
    div.innerHTML = `
      <div class="nb-bubble">${formatText(text)}</div>
      <span class="nb-msg-time">${now()}</span>
    `;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  function showTyping() {
    const msgs = document.getElementById('nb-msgs');
    const div = document.createElement('div');
    div.className = 'nb-msg bot';
    div.id = 'nb-typing';
    div.innerHTML = `<div class="nb-bubble nb-typing"><span></span><span></span><span></span></div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeTyping() {
    document.getElementById('nb-typing')?.remove();
  }

  function renderSuggestions(sugs) {
    const container = document.getElementById('nb-sugs');
    if (!sugs || sugs.length === 0) {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';
    container.innerHTML = sugs
      .map(s => `<button class="nb-sug-btn" onclick="window.nbAsk('${s.replace(/'/g, "\\'")}')">${s}</button>`)
      .join('');
  }

  /* ─── ENVIAR PERGUNTA ─── */
  window.nbAsk = function (text) {
    const input = document.getElementById('nb-chat-input');
    if (input) {
      input.value = text;
      window.nbSend();
    }
  };

  window.nbSend = function () {
    const input = document.getElementById('nb-chat-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    input.style.height = 'auto';
    const sendBtn = document.getElementById('nb-chat-send');
    if (sendBtn) sendBtn.disabled = true;

    // Adiciona mensagem do usuário
    addMsg('user', text);

    // Efeito de digitação com delay realista
    showTyping();

    // Processamento da resposta local instantâneo e garantido
    setTimeout(() => {
      removeTyping();
      const response = findBestResponse(text);
      addMsg('bot', response.answer);
      renderSuggestions(response.followUps);

      if (sendBtn) sendBtn.disabled = false;
      input.focus();
    }, 400);
  };

})();
