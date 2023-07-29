
import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ContadorPage from '../contador';
import { AppContext } from '../../context';
const CardItem = ({ data }) => {
    const { addProductToCarrito } = React.useContext(AppContext)
    const [stock, setStock] = React.useState(data.stock);
    const addCarrito = (quantity) => {
        addProductToCarrito({
            id: data.id,
            title: data.title,
            price: data.price,
            imageURL: data.imageURL,
            stock: data.stock,
            quantity: quantity,
        })
    };
    const decrementStock = (quantity) => {
        if (stock - quantity >= 0) {
            setStock((prevStock) => prevStock - quantity);
            
            
        }
    };

    return (
        <Card sx={{
            maxWidth: 800, height: 400, margin: 'auto', marginTop: 3, boxShadow: 3,
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
        }} >
            <CardMedia
                component="img"
                alt={data.title}
                image={data.imageURL}
                sx={{ height: 300, width: 300, objectFit:"contain" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cantidad:{stock}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio:${data.price}
                </Typography>

                <CardActions sx={{ justifyContent: 'center' }}>

                    <ContadorPage stock={stock} addCarrito={addCarrito} decrementStock={decrementStock}  />

                </CardActions>

            </CardContent>

        </Card>
    );
}
export default CardItem
