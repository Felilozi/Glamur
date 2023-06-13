import React from "react";


const Navbar =()=>{
    return (
        <div>

        <nav >
            <ul style={ulnavbar}>
                <li ><a href="#"style={linavbar }>Inicio</a></li>
                <li ><a href="#" style={linavbar}>Contacto</a></li>
                <li ><a href="#" style={linavbar} >Productos</a></li>
            </ul>
        </nav>  
        </div>

    )
}
export default Navbar;

const ulnavbar = {
    listStyleType: "none",
    display :"flex",

}
const linavbar = {
    listStyleType: "none",
    marginright:10,
    textDecoration: "none",
    padding:5,


}