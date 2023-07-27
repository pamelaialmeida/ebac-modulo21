function calcularMDC(primeiroNumero, segundoNumero){

    if(primeiroNumero === undefined || segundoNumero === undefined){
        throw new Error('Ambos os números devem ser informados para cálculo do MDC');
    }

    // Garantir que vai pegar número positivo
    primeiroNumero = Math.abs(primeiroNumero);
    segundoNumero = Math.abs(segundoNumero);

    let dividendo;
    let divisor;

    // Determinando o dividendo e o divisor para garantir que vai dividir o número maior pelo menor
    primeiroNumero > segundoNumero ? (dividendo = primeiroNumero, divisor = segundoNumero) : (dividendo = segundoNumero, divisor = primeiroNumero);

    // Usando algoritmo de Euclides de divisões sucessivas para calcular o MDC;
    while(divisor !== 0){
        let resto = dividendo % divisor; 
        dividendo = divisor;    
        divisor = resto;    
    }
    
    return dividendo; // Quando o divisor é igual a 0, o dividendo vai estar com o último resto não nulo das divisões sucessivas e este valor é o MDC dos números analisados
}

module.exports = {calcularMDC}