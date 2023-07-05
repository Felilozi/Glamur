import { Box, Typography } from '@mui/material'
import React from 'react'
import CardItem from '../../card-item';
         

const ListaElementos = ({ loading, items }) => {
    
    return (
        <Box >
            {
                Boolean(loading) ?
                    <Typography>cargando....</Typography>
                    :
                    items.map((item, index) => {
                        return (
                            
                            <CardItem key={index + item.name} name={item.name} price={item.price} stock={item.stock} imageURL={item.imageURL} />
                        )
                    })
            }
        </Box>

    )
}
export default ListaElementos

