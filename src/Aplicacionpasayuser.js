import React from 'react';
import {Router, Link} from "@reach/router";
import './css/estilospasayuser.css';
import "./css/estilos2pasayuser.css";
import "./css/estilos3pasayuser.css";
import Distribucion1pasayuser from "./Distribucion1pasayuser";
import Distribucion2pasayuser from "./Distribucion2pasayuser";
import Distribucion3pasayuser from "./Distribucion3pasayuser";
import Pruebaspasayuser from "./Pruebaspasayuser";

function Aplicacionpasayuser() {
  return (
    <div className="Aplicacionpasauiser">
        <nav>
          <Link className={"linkpasayuser"} to={"Distribucion1pasayuser"}> Distribución 1 </Link>
          <Link className={"linkpasayuser"} to={"Distribucion2pasayuser"}> Distribución 2 </Link>
          <Link className={"linkpasayuser"} to={"Distribucion3pasayuser"}> Distribución 3 </Link>
          <Link className={"linkpasayuser"} to={"Pruebaspasayuser"}> Pruebas </Link>
        </nav>

        <Router>
        <Distribucion1pasayuser path={"/Distribucion1pasayuser"} />
        <Distribucion2pasayuser path={"/Distribucion2pasayuser"}/>
        <Distribucion3pasayuser path={"/Distribucion3pasayuser"}/>
        <Pruebaspasayuser path={"Pruebaspasayuser"}/>
        </Router>
    </div>
  );
}

export default Aplicacionpasayuser;
