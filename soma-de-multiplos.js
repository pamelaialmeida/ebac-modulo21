function somaDeMultiplos(primeiroNumero, segundoNumero, limite){
    let soma = 0;

    for(let i = 1; i < limite; i++){        // Laço para validar todos os números abaixo do limite enviado
        if(i % primeiroNumero === 0 || i % segundoNumero === 0){    // Verifica se o número em análise (i) é múltiplo do primeiro ou do segundo número
            soma += i;                                              // Se é múltiplo, soma o número
        }
    }

    return soma;        // Retorna a soma obtida
}

console.log(somaDeMultiplos(3, 5, 10))
console.log(somaDeMultiplos(5, 7, 1000))