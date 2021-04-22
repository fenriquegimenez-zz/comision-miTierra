import React, { useState, useEffect } from "react";
import thousands from "thousands";

export const Calculadora = props => {
  const { cuota, cantidad, pagado } = props;
  const [comisionRestante, setComisionRestante] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [comisionMensual, setComisionMensual] = useState(0);
  const [comisionTotal, setComisionTotal] = useState(0);
  const [precioContado, setPrecioContado] = useState(0);

  useEffect(() => {
    setPrecioTotal(cuota * cantidad);
  }, [cantidad, cuota]);

  useEffect(() => {
    setComisionTotal(precioContado * 0.015);
  }, [precioContado]);

  useEffect(() => {
    setPrecioContado(precioTotal / 2);
  }, [precioTotal]);

  useEffect(() => {
    setComisionMensual(cuota * 0.2);
  }, [cuota]);

  useEffect(() => {
    setComisionRestante(comisionTotal - comisionMensual * pagado);
  }, [comisionMensual, comisionRestante, comisionTotal, pagado]);

  if (comisionRestante < 0) {
    setComisionRestante(0);
  }

  return (
    <div>
      <ul>
        <li>El precio total del terreno es: {thousands(precioTotal)}</li>
        <li>El precio contado del terreno es: {thousands(precioContado)}</li>
        <li>La comisión total es: {thousands(comisionTotal)}</li>
        <li>La comisión mensual es: {thousands(comisionMensual)}</li>
        <li>La comisión restante es: {thousands(comisionRestante)}</li>
      </ul>
      <p className="text-danger">
        * Obs: La parte con la entrega no está terminada
      </p>
    </div>
  );
};
