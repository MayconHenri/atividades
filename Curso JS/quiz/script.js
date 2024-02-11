// Obtenção de elementos do DOM
let perg1 = document.getElementById("per1")
let p1_alt1 = document.getElementById("opcao0_alternativa1")
let p1_alt2 = document.getElementById("opcao0_alternativa2")
let p1_alt3 = document.getElementById("opcao0_alternativa3")
let perg2 = document.getElementById("per2")
let p2_alt1 = document.getElementById("opcao1_alternativa1")
let p2_alt2 = document.getElementById("opcao1_alternativa2")
let p2_alt3 = document.getElementById("opcao1_alternativa3")

// Elementos adicionais do DOM
let container = document.getElementById("container")
let contador_alterador = document.getElementById("acertos")
let resultado_fin = document.getElementById("resultado_fin")
let footer = document.getElementById("footer")

// Variáveis de controle
let contador = 0
let i = 0

// Array de perguntas com suas alternativas e respostas corretas
let perguntas = [
  {
    pergunta: "Qual é a função principal do JavaScript?",
    alternativas: [
      "Manipulação de estilos",
      "Programação assíncrona",
      "Interatividade em páginas web",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual declaração é usada para criar uma variável em JavaScript?",
    alternativas: ["let x;", "var x;", "const x;"],
    correta: 0,
  },
  // Pergunta 3
  {
    pergunta: "O que é DOM em JavaScript?",
    alternativas: [
      "Document Object Model",
      "Data Object Model",
      "Digital Object Model",
    ],
    correta: 2,
  },
  // Pergunta 4
  {
    pergunta: "O que significa CSS?",
    alternativas: [
      "Counter Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
    ],
    correta: 1,
  },
  // Pergunta 5
  {
    pergunta: "O que é AJAX?",
    alternativas: [
      "Asynchronous JavaScript and XML",
      "Advanced JavaScript and XML",
      "Asynchronous JSON and XML",
    ],
    correta: 1,
  },
  // Pergunta 6
  {
    pergunta: "O que é Git?",
    alternativas: [
      "Graphical Interface Tool",
      "Global Information Tracker",
      "Version Control System",
    ],
    correta: 0,
  },
  // Pergunta 7
  {
    pergunta: "O que é npm?",
    alternativas: [
      "Node Package Manager",
      "Network Package Manager",
      "New Project Manager",
    ],
    correta: 1,
  },
  // Pergunta 8
  {
    pergunta: "Qual a finalidade do comando 'git clone'?",
    alternativas: [
      "Copiar repositórios locais",
      "Clonar repositórios remotos",
      "Criar um novo repositório",
    ],
    correta: 2,
  },
  // Pergunta 9
  {
    pergunta: "O que é um framework?",
    alternativas: [
      "Uma estrutura de programação",
      "Um modelo de design",
      "Uma ferramenta de desenvolvimento",
    ],
    correta: 0,
  },
  // Pergunta 10
  {
    pergunta: "Qual é o propósito do SQL?",
    alternativas: [
      "Estilo de programação",
      "Linguagem de consulta para bancos de dados",
      "Ferramenta de design de layout",
    ],
    correta: 2,
  },
]

// Inicialização do quiz com as duas primeiras perguntas
adicionarPerguntas(0, 1)

// Função para adicionar perguntas ao DOM com base nos índices fornecidos
function adicionarPerguntas(indexPer1, indexPer2) {
  // Configuração da primeira pergunta
  perg1.innerHTML = `<STRONG>Pergunta ${indexPer1 + 1}:</STRONG> ${
    perguntas[indexPer1].pergunta
  }`
  p1_alt1.innerHTML = `A) ${perguntas[indexPer1].alternativas[0]}`
  p1_alt2.innerHTML = `B) ${perguntas[indexPer1].alternativas[1]}`
  p1_alt3.innerHTML = `C) ${perguntas[indexPer1].alternativas[2]}`

  // Configuração da segunda pergunta
  perg2.innerHTML = `<STRONG>Pergunta ${indexPer2 + 1}:</STRONG> ${
    perguntas[indexPer2].pergunta
  }`
  p2_alt1.innerHTML = `A) ${perguntas[indexPer2].alternativas[0]}`
  p2_alt2.innerHTML = `B) ${perguntas[indexPer2].alternativas[1]}`
  p2_alt3.innerHTML = `C) ${perguntas[indexPer2].alternativas[2]}`
}

// Função para verificar respostas ao clicar no botão de verificação
function verificar() {
  // Função interna para verificar a resposta correta de uma pergunta específica
  function verificarCorreta(perguntaIndex, op) {
    let respostas = document.getElementsByName(`opcao${op}`)
    let pergunta = perguntas[perguntaIndex]

    let opcaoMarcada = false
    for (let ii = 0; ii < respostas.length; ii++) {
      if (respostas[ii].checked) {
        opcaoMarcada = true
        break
      }
    }

    if (!opcaoMarcada) {
      alert("[ERRO] Selecione uma opção para a pergunta antes de enviar!")
      window.location.reload()
      return
    }

    let respostaCorreta = pergunta.correta
    if (respostas[respostaCorreta].checked) {
      contador++
      i++
    } else {
      i++
    }
  }

  // Verificar respostas para as duas perguntas atuais
  verificarCorreta(i, 0)
  verificarCorreta(i, 1)
  contador_alterador.innerHTML = `<p><strong> Acertos:</strong> (${contador} de 10)</p>`

  // Se ainda houver perguntas restantes, avança para a próxima
  if (i < 10) {
    adicionarPerguntas(i, i + 1)

    // Função para desmarcar todas as opções de rádio
    function desmarcarOpcoes() {
      let opcoes = document.querySelectorAll('input[type="radio"]')
      for (let i = 0; i < opcoes.length; i++) {
        opcoes[i].checked = false
      }
    }

    // Desmarcar opções após avançar para a próxima pergunta
    desmarcarOpcoes()
  } else {
    // Se todas as perguntas foram respondidas, exibir resultados finais
    container.innerHTML = ""
    footer.remove()
    let percentualAcerto = (contador / 10) * 100
    let mensagemResultado = ""

    // Determinar a mensagem com base no desempenho
    if (contador === 10) {
      mensagemResultado =
        "Parabéns! Você acertou todas as perguntas. Perfeito! :P"
    } else if (percentualAcerto >= 70) {
      mensagemResultado = "Parabéns! Você foi muito bem. :)"
    } else if (percentualAcerto >= 50) {
      mensagemResultado = "Bom trabalho! Continue praticando. :D"
    } else {
      mensagemResultado = "Você pode melhorar. Continue estudando. :/"
    }

    // Exibir resultados finais
    resultado_fin.style.display = "block"
    let resultadoHTML = `<p id="txt_resul">Apuração das respostas - Resultado</p>
                         <p>Corretas: ${contador} questões</p>
                         <p>Erradas: ${i - contador} questões</p>
                         <p>Percentual de acertos: ${percentualAcerto}%</p>
                         <p id="txt_resul2">${mensagemResultado}</p>`

    resultado_fin.innerHTML = resultadoHTML
  }
}

/* Gabarito:
Pergunta 1:
Resposta Correta: Interatividade em páginas web (Alternativa: 3)

Pergunta 2:
Resposta Correta: let x; (Alternativa: 1)

Pergunta 3:
Resposta Correta: Digital Object Model (Alternativa: 3)

Pergunta 4:
Resposta Correta: Computer Style Sheets (Alternativa: 2)

Pergunta 5:
Resposta Correta: Advanced JavaScript and XML (Alternativa: 2)

Pergunta 6:
Resposta Correta: Graphical Interface Tool (Alternativa: 1)

Pergunta 7:
Resposta Correta: Network Package Manager (Alternativa: 2)

Pergunta 8:
Resposta Correta: Criar um novo repositório (Alternativa: 3)

Pergunta 9:
Resposta Correta: Uma estrutura de programação (Alternativa: 1)

Pergunta 10:
Resposta Correta: Ferramenta de design de layout (Alternativa: 3)*/
