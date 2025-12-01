import Header from "./components/Header";
import Main from "./components/Main";
import Botones from "./components/Buttons";
import { useState } from "react";

import "./App.css";

function App() {
    const [autos, setNuevoAuto] = useState([]);
  return (
    <>
      <Header />
      <Botones setNuevoAuto={setNuevoAuto}/>
      <Main autos={autos} />
    </>
  );
}

export default App;
