import React from "react";



const ButtonCustom =({label,color,handleClik})=>{

    return <button onClick={handleClik} style={{...estilo,backgroundColor:color }}> {label}</button>


}
export default ButtonCustom ;

const estilo={
    width: 150,
    height: 50,
    padding:1,
    borderRadius: 8,  
    fontSize: "1.3rem" ,
}


