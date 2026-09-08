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
export function calcularDescuento(monto) {
  let porcentaje = 0;

  if (monto >= 30000) {
    porcentaje = 15;
  } else if (monto >= 10000) {
    porcentaje = 10;
  } else if (monto >= 7000) {
    porcentaje = 7;
  } else if (monto >= 3000) {
    porcentaje = 5;
  } else if (monto >= 1000) {
    porcentaje = 3;
  }

  // Devolvemos de cuánto es el descuento en dinero, no solo el porcentaje
  return monto * (porcentaje / 100);
}

