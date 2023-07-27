import * as React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { AppContext } from '../../context';

const CartCarrriro = ({ index,data,handleRender}) => {
  const { deletCarrito } = React.useContext(AppContext);
  const  handleEliminar = () => {
    handleRender()
    deletCarrito(index)
  } 

  return (
    <Card sx={{ display: 'flex', maxWidth: 700,marginLeft:2, marginTop: 2, }}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <CardMedia

            component="img"
            alt={data.title}
            image={data.imageURL}
            sx={{ width: 200}}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent >
          
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: ${data.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cantidad: {data.quantity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total: {data.quantity * data.price}

            </Typography>
            <button onClick={handleEliminar}>Eliminar</button>
            
            
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
export default CartCarrriro
