// Função para calcular a média de três números
function calcularMedia(num1, num2, num3) {
    let media = (num1 + num2 + num3) / 3;
    return media;
}

// Exemplo de uso da função
let numero1 = 10;
let numero2 = 15;
let numero3 = 20;

let resultadoMedia = calcularMedia(numero1, numero2, numero3);
console.log(`A média dos números ${numero1}, ${numero2} e ${numero3} é: ${resultadoMedia}`);
