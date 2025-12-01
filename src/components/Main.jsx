function Main({ autos }) {
  return (
    <>
      <h1>Lista de Autos</h1>
      {autos.map((auto, i) => {
        const minutos = Math.floor((Date.now() - auto.inicio) / 60000);
        const segundos = Math.floor(((Date.now() - auto.inicio) / 1000) % 60);

        return (
          <div key={i} style={{ margin: "10px 0" }}>
            <h2>Patente: {auto.patente}</h2>
            <h3>Tipo: {auto.tipo}</h3>
            <p>
              Tiempo transcurrido: {minutos} min {segundos} s
            </p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Main;