const {indices} = require('./indicesDoArray')

describe('Testes unitários da função indices', () => {

    it('Deve retornar indices do menor e maior valor quando array [5, 0, 3, 2, 7, 1, 9, 20, 4] é informado', () => {
        let indicesEValores = indices([5, 0, 3, 2, 7, 1, 9, 20, 4])
        expect(indicesEValores.maiorValor).toBe(20)
        expect(indicesEValores.indiceMaiorValor).toBe(7)
        expect(indicesEValores.menorValor).toBe(0)
        expect(indicesEValores.indiceMenorValor).toBe(1)
    });

    it('Deve retornar indices do menor e maior valor quando array [3, 7, 25, 84, 11, -2, 98, 15, 631, -4, 10, 8] é informado', () => {
        let indicesEValores = indices([3, 7, 25, 84, 11, -2, 98, 15, 631, -4, 10, 8])
        expect(indicesEValores.maiorValor).toBe(631)
        expect(indicesEValores.indiceMaiorValor).toBe(8)
        expect(indicesEValores.menorValor).toBe(-4)
        expect(indicesEValores.indiceMenorValor).toBe(9)
    });

    it('Deve lançar erro e apresentar mensagem quando valor undefined é enviado', ()=>{
        expect(() => {indices(undefined)}).toThrowError('É preciso enviar um array para a função indices')
    });

    it('Deve lançar erro e apresentar mensagem quando valor null é enviado', ()=>{
        expect(() => {indices(null)}).toThrowError('É preciso enviar um array para a função indices')
    });

    it('Deve lançar erro e apresentar mensagem quando uma string é envida para a função ao invés de um array', ()=>{
        expect(() => {indices('a')}).toThrowError('É preciso enviar um array para a função indices')
    });

    it('Deve lançar erro e apresentar mensagem quando um número é envid0 para a função ao invés de um array', ()=>{
        expect(() => {indices(1)}).toThrowError('É preciso enviar um array para a função indices')
    });

    it('Deve lançar erro e apresentar mensagem quando um array vazio é enviado para a função', ()=>{
        expect(() => {indices([])}).toThrowError('O array enviado não pode ser vazio')
    });

});

