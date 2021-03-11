// 1º passo - capturar os campos
// 2º passo - fazer o sorteio baseado no valores dos campos
// 3º passo - imprimir o resultado
// 4º passo - limpar os campos


// 1º passo - capturar os campos
const qtdResultadosInput = document.getElementById('qtdResultados');
const numeroInicialInput = document.getElementById('inBetweenNumber');
const numeroFinalInput = document.getElementById('andNumber');
const buttonSortear = document.getElementById('buttonSortear');

const buttonLimpar = document.getElementById('buttonLimpar');

const painelResultado = document.getElementById('painelResultado');
const resultado = document.getElementById('resultado');


// 2º passo - fazer o sorteio baseado no valores dos campos
// a) gerar número aleatório
// b) limitar - adicionar um 'range' e gerar um numero
//    dentro de um intervalo de número
// c) fazer isso uma certa quantidade de vezes(utilizar o qtdResultadosInput)

function sortearNumeros(){
    const qtdResultados = parseInt(qtdResultadosInput.value);
    const numeroInicial = parseInt(numeroInicialInput.value);
    const numeroFinal = parseInt(numeroFinalInput.value);
    
    // 3º passo - imprimir o resultado
    resultado.innerText = '';
    for(let i = 0; i < qtdResultados; i++){
        const randomNumber = gerarNumeroAleatorio(numeroInicial, numeroFinal);

        if(i < qtdResultados - 1){
            resultado.innerText += randomNumber + '-';
        } else{
            resultado.innerText += randomNumber;
        }
    }

    painelResultado.classList.add('mostrarResultado');
}

function gerarNumeroAleatorio(numeroInicial, numeroFinal){
    return Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
}

buttonSortear.addEventListener('click', sortearNumeros);


function limparCampos(){
    qtdResultadosInput.value = '';
    numeroInicialInput.value = '';
    numeroFinalInput.value = '';
}

buttonLimpar.addEventListener('click', limparCampos);