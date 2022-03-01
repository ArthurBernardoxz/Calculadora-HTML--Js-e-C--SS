# Calculadora - HTML, Js e CSS
 Calculadora feita utilizando as linguagens de CSS, HTML e JavaScript

## Como foi feito a estrutura do site? (HTML) ##

Foi feito de forma bem simples, criei uma `<div>` onde ficaria a interface da calculadora, dentro da `div` criei um `<h1>` de titulo **CALCULADORA**, a baixo um `<input>` de `type="button"` onde seria mostrado os digitos e os resultados das expressões.

Para os digitos da calculadora criei uma `<ul>` onde ficariam os `<li>` para cada digito(números, operadores, clean e calcular) da calculadora. Aos números coloquei a `class` de **num** e `value` de acordo com o valor do número clicado, para os operadores atribui a `class` de **operadores** e um `id` de acordo com o nome do operador. Já para os botõoes de calcular e c coloquei `id` de acordo com sua funcionalidade. Ex:

```
<li id="clear">c</li>
<li id="Botao_Calcular">=</li>
```

## Como foi feita a estilização do site? (CSS) ##

Tentei deixar o site com um estilo mais suave, então coloquei um `background-color: rgb(4, 170, 247)` para o HTML parecendo um azul claro, e para as fontes dos texto tentei deixar com uma pegada mais robótica então importei do google fonts dessa forma `@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap')` e a referenciei no CSS pelo nome **'Orbitron', sans-serif**.

Para a interface da calculadora centralizei a `<div>` com os digitos, tela para resultados e etc... Em relação a tamanho, cor e posição dos elementos coloquei da forma que mais me agradou visualmente, para entender melhor acesse o CSS do projeto de nome **index.css**.

Aos `<li>` utilizei `list-style: none` para tirar as bolinhas que ficam antes dos elementos da lista, coloquei uma `box-shadow: 0px 3px 4px 0px #444651` que me agradou bastante e alinhei o conteudo ao centro do `<li>`.

Para mudar a cor dos digitos ao mouse estar em cima utilizei a propriedade:

```
li:hover{
    background-color: rgb(4, 170, 247);
}
```

E para quando o digito for clicado coloquei diminui a sombra do `<li>` para dar uma impressão meio que 3D. Dessa forma:

```
li:active{
    box-shadow: 0px 1px 1px 0px #444651;
}
```

## Como você fez para funcionar? (Js) ##

### Para mostrar os digitos dentro do input: ###

Como eu havia divido os digitos em números e operadores, primeiroo atribui todos elementos `<li>` de `class` **.num**, depois atribui um evento para cada digito númerico quando for clicado e utilizado `currentTarger` mostra o número no input de acordo com o digito clicado pelo usuário.

Para mostrar os operadores fiz o mesmo mas em vez de selecionar `<li>` de `class` **.num** selecione os de `class` **.operadores**, também  utilizei ``currentTarget` para pegar o operador selecionado.

### Para limpar o input: ###

Primeiro peguei o `<li>` de `id` **#clear** e atribui um evento nele ao ser clicado, ligando a função **inserirOperadores()** que defini o valor do `<input>` como vazio(**""**).

### Para realizar os cálculos: ###

Primeiro peguei `<li>` de `id` **#Botao_Calcular** e atribui um evento nele ao ser clicado, ligando a função **RealizarCalculo()**. Essa função primeiro verifica se o `<input>` não esta vazio, se não estiver ele atribui o valor do `<input>` = `eval(input.value)` essa função (**eval()**) pega a expressão presente no `<input>` resolve e depois atribui o `input.value` igual ao resultado da equação.