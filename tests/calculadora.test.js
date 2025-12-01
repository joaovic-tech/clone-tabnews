const calculadora = require('../models/calculadora');

test('soma 2 + 2 e deve retornar 4', () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test('soma 5 + 100 e deve retornar 105', () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test('soma "banana" + 100 e deve retornar Erro', () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
