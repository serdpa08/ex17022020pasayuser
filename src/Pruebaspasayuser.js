import React from "react";
import Img from "react-image";

const Pruebaspasayuser = () =>{
    return(
        <div className={"contenedorfleximagenes"}>
            <Img src={require("./Recursos/imagen1.jpg")} className={"contenedorfleximagenes__imagen1pasayuser"}  title={"imagen validación 1"} alt={"imagen de validación 1"}/>
            <Img src={require("./Recursos/imagen2.PNG")} className={"contenedorfleximagenes__imagen1pasayuser"}  />
        </div>
    )
}

export default Pruebaspasayuser