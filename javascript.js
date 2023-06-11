// Função para adicionar um número ao total
function adicionarNumero(numero) {
    var totalElement = document.getElementById('total');
    var total = parseFloat(totalElement.textContent);
    total = total * 10 + numero; // Adicionar o número digitado ao total
    totalElement.textContent = total; // Atualizar o texto exibido no total
}

// Função para adicionar um operador ao total
function adicionarOperador(operador) {
    var totalElement = document.getElementById('total');
    var total = parseFloat(totalElement.textContent);
    totalElement.textContent = operador; // Atualizar o texto exibido no total para o operador selecionado
}

// Função para calcular o resultado
function calcular() {
    var totalElement = document.getElementById('total');
    var total = totalElement.textContent;
    var resultado = eval(total); // Avaliar a expressão matemática
    totalElement.textContent = resultado; // Atualizar o texto exibido no total com o resultado
}
// Função para limpar o total (redefinir para zero)
function limpar() {
var totalElement = document.getElementById('total');
totalElement.textContent = 0;
}

// Função para trocar o sinal do total (positivo/negativo)
function trocarSinal() {
var totalElement = document.getElementById('total');
var total = parseFloat(totalElement.textContent);
total = -total; // Inverter o sinal do total
totalElement.textContent = total;
}

// Função para calcular a porcentagem do total
function calcularPorcentagem() {
var totalElement = document.getElementById('total');
var total = parseFloat(totalElement.textContent);
total = total / 100; // Calcular a porcentagem do total
totalElement.textContent = total;
}

function calcular() {
    var totalElement = document.getElementById('total');
    var expressao = totalElement.textContent;
    var numeros = expressao.split(/[+\-*/]/); // Obter os números da expressão
    var operadores = expressao.match(/[+\-*/]/g); // Obter os operadores da expressão
    var resultado = parseFloat(numeros[0]);

    for (var i = 0; i < operadores.length; i++) {
        var numero = parseFloat(numeros[i + 1]);
        var operador = operadores[i];

        switch (operador) {
            case '+':
                resultado += numero;
                break;
            case '-':
                resultado -= numero;
                break;
            case '*':
                resultado *= numero;
                break;
            case '/':
                resultado /= numero;
                break;
        }
    }

    totalElement.textContent = resultado;
}