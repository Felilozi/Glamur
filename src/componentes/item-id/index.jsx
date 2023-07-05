import React from 'react';
import { idProducto } from '../../sdk/productos';

import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CardItem from '../card-id';

const DetallesProducto = () => {

    const [item, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const { id } = useParams();

    React.useEffect(() => {
        setLoading(true);
        console.log(id);
        idProducto(id)
            .then(res => res.json())
            .then(res => {
                setItems(res);
                console.log(res);
            })
            .finally(() => setLoading(false))
    }, [id]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!item) {
        return <p>No se encontró el producto.</p>;
    }

    return (
        <Box>
            {
                Boolean(loading) ?
                    <Typography>cargando....</Typography>
                    :
                    <CardItem data={item} />

            }
        </Box>

    );
};

export default DetallesProducto;
