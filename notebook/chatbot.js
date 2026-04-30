/* ── Lucilia's Notebook — Chatbot Flutuante ── */
(function () {
  /* ─── CONTEÚDO DO NOTEBOOK (base de conhecimento) ─── */
  const KNOWLEDGE = `
Você é a assistente do Notebook da Lucilia Rosa, uma estudante de programação.
Responda APENAS com base no conteúdo das aulas listadas abaixo.
Se a pergunta não tiver relação com nenhum dos temas do notebook, diga educadamente que só pode ajudar com os assuntos estudados aqui.
Seja simpática, didática e use exemplos curtos quando ajudar. Responda sempre em português.

━━━ LÓGICA DE PROGRAMAÇÃO ━━━
- História da computação: Ada Lovelace (1ª programadora), George Boole (álgebra booleana), Alan Turing (máquina de Turing)
- Algoritmo: sequência de passos para resolver um problema
- Pseudocódigo: forma de escrever algoritmos em linguagem próxima ao humano
- Fluxograma: representação visual de algoritmos com símbolos (oval=início/fim, retângulo=processo, losango=decisão)
- Variáveis: espaços na memória para guardar dados, têm nome e valor
- Condicionais: SE...ENTÃO...SENÃO
- Repetição: ENQUANTO e PARA
- Funções: blocos reutilizáveis de código

━━━ PYTHON — HISTÓRIA ━━━
- Criado por Guido van Rossum, lançado em 1991
- Nome vem do grupo de comédia Monty Python
- Versão 2.0 em 2000, versão 3.0 em 2008 (incompatível com 2.x)
- Hoje mantido pela Python Software Foundation
- Documentação oficial: docs.python.org
- Zen do Python: 19 princípios de boas práticas (ex: "Legibilidade conta", "Simples é melhor que complexo")
- Ecossistema: pip (gerenciador de pacotes), PyPI (repositório), ambientes virtuais (venv)

━━━ PYTHON — FUNDAMENTOS ━━━
Variáveis e Tipos:
- int: número inteiro (ex: x = 10)
- float: número decimal (ex: y = 3.14)
- str: texto (ex: nome = "Lucilia")
- bool: verdadeiro/falso (True / False)
- type() verifica o tipo; int(), float(), str() convertem tipos

Operadores:
- Aritméticos: + - * / // % **
- Relacionais: == != > < >= <=
- Lógicos: and, or, not

Condicionais:
  if condição:
      bloco
  elif outra:
      bloco
  else:
      bloco

Laços:
  for i in range(5):       # repete 5 vezes
      print(i)
  while condição:          # repete enquanto verdadeiro
      bloco
- break: sai do laço; continue: pula para próxima iteração

Funções:
  def saudacao(nome):
      return f"Olá, {nome}!"
- Parâmetros padrão: def func(x=0)
- *args: múltiplos argumentos; **kwargs: argumentos nomeados

━━━ PYTHON — ESTRUTURAS DE DADOS ━━━
Listas:
- lista = [1, 2, 3]  — mutável, ordenada, indexada por 0
- Métodos: append(), remove(), pop(), sort(), reverse(), len()
- Fatiamento: lista[1:3]

Tuplas:
- tupla = (1, 2, 3)  — imutável, ordenada
- Desempacotamento: a, b, c = tupla

Dicionários:
- dic = {"chave": "valor"}
- Métodos: keys(), values(), items(), get()
- dic["chave"] = "novo valor"

Conjuntos (Sets):
- s = {1, 2, 3}  — sem duplicatas, sem ordem
- Operações: união (|), interseção (&), diferença (-)

━━━ PYTHON — ORIENTAÇÃO A OBJETOS (POO) ━━━
- História: Simula (1960s), SmallTalk, C++, Java
- 4 Pilares: Encapsulamento, Herança, Polimorfismo, Abstração
- Classe: molde/modelo; Objeto: instância da classe
- __init__: construtor; self: referência ao próprio objeto
  class Animal:
      def __init__(self, nome):
          self.nome = nome
      def falar(self):
          return "..."
- Visibilidade: público (nome), protegido (_nome), privado (__nome)
- Herança: class Cachorro(Animal)
- Polimorfismo: mesmo método, comportamentos diferentes
- Rich Python: biblioteca para output bonito no terminal (tabelas, cores, painéis)

━━━ HTML ━━━
- Criado por Tim Berners-Lee em 1991
- HTML5 é a versão atual
- Tags semânticas: <header>, <nav>, <main>, <section>, <article>, <footer>
- Estrutura básica: <!DOCTYPE html>, <html>, <head>, <body>
- Elementos: <h1>-<h6>, <p>, <a href="">, <img src="">, <ul>/<ol>/<li>
- Formulários: <form>, <input>, <button>, <label>, <select>
- Atributos importantes: id, class, src, href, alt, type

━━━ CSS ━━━
- Criado por Håkon Wium Lie em 1994
- Seletores: elemento, .classe, #id, [atributo], :pseudo-classe
- Box Model: content → padding → border → margin
- Display: block, inline, inline-block, flex, grid, none
- Flexbox: display:flex; justify-content; align-items; flex-direction; gap
- Grid: display:grid; grid-template-columns; grid-template-rows
- Responsividade: @media (max-width: 768px) { ... }
- Especificidade: id > classe > elemento
- Variáveis CSS: --nome-var: valor; uso: var(--nome-var)

━━━ JAVASCRIPT ━━━
- Criado por Brendan Eich em 1995 (Netscape), padronizado como ECMAScript
- Variáveis: var (antigo), let (bloco), const (imutável)
- Tipos: string, number, boolean, null, undefined, object
- DOM: document.getElementById(), querySelector(), innerHTML, addEventListener()
- Eventos: click, submit, keydown, mouseover
- Funções: function nome() {} ou const nome = () => {}
- Arrays: métodos map(), filter(), reduce(), forEach()
- Objetos: { chave: valor }
- ES6+: arrow functions, template literals, destructuring, spread operator

━━━ REACT ━━━
- Biblioteca JavaScript criada pelo Facebook (Meta) por Jordan Walke em 2013
- Conceitos: componentes, JSX, Virtual DOM, props, state
- JSX: sintaxe parecida com HTML dentro do JavaScript
- Virtual DOM: cópia virtual do DOM real, React atualiza só o que muda
- Componente funcional:
  function MeuComponente() {
      return <h1>Olá!</h1>;
  }
- Props: dados passados de pai para filho
- useState: hook para gerenciar estado
- useEffect: hook para efeitos colaterais (ex: buscar dados)

━━━ GIT & GITHUB ━━━
- Git: sistema de controle de versão criado por Linus Torvalds em 2005
- 3 áreas: Working Directory → Staging Area → Repository
- Comandos principais:
  git init          — inicia repositório
  git add .         — adiciona ao staging
  git commit -m ""  — salva snapshot
  git status        — mostra estado dos arquivos
  git log           — histórico de commits
  git diff          — mostra diferenças
- Branches: git branch nome; git checkout nome; git switch nome
- Merge: git merge nome-da-branch
- Rebase: reescreve histórico de commits
- GitHub: plataforma online para hospedar repositórios Git
- git remote add origin URL; git push; git pull
- Pull Request: proposta de merge entre branches no GitHub

━━━ BANCO DE DADOS — SQL ━━━
- SELECT: consultar dados
  SELECT coluna FROM tabela WHERE condição ORDER BY coluna LIMIT n;
- Agregações: COUNT(), SUM(), AVG(), MAX(), MIN() + GROUP BY + HAVING
- INSERT: INSERT INTO tabela (col) VALUES (val);
- UPDATE: UPDATE tabela SET col=val WHERE condição;
- DELETE: DELETE FROM tabela WHERE condição;
- JOINs: INNER JOIN (interseção), LEFT JOIN, RIGHT JOIN, FULL JOIN
- Modelagem: PK (chave primária), FK (chave estrangeira), relacionamentos 1:1, 1:N, N:N
- Normalização: 1FN, 2FN, 3FN — reduzir redundância

━━━ BANCO DE DADOS — POSTGRESQL ━━━
- Banco relacional open source mais avançado do mundo
- Criado na UC Berkeley nos anos 1980s, nome original POSTGRES
- Mascote: Slonik (elefante)
- Suporta: ACID, transações, JSON, arrays, tipos customizados
- Arquitetura: processos separados por conexão, MVCC para concorrência
- Ferramentas: psql (terminal), pgAdmin (interface gráfica)

━━━ ENGLISH ━━━
Grammar:
- Artigos: a/an (indefinido), the (definido)
- Pronomes: I, you, he, she, it, we, they / me, him, her, us, them
- Tempos verbais: Simple Present, Present Continuous, Simple Past, Past Continuous, Present Perfect, Future (will/going to)
- Preposições de lugar: in, on, at, under, between, next to
- Preposições de tempo: in (mês/ano), on (dia), at (hora)
- Verbos regulares: add -ed no passado; irregulares: go→went, have→had, be→was/were

Vocabulary:
- Tech & Programming: software, hardware, debug, deploy, repository, framework, library, backend, frontend, API, database, algorithm, variable, function, loop, condition
- Travel: airport, boarding pass, luggage, customs, check-in, departure, arrival, ticket, passport, hotel, reservation

━━━ FRANÇAIS ━━━
- Alfabeto: 26 letras + acentos (é, è, ê, à, ù, ç, î, ô, û)
- Cumprimentos: Bonjour (bom dia), Bonsoir (boa tarde/noite), Salut (oi), Au revoir (tchau), Merci (obrigada), S'il vous plaît (por favor)
- Números: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix
- Gênero: masculino (le/un) e feminino (la/une)
- Artigos definidos: le, la, les; indefinidos: un, une, des
`;

  /* ─── ESTILOS ─── */
  const style = document.createElement('style');
  style.textContent = `
    #nb-chat-fab {
      position:fixed; bottom:1.8rem; right:1.8rem; z-index:9999;
      width:52px; height:52px; border-radius:50%;
      background:var(--ink,#1c1917); color:#fff;
      border:none; cursor:pointer; font-size:22px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 4px 20px rgba(28,25,23,.25);
      transition:transform .2s, box-shadow .2s;
    }
    #nb-chat-fab:hover { transform:scale(1.08); box-shadow:0 6px 28px rgba(28,25,23,.32); }
    #nb-chat-fab.open { background:var(--ink2,#44403c); }

    #nb-chat-widget {
      position:fixed; bottom:5.8rem; right:1.8rem; z-index:9998;
      width:340px; max-height:520px;
      background:var(--paper,#faf7f2);
      border:1.5px solid rgba(28,25,23,.10);
      border-radius:12px;
      box-shadow:0 8px 32px rgba(28,25,23,.15);
      display:flex; flex-direction:column;
      font-family:'Nunito',sans-serif;
      opacity:0; pointer-events:none;
      transform:translateY(12px) scale(.97);
      transition:opacity .22s, transform .22s;
      overflow:hidden;
    }
    #nb-chat-widget.open {
      opacity:1; pointer-events:auto;
      transform:translateY(0) scale(1);
    }

    .nb-chat-header {
      padding:12px 16px;
      background:var(--ink,#1c1917); color:#fff;
      display:flex; align-items:center; gap:10px;
      flex-shrink:0;
    }
    .nb-chat-header-icon { font-size:18px; }
    .nb-chat-header-text { flex:1; }
    .nb-chat-header-title { font-size:13px; font-weight:700; line-height:1.2; }
    .nb-chat-header-sub { font-size:10px; opacity:.6; }

    .nb-chat-messages {
      flex:1; overflow-y:auto; padding:14px 12px;
      display:flex; flex-direction:column; gap:10px;
      scroll-behavior:smooth;
    }
    .nb-chat-messages::-webkit-scrollbar { width:4px; }
    .nb-chat-messages::-webkit-scrollbar-thumb { background:rgba(28,25,23,.15); border-radius:4px; }

    .nb-msg { display:flex; flex-direction:column; gap:2px; max-width:86%; }
    .nb-msg.user { align-self:flex-end; align-items:flex-end; }
    .nb-msg.bot  { align-self:flex-start; align-items:flex-start; }

    .nb-bubble {
      padding:9px 13px; border-radius:12px;
      font-size:13px; line-height:1.6; word-break:break-word;
    }
    .nb-msg.user .nb-bubble {
      background:var(--ink,#1c1917); color:#fff;
      border-bottom-right-radius:4px;
    }
    .nb-msg.bot .nb-bubble {
      background:#fff; color:var(--ink,#1c1917);
      border:1px solid rgba(28,25,23,.08);
      border-bottom-left-radius:4px;
    }
    .nb-bubble code {
      font-family:'JetBrains Mono',monospace;
      font-size:11.5px;
      background:rgba(28,25,23,.07);
      padding:1px 5px; border-radius:4px;
    }
    .nb-bubble pre {
      font-family:'JetBrains Mono',monospace;
      font-size:11px; line-height:1.5;
      background:rgba(28,25,23,.06);
      padding:8px 10px; border-radius:6px;
      margin-top:6px; overflow-x:auto;
      white-space:pre-wrap;
    }

    .nb-msg-time { font-size:10px; color:rgba(28,25,23,.35); padding:0 4px; }

    .nb-typing { display:flex; gap:4px; align-items:center; padding:10px 13px; }
    .nb-typing span {
      width:6px; height:6px; border-radius:50%;
      background:var(--ink3,#78716c);
      animation:nb-bounce .9s infinite ease-in-out;
    }
    .nb-typing span:nth-child(2) { animation-delay:.15s; }
    .nb-typing span:nth-child(3) { animation-delay:.30s; }
    @keyframes nb-bounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }

    .nb-chat-footer {
      padding:10px 12px;
      border-top:1.5px solid rgba(28,25,23,.08);
      background:var(--paper2,#f3efe8);
      display:flex; gap:8px; align-items:flex-end;
      flex-shrink:0;
    }
    #nb-chat-input {
      flex:1; resize:none; border:1.5px solid rgba(28,25,23,.12);
      border-radius:8px; padding:8px 11px;
      font-size:13px; font-family:'Nunito',sans-serif;
      background:#fff; color:var(--ink,#1c1917);
      outline:none; max-height:100px; min-height:38px;
      transition:border-color .15s;
      line-height:1.5;
    }
    #nb-chat-input:focus { border-color:var(--accent2,#2563a8); }
    #nb-chat-input::placeholder { color:rgba(28,25,23,.35); }
    #nb-chat-send {
      width:36px; height:36px; border-radius:8px; flex-shrink:0;
      background:var(--ink,#1c1917); color:#fff; border:none;
      cursor:pointer; font-size:15px; display:flex;
      align-items:center; justify-content:center;
      transition:opacity .15s;
    }
    #nb-chat-send:hover { opacity:.8; }
    #nb-chat-send:disabled { opacity:.35; cursor:not-allowed; }

    .nb-suggestions {
      display:flex; flex-wrap:wrap; gap:6px; padding:0 12px 10px;
    }
    .nb-sug-btn {
      font-size:11px; font-weight:700; color:var(--accent2,#2563a8);
      background:#fff; border:1.5px solid rgba(37,99,168,.25);
      border-radius:20px; padding:4px 11px; cursor:pointer;
      font-family:'Nunito',sans-serif; transition:background .15s;
    }
    .nb-sug-btn:hover { background:#eff6ff; }

    @media(max-width:400px) {
      #nb-chat-widget { width:calc(100vw - 2rem); right:1rem; }
    }
  `;
  document.head.appendChild(style);

  /* ─── HTML ─── */
  const fab = document.createElement('button');
  fab.id = 'nb-chat-fab';
  fab.title = 'Assistente do Notebook';
  fab.innerHTML = '📓';

  const widget = document.createElement('div');
  widget.id = 'nb-chat-widget';
  widget.innerHTML = `
    <div class="nb-chat-header">
      <span class="nb-chat-header-icon">📓</span>
      <div class="nb-chat-header-text">
        <div class="nb-chat-header-title">Assistente da Lucilia</div>
        <div class="nb-chat-header-sub">Só sobre o conteúdo do Notebook</div>
      </div>
    </div>
    <div class="nb-chat-messages" id="nb-msgs">
      <div class="nb-msg bot">
        <div class="nb-bubble">Oi! 👋 Sou a assistente do notebook da Lucilia. Pode me perguntar sobre Python, HTML, CSS, JavaScript, React, Git, SQL, PostgreSQL, English ou Français!</div>
        <span class="nb-msg-time">agora</span>
      </div>
    </div>
    <div class="nb-suggestions" id="nb-sugs">
      <button class="nb-sug-btn" onclick="nbAsk('O que é uma variável em Python?')">Variável em Python</button>
      <button class="nb-sug-btn" onclick="nbAsk('Como funciona o Flexbox?')">Flexbox no CSS</button>
      <button class="nb-sug-btn" onclick="nbAsk('O que é um commit no Git?')">Commit no Git</button>
    </div>
    <div class="nb-chat-footer">
      <textarea id="nb-chat-input" placeholder="Pergunte sobre o notebook..." rows="1"></textarea>
      <button id="nb-chat-send" onclick="nbSend()">➤</button>
    </div>
  `;

  document.body.appendChild(fab);
  document.body.appendChild(widget);

  /* ─── TOGGLE ─── */
  fab.addEventListener('click', () => {
    const open = widget.classList.toggle('open');
    fab.classList.toggle('open', open);
    fab.innerHTML = open ? '✕' : '📓';
    if (open) document.getElementById('nb-chat-input').focus();
  });

  /* ─── ENTER PARA ENVIAR ─── */
  document.getElementById('nb-chat-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); nbSend(); }
  });

  /* ─── AUTO-RESIZE TEXTAREA ─── */
  document.getElementById('nb-chat-input').addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 100) + 'px';
  });

  /* ─── HELPERS ─── */
  function now() {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  function formatText(text) {
    return text
      .replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre>$2</pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }

  function addMsg(role, text) {
    const msgs = document.getElementById('nb-msgs');
    const div = document.createElement('div');
    div.className = `nb-msg ${role}`;
    div.innerHTML = `<div class="nb-bubble">${formatText(text)}</div><span class="nb-msg-time">${now()}</span>`;
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

  /* ─── HISTÓRICO ─── */
  const history = [];

  /* ─── ENVIAR ─── */
  window.nbAsk = function (text) {
    document.getElementById('nb-sugs').style.display = 'none';
    const input = document.getElementById('nb-chat-input');
    input.value = text;
    nbSend();
  };

  window.nbSend = async function () {
    const input = document.getElementById('nb-chat-input');
    const text = input.value.trim();
    if (!text) return;

    document.getElementById('nb-sugs').style.display = 'none';
    input.value = '';
    input.style.height = 'auto';
    document.getElementById('nb-chat-send').disabled = true;

    addMsg('user', text);
    history.push({ role: 'user', content: text });

    showTyping();

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: KNOWLEDGE,
          messages: history
        })
      });

      const data = await res.json();
      const reply = data.content?.[0]?.text || 'Desculpa, não consegui responder agora.';

      removeTyping();
      addMsg('bot', reply);
      history.push({ role: 'assistant', content: reply });

      // mantém histórico curto (últimas 10 trocas)
      if (history.length > 20) history.splice(0, 2);

    } catch (err) {
      removeTyping();
      addMsg('bot', 'Ops, erro de conexão. Tente novamente! 🙁');
    }

    document.getElementById('nb-chat-send').disabled = false;
    document.getElementById('nb-chat-input').focus();
  };
})();
