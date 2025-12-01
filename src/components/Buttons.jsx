import car from "../assets/coche.png";
import lista from "../assets/lista.png"

function Botones() {
  return (
    <>
      <section>
        <article>
          <button>
            <img src={car} alt="logo auto" />
          </button>
          <button>
            <img src={lista} alt="lista autos" />
          </button>
        </article>
      </section>
    </>
  );
}
export default Botones;
