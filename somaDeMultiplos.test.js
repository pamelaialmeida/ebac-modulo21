const { somaDeMultiplos } = require('./somaDeMultiplos')

describe('Testes unitários da função somaDeMultiplos', () => {
   
    it('Deve somar os múltiplos de 3 e 5 abaixo de 10', () => {
        expect(somaDeMultiplos(3, 5, 10)).toBe(23)
    });

    it('Deve somar os múltiplos de 5 e 7 abaixo de 1000', () => {
        expect(somaDeMultiplos(5, 7, 1000)).toBe(156361)
    });
    
    it('Deve lançar exceção e apresentar mensagem se o valor limite não for informado', () => {
        expect(() => {somaDeMultiplos(5, 7)}).toThrowError('O valor limite deve ser informado para soma de múltiplos')
    });
    
    it('Deve lançar exceção e apresentar mensagem se o primeiro número for enviado como undefined', () => {
        expect(() => {somaDeMultiplos(undefined, 7, 1000)}).toThrowError('Ambos os números devem ser informados para soma de múltiplos')
    });

    it('Deve lançar exceção e apresentar mensagem se o segundo número for enviado como undefined', () => {
        expect(() => {somaDeMultiplos(5, undefined, 1000)}).toThrowError('Ambos os números devem ser informados para soma de múltiplos')
    });

    it('Deve lançar exceção e apresentar mensagem se os dois números forem envados como undefined', () => {
        expect(() => {somaDeMultiplos(undefined, undefined, 1000)}).toThrowError('Ambos os números devem ser informados para soma de múltiplos')
    });

    it('Deve lançar exceção e apresentar mensagem quando nenhum números é informado', () => {
        expect(() => {somaDeMultiplos()}).toThrowError('Ambos os números devem ser informados para soma de múltiplos')
    });

    it('Deve lançar exceção e apresentar mensagem quando somente um número é informado', () => {
        expect(() => {somaDeMultiplos(5)}).toThrowError('Ambos os números devem ser informados para soma de múltiplos')
    });
    
});