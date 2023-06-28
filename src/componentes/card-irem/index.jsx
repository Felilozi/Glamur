import * as React from 'react';
import {Card ,CardActions,CardContent,CardMedia ,Button ,Typography }from '@mui/material';

const CardItem= ({name,price,description,stock,imageURL})=>{
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt={name}

            image={imageURL}

        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Precio:{price || ""}
            </Typography>

            <Typography variant="body2" color="text.secondary">
            Stock:{stock || ""}
            </Typography>
            
            
            <Typography variant="body2" color="text.secondary">
            {description || ""}
            </Typography>

        </CardContent>
        <CardActions>
            <Button size="small">Comprar</Button>

        </CardActions>
        </Card>
    );
    }
export default CardItem
