import { Box, Typography } from "@mui/material";
import React from "react";
import CardItem from "../../../componentes/card-irem";
import { getProducto } from "./productos";


const Conjuntos = () => {
    const [items,setItem] = React.useState([]);
    const [loading,setLoading] = React.useState(false);

    React.useEffect(() => {  
        setLoading(true);
        getProducto()
        .then((res) => {

            setItem(res)
        })
        .finally(()=>{
            setLoading(false);
        })
    },[items])
    return (
        <Box display={"flex"} justifyContent={'start'} flexDirection={"row"} gap={5} >
            {
                loading ?
                <Typography>
                    cargando....
                </Typography>
                :
                items?.map((item,index) =>{
                    return (
                        <CardItem key={index + item.name} name={item.name} price={item.price} description={""} stock={item.stock} imageURL={item.imageURL} />
                )})
            }
        </Box>   

    )}

export default Conjuntos;

