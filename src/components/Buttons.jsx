import { useState } from "react";
import car from "../assets/coche.png";
import lista from "../assets/lista.png";

function Botones({ setNuevoAuto }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const [patente, setPatente] = useState("");
  const [tipo, setTipo] = useState("");


  const AgregarNuevoAuto = () => {
    if (!patente || !tipo) return;

    const nuevo = {
      id: Date.now(),
      patente,
      tipo,
      inicio: Date.now(),
    };
    // if (!patente || !tipo) {
    //   alert("Por favor completa todos los campos");
    //   return;
    // }

    setNuevoAuto((prevAutos) => [...prevAutos, nuevo]);

    setPatente("");
    setTipo("");
    setMostrarModal(false);
  };

  return (
    <>
      <section className="botones-section">
        <article className="botones-article">
          <button className="boton" onClick={() => setMostrarModal(true)}>
            <img src={car} alt="logo auto" />
          </button>
          <button className="boton">
            <img src={lista} alt="lista autos" />
          </button>
        </article>
      </section>

      {mostrarModal && (
        <div className="modal-fondo" onClick={() => setMostrarModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={(e) => e.preventDefault()}>
              <h3>🚗 Nuevo Auto</h3>

              <label htmlFor="patente">Patente</label>
              <input
                id="patente"
                type="text"
                value={patente}
                onChange={(e) => setPatente(e.target.value)}
              />

              <label htmlFor="tipo">Tipo</label>
              <select
                id="tipo"
                name="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">-- Selecciona --</option>
                <option value="auto">Auto</option>
                <option value="camioneta">Camioneta</option>
              </select>
            </form>

            <button onClick={AgregarNuevoAuto}>Guardar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Botones;

{
  /* <fieldset>
  <legend>Elegí una opción:</legend>

  <label>
    <input type="radio" name="vehiculo" value="auto" />
    Auto
  </label>

  <label>
    <input type="radio" name="vehiculo" value="camioneta" />
    Camioneta
  </label>
</fieldset> */
}
