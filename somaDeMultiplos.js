function somaDeMultiplos(primeiroNumero, segundoNumero, limite){

    if(primeiroNumero === undefined || segundoNumero === undefined){
        throw new Error('Ambos os números devem ser informados para soma de múltiplos');
    }

    if(limite === undefined){
        throw new Error('O valor limite deve ser informado para soma de múltiplos');
    }

    let soma = 0;

    for(let i = 1; i < limite; i++){        // Laço para validar todos os números abaixo do limite enviado
        if(i % primeiroNumero === 0 || i % segundoNumero === 0){    // Verifica se o número em análise (i) é múltiplo do primeiro ou do segundo número
            soma += i;                                              // Se é múltiplo, soma o número
        }
    }

    return soma;        // Retorna a soma obtida
}

module.exports = {somaDeMultiplos}
