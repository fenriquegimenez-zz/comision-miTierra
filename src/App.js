import { CalcForm } from "./CalcForm";

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">Calculadora de comisión inmobiliaria</h1>
      <p className="text-center">
        Por favor ingrese el monto y la cantidad de cuotas totales y ya pagadas.
      </p>
      <CalcForm></CalcForm>
    </div>
  );
}

export default App;
