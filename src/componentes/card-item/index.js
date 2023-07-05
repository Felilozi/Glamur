import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ data}) => {
    console.log(data)
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={data.title}
                image={data.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio:${data.price}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Agregar Carrito</Button>
                <Link to={"/item/"+ data.id}>
                <Button size="small">Detalle</Button>
                </Link>
                
            </CardActions>
        </Card>
    );
}
export default Item
