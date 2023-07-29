import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
    return (
        
        <Card sx={{maxWidth: 345, width: '25%', marginBottom: '20px' }}>
            <CardMedia
                component="img"
                alt={data.title}
                image={data.imageURL}
                sx={{ objectFit:"contain", width:" 85%",
                    height:" 40vh"}} />
                
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio:${data.price}

                </Typography>

            </CardContent>
            <CardActions>
                <Link to={"/item/" + data.id}>
                    <Button size="small">Detalle</Button>
                </Link>

            </CardActions>
        </Card>
    );
}
export default Item
