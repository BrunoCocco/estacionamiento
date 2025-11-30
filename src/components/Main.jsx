import { useState } from "react";
import impresora from "../utils/impresora";

function Main() {
  const [data, setData] = useState({ nombre: "", hora: "" });
  const [input, setInput] = useState("");

  const guardarData = () => {
    const nuevo = {
      nombre: input,
      hora: new Date().toLocaleTimeString(),
    };

    setData(nuevo);     // 1) guardamos en React
    impresora(JSON.stringify(nuevo)); // 2) lo enviamos al archivo
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={guardarData}>Enviar</button>
    </>
  );
}

export default Main;
