const { calcularMDC } = require('./mdc');

describe('Testes unitários da função calcularMDC', () => {
    it('Deve calular o MDC de 60 e 18', () => {
        expect(calcularMDC(60, 18)).toBe(6)
    });

    it('Deve calcular o MDC de 20 e 24', () => {
        expect(calcularMDC(20, 24)).toBe(4)
    });

    it('Deve calcular o MDC de 144 e 60', ()=> {
        expect(calcularMDC(144, 60)).toBe(12)
    });

    it('Deve calcular o MDC de 23732 e 180', () => {
        expect(calcularMDC(23732, 180)).toBe(4)
    });

    it('Deve calcular o MDC de -5 e 20', () => {
        expect(calcularMDC(-5, 20)).toBe(5)
    });

    it('Deve apresentar mensagem de erro quando somente um número é enviado', () => {
        expect(() => {calcularMDC(10)}).toThrowError('Ambos os números devem ser informados para cálculo do MDC')
    });
   
    it('Deve apresentar mensagem de erro quando o primeiro número é enviado como undefined', () => {
        expect(() => {calcularMDC(undefined, 10)}).toThrowError('Ambos os números devem ser informados para cálculo do MDC')
    });

    it('Deve apresentar mensagem de erro quando o segundo número é enviado como undefined', () => {
        expect(() => {calcularMDC(10, undefined)}).toThrowError('Ambos os números devem ser informados para cálculo do MDC')
    });

    it('Deve apresentar mensagem de erro quando nenhum número é enviado', () => {
        expect(() => {calcularMDC()}).toThrowError('Ambos os números devem ser informados para cálculo do MDC')
    });

    it('Deve apresentar mensagem de erro quando os dois números são enviados como undefined', () => {
        expect(() => {calcularMDC(undefined, undefined)}).toThrowError('Ambos os números devem ser informados para cálculo do MDC')
    });

})