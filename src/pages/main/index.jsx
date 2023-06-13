import React from "react";
import "./index.css"
import ButtonCustom from "../../componentes/button";
import Navbar from "../../componentes/navbar";


export const Main = () =>{
    const [inputValue, setInpuetValue] = React.useState('');

    const handleClik = () =>{
        alert("Bienvenido "+ inputValue);
    }

    const  valuar = (event) =>{
        setInpuetValue(event.target.value);
    }
    return (
        <div className="colorDiv">
            <h1>GLAMUR</h1>
            <div className="contenedordiv">
            
            <Navbar/>
            <p>Bienvenido a la super tienda onlne </p>     
            <div><ButtonCustom label={'Registrate'} color={'#B0F1F8'} handleClik={handleClik}/>
                <input style={probando} value={inputValue} onChange={ valuar } />
            </div>
            </div>


        </div>
    )

}
export default Main;
const probando = {
    width:150,
    height: 40,    
    padding:1,
    borderRadius: 8,  
    fontSize:"1.5rem", 
}

