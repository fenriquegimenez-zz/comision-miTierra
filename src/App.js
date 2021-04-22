import { CalcForm } from "./CalcForm";

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-3">Calculadora de comisión inmobiliaria</h1>
      <p className="text-center">
        Por favor ingrese el monto y la cantidad de cuotas totales y ya pagadas.
      </p>
      <CalcForm></CalcForm>
      <small className="ml-2">
        Cálculo realizado en base a una comisión de 20% sobre la entrega y 1.5%
        sobre el precio contado.
      </small>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => window.location.reload()}
          type="submit"
          className="btn btn-danger text-center mt-5"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
