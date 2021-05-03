import { useState, useEffect } from "react";
import thousands from "thousands";
import clsx from "clsx";

export const Calculadora = props => {
  const { cuota, cantidad, pagado } = props;
  const [comisionRestante, setComisionRestante] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [comisionMensual, setComisionMensual] = useState(0);
  const [comisionTotal, setComisionTotal] = useState(0);
  const [precioContado, setPrecioContado] = useState(0);

  const classes = clsx({
    table: true,
    "table-bordered": true,
    "table-dark": props.theme,
  });

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
    <>
      <div className="d-flex justify-content-center text-center">
        <table className={classes}>
          <thead>
            <tr>
              <th scope="col">Precio total</th>
              <th scope="col">Precio contado</th>
              <th scope="col">Comisión total</th>
              <th scope="col">Comisión mensual</th>
              <th scope="col">Comisión restante</th>
            </tr>
          </thead>
          <tr>
            <td>{thousands(precioTotal)}</td>
            <td>{thousands(precioContado)}</td>
            <td>{thousands(comisionTotal)}</td>
            <td>{thousands(comisionMensual)}</td>
            <td>{thousands(comisionRestante)}</td>
          </tr>
        </table>
      </div>
    </>
  );
};
