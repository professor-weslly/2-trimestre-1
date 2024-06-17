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
let históriaFinal = "";


function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botãoAlternativas.addEventListener("click", () => respostaSelecionada (alternativa));
        function respostaSelecionada(opcaoSelecionada){
          const afirmacoes = opcaoSelecionada.afirmacoes;
          historiaFinal = afirmacoes ;
          atual++;
          mostraPergunta();
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
