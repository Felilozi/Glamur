import React from 'react'
import { Box, Button } from '@mui/material'
import Swal from 'sweetalert2'



export const ContadorPage = ({ stock ,addCarrito,decrementStock}) => {

    const [value, setVAlue] = React.useState(1)
    const handleCarrito=() => {
        if (value > stock ){
            return(
                Swal.fire({confirmButtonColor: '#f8b7bd',text:'No se puede agregar mas al carrito'})
            )
                
        
        }
        addCarrito(value);
        setVAlue(1);
        decrementStock(value);
        
    }
    const handlePressMax = () => {
        if (value < stock) {
            setVAlue(value + 1);
        }
    }
    const handlePressMinus = () => {
        if (value <= 1) {
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
export default ContadorPage;