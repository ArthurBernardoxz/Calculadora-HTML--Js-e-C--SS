let numerosEl = document.querySelectorAll(".num"); //pega todos os <li> de class 'num' que seriam todos os digitos númericos da calculadora
let telaEl = document.querySelector("#resultado"); //pega a "tela" onde é mostrado as contas e os resultados

for(let i = 0; i < 11; i++){ //for para adicionar um evento para cada li dos digitos
    numerosEl[i].addEventListener('click', DigitarosNumeros);
}

function DigitarosNumeros(e) { // função para digitar os numeros que foram clicados no input
    let posicao = e.currentTarget; // pega qual digito foi pressionado
    telaEl.value = telaEl.value + posicao.innerHTML; //atribui esse valor ao input criando a expressao
}

let clearEl = document.querySelector("#clear"); // pega o botão "C" para limpar o input

clearEl.addEventListener('click', limparInput); // adiciona um evento ao clicar nesse botão

function limparInput() { //função para limpar o input
    telaEl.value = ""; //atribui o valor do input como vazio
}

let operadoresEl = document.querySelectorAll(".operadores"); //pega todos os operadores matematicos e atribui a uma variavel

for(let i = 0; i < 4; i++){ //funcao para adicionar um evento para esse operadores caso sejam clicados
    operadoresEl[i].addEventListener('click', inserirOperadores); 
}

function inserirOperadores(e) { //funcao para digitar os operadores no input
    let posicaoEl = e.currentTarget; // pega qual operador foi clicado
    telaEl.value = telaEl.value + posicaoEl.innerHTML; //coloca esse operador no input
}

let CalcularEl = document.querySelector("#Botao_Calcular"); // pega o botao de calcular e atribui a uma variavel

CalcularEl.addEventListener('click', RealizarCalculo); // adiciona um evento ao botao calcular quando for clicado

function RealizarCalculo() { //funcao para realizar os calculos
    if(telaEl.value == ""){ //caso o input esteja vazio ele nao faz nada para nao dar error
        telaEl.value = "";
    }
    else{
        telaEl.value = eval(telaEl.value); //utilizo a função eval() para pegar a expressão no input e realizar
    }  
}