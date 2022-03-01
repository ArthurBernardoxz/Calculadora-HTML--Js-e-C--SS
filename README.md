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
