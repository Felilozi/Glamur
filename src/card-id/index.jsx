
import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia,  Typography } from '@mui/material';
import { ContadorPage } from '../contador';




const CardItem = ({ data }) => {
    // const {title,price,imageURL,stock} = data
    return (
        <Card sx={{  maxWidth: 800,height:400,margin: 'auto', marginTop: 2, boxShadow: 3,
        display:'flex',flexDirection: 'row', alignItems: 'center' ,justifyContent: 'center'
        }} >
            <CardMedia
                component="img"
                alt={data.title}
                image={data.imageURL}
                sx={{ height: 300 ,width: 300 }}
            />
            <CardContent>
                <Typography  gutterBottom variant="h5" component="div" align="center">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cantidad:{data.stock}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Precio:${data.price}
                </Typography>

                <CardActions  sx={{ justifyContent: 'center' }}>
                
                <ContadorPage data={data} stock={data.stock}  />

            </CardActions>

            </CardContent>

        </Card>
    );
}
export default CardItem
