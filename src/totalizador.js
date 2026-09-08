export function calcularPrecioNeto(cantidad, precio) {
  return cantidad * precio;
}
export function calcularImpuesto(monto, estado) {
  const tasasDeImpuesto = {
    UT: 6.65,
    NV: 8.00,
    TX: 6.25,
    AL: 4.00,
    CA: 8.25
  };

  const tasa = tasasDeImpuesto[estado] || 0; // Si no existe el estado, el impuesto es 0
  return monto * (tasa / 100);
}

