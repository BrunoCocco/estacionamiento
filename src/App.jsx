import Header from "./components/Header";
import Botones from "./components/Buttons";
import Main from "./components/Main";
import Footer from "./components/Footer"
import { useState } from "react";

import "./App.css";

function App() {
    const [autos, setNuevoAuto] = useState([]);
    const [lista, setLista] = useState([]);
  return (
    <>
      <Header />
      <Botones setNuevoAuto={setNuevoAuto}/>
      <Main autos={autos} setAutos={setNuevoAuto} setLista={setLista} />
      <Footer lista={lista}/>
    </>
  );
}

export default App;
