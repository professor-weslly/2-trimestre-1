const caixaPrincipal= document.querrySelector(".caixa-principal");
const caixaPerguntas= document.querrySelector(".caixa-perguntas");
const caixaAlternativas= document.querrySelector(".caixa-alternativas");
const caixaResultado= document.querrySelector(".caixa-resultado");
const textoResultado= document.querrySelector(".texto-resultado");

const perguntas= [
  {
      enunciado: "Claus roubou no Paulistão?",
      alternativas:[
        {
        texto: "sim",
        afirmação: "alternativa2",
        },   
        {
        texto: "sim" 
        afirmação: "afirmação",  
        },
          ]
  },
   {
      enunciado: "Brasil hexa 2026?",
      alternativas:[
        {
        texto:"sim",
        afirmação:"alternativa2",
        },
        {
        texto:"não"
        afirmação:"afirmação",
        }
      ]
  },
   {
   enunciado: "Palmeiras tem mundial?",
      alternativas:[
        {
        texto: "não",
        afirmação: "alternativa2",
        },   
        {
        texto: "não" 
        afirmação: "afirmação", 
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
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
