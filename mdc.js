function calcularMDC(primeiroNumero, segundoNumero){
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

console.log(calcularMDC(60, 18))
console.log(calcularMDC(20, 24))
console.log(calcularMDC(144, 60))
console.log(calcularMDC(23732, 180))