import { calcularPrecioNeto } from "./totalizador.js";

describe("Totalizador de compras", () => {
  it("debería calcular el precio neto multiplicando la cantidad por el precio unitario", () => {
    // Arrange (Preparar)
    const cantidad = 3;
    const precioUnitario = 50;

    // Act (Actuar)
    const resultado = calcularPrecioNeto(cantidad, precioUnitario);

    // Assert (Afirmar)
    expect(resultado).toEqual(150);
  });
});