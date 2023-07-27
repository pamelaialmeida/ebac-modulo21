function indices(numeros){

    if(!Array.isArray(numeros) || numeros === undefined){
        throw new Error('É preciso enviar um array para a função indices');
    }

    if(!numeros.length){
        throw new Error('O array enviado não pode ser vazio');
    }

    let indiceMaiorValor;
    let indiceMenorValor;

    let maiorValor = Number.MIN_VALUE; // Inicia o maiorValor com o menor valor possível, assim qualquer outro número no array será maior que ele na primeira iteração
    let menorValor = Number.MAX_VALUE; // Inicia o menorValor com o maior valor possível, assim qualquer outro número no array será menor que ele na primeira iteração

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > maiorValor){    // Verifica se o número no array é maior que o maior valor encontrado até então
            maiorValor = numeros[i];    // Se é maior, seta maiorValor com o número
            indiceMaiorValor = i;       // E seta o indice do maior valor
        }

        if(numeros[i] < menorValor){    // Verifica se o número no array é menor que o menor valor encontrado até então
            menorValor = numeros[i];    // Se é menor, seta menorValor com o número
            indiceMenorValor = i;       // E seta o indice do menor valor
        }
    }

    return {menorValor, indiceMenorValor, maiorValor, indiceMaiorValor};    // Retorna o menor valor e seu indice e o maior valor e seu indice
}

module.exports = {indices}