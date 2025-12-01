import { useEffect, useState } from "react";

function Main({ autos, setAutos }) {
  const [, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const finalizarAuto = (auto) => {
  const duracionMs = Date.now() - auto.inicio;
  const minutos = duracionMs / 60000;

  // tarifas
  const tarifa = auto.tipo === "camioneta" ? .08 : .04;
  const total = minutos * tarifa;

  console.log(
    `Tiket Finalizado | Tipo: ${auto.tipo} | Duración: ${minutos.toFixed(
      1
    )} min | Total: €${total.toFixed(2)}`,

  );
return total;
};

 const borrarAuto = (auto) => {
  finalizarAuto(auto),
  setAutos((prev) => prev.filter((a) => a.id !== auto.id));
};
  return (
    <>
      <h1>Lista de Autos</h1>

      {autos.map((auto, i) => {
        const minutos = Math.floor((Date.now() - auto.inicio) / 60000);
        const segundos = Math.floor(((Date.now() - auto.inicio) / 1000) % 60);

        return (
          <div key={i} className="auto-card">
            <h2>Patente: {auto.patente}</h2>
            <h3>Tipo: {auto.tipo}</h3>
            <p>
              Tiempo transcurrido: {minutos} min {segundos} s
            </p>
            <button onClick={()=>{borrarAuto(auto)}}>Cerrar Parking</button>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Main;
