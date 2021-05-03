import { useState } from "react";
import clsx from "clsx";

import { Calculadora } from "./components/Calculadora";

export const CalcForm = props => {
  const [cantidad, setCantidad] = useState(0);
  const [cuota, setCuota] = useState(0);
  const [pagado, setPagado] = useState(0);
  const [entrega, setEntrega] = useState(0);

  function handleFormSubmit(event) {
    event.preventDefault();
  }
  function handleMontoCuota(event) {
    setCuota(event.target.value);
  }
  function handleCantidadCuota(event) {
    setCantidad(event.target.value);
  }
  function handleCuotasPagadas(event) {
    setPagado(event.target.value);
  }
  function handleEntrega(event) {
    setEntrega(event.target.value);
  }
  const classes = clsx({
    "form-control": true,
    "bg-dark": props.theme,
    "text-light": props.theme,
  });
  console.log(classes);
  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="input-group mb-3">
        <div className="input-group mb-3">
          <input
            type="number"
            placeholder="Monto cuota"
            onChange={handleMontoCuota}
            className={classes}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="number"
            placeholder="Cantidad de cuotas"
            onChange={handleCantidadCuota}
            className={classes}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="number"
            placeholder="Cuotas pagadas"
            onChange={handleCuotasPagadas}
            className={classes}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="number"
            placeholder="Entrega"
            onChange={handleEntrega}
            className={classes}
          />
        </div>
      </form>

      {cuota ? (
        <Calculadora
          cuota={cuota}
          cantidad={cantidad}
          pagado={pagado}
          entrega={entrega}
          theme={props.theme}
        ></Calculadora>
      ) : null}
    </div>
  );
};
