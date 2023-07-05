import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';


const CardItem = ({ data}) => {
    console.log(data.thumbnail);
    return (
        <Card sx={{ maxWidth :600, display:"flex" ,justifyContent:"center", alignItems: "center",marginLeft:50,marginTop:20}} >
            <CardMedia
                component="img"
                alt={data.title}
                image={data.thumbnail}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cantidad:{data.sold_quantity
}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio:${data.price}
                </Typography>
                <CardActions>
                <Button size="small">Agregar Carrito</Button>

            </CardActions>

            </CardContent>

        </Card>
    );
}
export default CardItem
