
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CardItem from '../detalleCart';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const DetallesProducto = () => {
    const [data, setdata] = React.useState();
    const [loading, setLoading] = React.useState(true); 
    const { id } = useParams();
    React.useEffect(() => {
        const db = getFirestore();
        const getProductos = doc(db, 'productos', id);
        getDoc(getProductos)
            .then((snapshot) => {
                setdata({ id: snapshot.id, ...snapshot.data() });
                setLoading(false); 
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
                setLoading(false); 
            });
    }, [id]);
    return (
        <Box>
            {loading ? (
                <Typography>cargando....</Typography>
            ) : (
                <CardItem data={data} />
            )}
        </Box>
    );
};

export default DetallesProducto;