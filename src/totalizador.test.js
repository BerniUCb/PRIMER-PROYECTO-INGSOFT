import { calcularPrecioNeto , calcularImpuesto , calcularDescuento , obtenerEstados } from "./totalizador.js";

describe("Totalizador de compras", () => {
  it("debería calcular el precio neto multiplicando la cantidad por el precio unitario", () => {
    expect(calcularPrecioNeto(3, 50)).toEqual(150);
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
// TESTS PARA EL DESCUENTO
  it("debería aplicar 0% de descuento para un monto menor a 1000", () => {
    expect(calcularDescuento(500)).toEqual(0);
  });

  it("debería aplicar 3% de descuento para un monto de 1000", () => {
    // El 3% de 1000 es 30
    expect(calcularDescuento(1000)).toEqual(30); 
  });

  it("debería aplicar 5% de descuento para un monto de 3000", () => {
    // El 5% de 3000 es 150
    expect(calcularDescuento(3000)).toEqual(150); 
  });

  it("debería aplicar 15% de descuento para un monto de 30000", () => {
    // El 15% de 30000 es 4500
    expect(calcularDescuento(30000)).toEqual(4500); 
  });
  // TEST PARA LA LISTA DESPLEGABLE suponemos como quedaria el codigo en nuestro UI
  it("debería devolver la lista de estados permitidos para la lista desplegable", () => {
    // Los estados que definimos en las reglas
    const estadosEsperados = ["UT", "NV", "TX", "AL", "CA"];
    
    expect(obtenerEstados()).toEqual(estadosEsperados);
  });
});