import { useEffect, useState } from "react";

function Main({ autos }) {
  const [, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>Lista de Autos</h1>

      {Array.isArray(autos) && autos.length > 0 ? (
        autos.map((auto, i) => {
          console.log("AUTOS:", autos);
          const minutos = Math.floor((Date.now() - auto.inicio) / 60000);
          const segundos = Math.floor(((Date.now() - auto.inicio) / 1000) % 60);

          return (
            <div key={i} className="auto-card">
              <h2>Patente: {auto.patente}</h2>
              <h3>Tipo: {auto.tipo}</h3>
              <p>
                Tiempo transcurrido: {minutos} min {segundos} s
              </p>
              <hr />
            </div>
          );
        })
      ) : (
        <p>No hay autos registrados todavía.</p>
      )}
    </>
  );
}

export default Main;
