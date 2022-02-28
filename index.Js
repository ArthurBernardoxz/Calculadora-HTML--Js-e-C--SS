let numerosEl = document.querySelectorAll(".num");
let telaEl = document.querySelector("#resultado");

for(let i = 0; i < 11; i++){
    numerosEl[i].addEventListener('click', DigitarosNumeros);
}

function DigitarosNumeros(e) {
    let posicao = e.currentTarget;
    telaEl.value = telaEl.value + posicao.innerHTML;
}

let clearEl = document.querySelector("#clear");

clearEl.addEventListener('click', limparInput);

function limparInput() {
    telaEl.value = "";
}

let operadoresEl = document.querySelectorAll(".operadores");

for(let i = 0; i < 4; i++){
    operadoresEl[i].addEventListener('click', inserirOperadores);
}

function inserirOperadores(e) {
    let posicaoEl = e.currentTarget;
    telaEl.value = telaEl.value + posicaoEl.innerHTML;
}

let CalcularEl = document.querySelector("#Botao_Calcular");

CalcularEl.addEventListener('click', RealizarCalculo);

function RealizarCalculo() {
    if(telaEl.value == ""){
        telaEl.value = "";
    }
    else{
        telaEl.value = eval(telaEl.value);
    }  
}