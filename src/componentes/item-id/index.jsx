import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import CardItem from '../card-id';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const DetallesProducto = () => {
    const [data, setdata] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const {id} = useParams();


    React.useEffect(() => {
        // setLoading(true);
        const db = getFirestore();
        const getProductos = doc(db, 'productos', id);

        getDoc(getProductos)
        .then ((snapshot) => {
            // console.log({id:snapshot.id,...snapshot.data()});
            // console.log({id:snapshot.id,...snapshot.data()});
            setdata({ id:snapshot.id, ...snapshot.data()})
        });

    },[id]);

    console.log(data);
    return (


        <Box>
                { 
                Boolean(loading) ?
                    <Typography>cargando....</Typography>
                
            :
                <CardItem data={data} />


                }
        </Box>

    )


};

export default DetallesProducto;
