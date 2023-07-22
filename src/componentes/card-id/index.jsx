
import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia,  Typography } from '@mui/material';
import { ContadorPage } from '../contador';
import { AppContext } from '../context';


const CardItem = ({ data }) => {
    // const {title,price,imageURL,stock} = data
    const { addProductToCarrito } = React.useContext(AppContext)
    const addToCarrito= (quantity) =>{
        addProductToCarrito({
            id:data.id,
            producto:data.title,
            priceForUnit:data.price,
            quantity:quantity,

        })
    }  
    

    return (
        <Card sx={{ maxWidth :1000, display:"flex" ,justifyContent:"center", alignItems: "center"}} >
            <CardMedia
                component="img"
                alt={data.title}
                image={data.imageURL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cantidad:{data.stock}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio:${data.price}
                </Typography>

                <CardActions>
                
                <ContadorPage stock={data.stock} addToCarrito={addToCarrito} />

            </CardActions>

            </CardContent>

        </Card>
    );
}
export default CardItem
