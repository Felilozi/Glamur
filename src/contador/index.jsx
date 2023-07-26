import React from 'react'
import { Box, Button } from '@mui/material'
import { AppContext } from '../context';
const MIN_VAlUE = 1;
export const ContadorPage = ({data, stock}) => {
    const { addProductToCarrito } = React.useContext(AppContext)
    const [value, setVAlue] = React.useState(1)

    // const addToCarrito= (quantity) =>{
    //     addProductToCarrito({
    //         id:data.id,
    //         producto:data.title,
    //         priceForUnit:data.price,
    //         quantity:quantity,

    //     })
    // }


    const handleCarrito=() => {
        // addToCarrito(addProductToCarrito,value)
            addProductToCarrito({
            
            id:data.id,
            title:data.title,
            price:data.price,
            imageURL:data.imageURL,
            stock:stock,
            quantity:value,

        })

        setVAlue(1);
    }
    const handlePressMax = () => {
        if (value < stock) {
            setVAlue(value + 1);
        }
    }
    const handlePressMinus = () => {
        if (value <= MIN_VAlUE) {
            return;
        }
        setVAlue(value - 1)
    }

    return (
        <Box>

            <Box sx={{ display: 'flex', justifyContent: 'start', marginLeft: '30px', gap: "5px" }}>
                <Button size="small" onClick={handleCarrito}>Agregar Carrito </Button>
                <Button onClick={handlePressMax}
                    style={{
                        borderRadius: '50%',
                        backgroundColor: '#f8b7bd',
                        color: "black",
                        marginLeft: '20px',
                    }}> +</Button>
                <p style={{ marginLeft: '15px' }}>{value} </p>
                <Button onClick={handlePressMinus}
                    style={{
                        backgroundColor: '#00E7FF',
                        color: "black",
                        marginLeft: '10px',
                        borderRadius: '50%'
                    }}> - </Button>

            </Box>
        </Box>


    )
}
