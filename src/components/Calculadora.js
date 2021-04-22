import React, { useState } from "react";
import thousands from "thousands";

export const Calculadora = props => {
  const { cuota, cantidad, pagado, entrega } = props;
  const precioTotal = cuota * cantidad;
  const precioContado = precioTotal / 2;
  const comisionTotal = precioContado * 0.015;
  const comisionMensual = cuota * 0.2;
  const comisionRestante = comisionTotal - comisionMensual * pagado;

  return (
    <div>
      <ul>
        <li>El precio total del terreno es: {thousands(precioTotal)}</li>
        <li>El precio contado del terreno es: {thousands(precioContado)}</li>
        <li>La comisión total es: {thousands(comisionTotal)}</li>
        <li>La comisión mensual es: {thousands(comisionMensual)}</li>
        <li>La comisión restante es: {thousands(comisionRestante)}</li>
      </ul>
    </div>
  );
};
