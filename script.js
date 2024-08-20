const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Santos é o maior time do mundo?"
        alternativas: [
            {
                texto: "Isso é óbvio.",
                afirmação: "Desde quando o Pelé nasceu."
            },
            {
                texto: "Com certeza.",
                afirmação: "Vire santista vocẽ também."
            }
        ]
    },
    {
        enunciado: "Claus roubou na final do Paulistão?",
        alternativas: [
            {
                texto: "Isso está muito na cara.",
                afirmação: "Caiu o pix da tia Leila."
            },
            {
                texto: "Não.",
                afirmação: "Deixe de ser clubista."
            }
        ]
    },
    {
        enunciado: "Brasil hexa em 2026?",
        alternativas: [
            {
                texto: "Sim.",
                afirmação: "Menino ney vai carregar todo mundo."
            },
            {
                texto: "Não.",
                afirmação: "Brasil tá fraco.Jogadores sem raça"
            }
        ]
    },
    {
        enunciado: "Menino ney irá vim para a seleção do santástico em 2026",
        alternativas: [
            {
                texto: "Sim,afinal Santos é o maior",
                afirmação: "Ninguem segura a SeleSantos que vai ganhar tudo."
            },
            {
                texto: "Não, deixe de ser sonhador",
                afirmação: "Ney vai voltar deixe de ser clubista, ao contrario do dudu no cruzeiro ou balotelli no corinthians que era óbvio que não ia acontecer "
            }
        ]
    },
    {
        enunciado: "Palmeiras tem mundial? ",
        alternativas: [
            {
                texto: "Não.",
                afirmação: "Vocẽ está certo."
            },
            {
                texto: "Sim.",
                afirmação: "kkkkkkkkkkkkkkkkkk 51 é pinga. "
            }
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
    const afirmacoes = opcaoSelecionada.afirmação;
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
