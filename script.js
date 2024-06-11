const caixaPrincipal= document.querrySelector(".caixa-principal");
const caixaPerguntas= document.querrySelector(".caixa-perguntas");
const caixaAlternativas= document.querrySelector(".caixa-alternativas");
const caixaResultado= document.querrySelector(".caixa-resultado");
const textoResultado= document.querrySelector(".texto-resultado");

const perguntas= [
  {
      enunciado: "Pergunta1",
      alternativas:[
        {
        texto: "alternativa1",
        afirmação: "alternativa2",
      ]
  },
   {
      enunciado: "Pergunta2",
      alternativas:[
        "alternativa1",
        "alternativa2",
      ]
  },
   {
      enunciado: "Pergunta3",
      alternativas:[
        "alternativa1",
        "alternativa2",
      ]
  },
   {
      enunciado: "Pergunta4",
      alternativas:[
        "alternativa1",
        "alternativa2",
      ]
  },
   {
      enunciado: "Pergunta5",
      alternativas:[
        "alternativa1",
        "alternativa2",
      ]
  },
  ];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
