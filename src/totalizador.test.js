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
  it("debería calcular el impuesto para el estado CA (8.25%)", () => {
    expect(calcularImpuesto(100, "CA")).toEqual(8.25);
  });

  it("debería calcular el impuesto para el estado TX (6.25%)", () => {
    expect(calcularImpuesto(100, "TX")).toEqual(6.25);
  });
  
  it("debería calcular el impuesto para el estado AL (4.00%)", () => {
    expect(calcularImpuesto(100, "AL")).toEqual(4.00);
  });
});