import React from "react";
import "./index.css"
import ButtonCustom from "../../componentes/button";
import Navbar from "../../componentes/navbar";




export const Main = () =>{
    return (
        <div className="colorDiv">
    
            <h1>GLAMUR</h1>
            <div className="contenedordiv">            
            <Navbar/>
            <p>Bienvenido a la super tienda onlne </p>     
            <ButtonCustom  />

            </div>
        </div>
    )
    
    }
    export default Main;
    


