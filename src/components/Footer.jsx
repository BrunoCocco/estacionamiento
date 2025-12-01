function Footer({ lista }) {
  console.log("historial de salidas: ", lista);
  return (
    <>
      <h2>Historial de Salidas:</h2>
      {lista.length === 0 ? (
        <p>No hay ninguna salida hoy. </p>
      ) : (
        <ul>
          {lista.map((ticket) => (
            <li key={ticket.id}>
              <strong>{ticket.patente}</strong> – {ticket.tipo}
              <br />⏱ {ticket.duracion} min | 💰 €{ticket.total} | 📅{" "}
              {ticket.salida}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Footer;
