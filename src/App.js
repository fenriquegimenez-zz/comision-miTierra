import { CalcForm } from "./CalcForm";
import ReloadButton from "./components/ReloadButton.jsx";
import { Obs } from "./components/Obs.jsx";
import clsx from "clsx";
import { useState } from "react";
import { Github } from "./components/Github";

function App() {
  const [isDark, setDark] = useState(false);
  function setDarkMode() {
    if (isDark) {
      setDark(false);
    } else {
      setDark(true);
    }
  }
  return (
    <div
      className={clsx({
        "container-fluid": true,
        "bg-dark": isDark,
        "text-light": isDark,
        "text-center": true,
        "vh-100": true,
      })}
    >
      <h1
        className={clsx({
          "text-center": true,
          "pt-3": true,
        })}
      >
        Calculadora de comisión inmobiliaria
      </h1>
      <p className="text-center">
        Por favor ingrese el monto y la cantidad de cuotas totales y ya pagadas.
      </p>
      <button
        type="button"
        className={clsx({
          btn: true,
          "btn-dark": !isDark,
          "btn-light": isDark,
          "mb-3": true,
        })}
        onClick={setDarkMode}
      >
        {isDark ? "Ligth mode" : "Dark mode"}
      </button>
      <CalcForm theme={isDark}></CalcForm>
      <Obs />
      <ReloadButton />
      <Github dark={isDark} />
    </div>
  );
}

export default App;
