import { Box } from '@mui/material'
import React from 'react'
import HomeTabs from '../Tabs'
import { useNavigate, useParams } from 'react-router-dom'
import { listProducto } from '../../sdk/productos'
import { ItemList } from '../item-list'

export const CATEGORIA = [
    { id: "all", titulo: "Todo los productos" },
    { id: "remeras", titulo: "Remeras" },
    { id: "pantalones", titulo: "Pantalones" },
    { id: "canguro", titulo: "Buzo" }
]
const searchCategoria = (id) => {
    switch (id) {
        case 'all':
            return 'remera,pantalones,canguro'
        case 'remeras':
            return "remeras"
        case 'canguro':
            return "canguro"
        case 'pantalones':
            return "pantalones"
        default:
            return "telefono"

    }
}

export const ItemContainer = () => {
    const [items, setItems] = React.useState([]);
    const[loading,setLoading]=React.useState(false);

    const { categoria } = useParams();
    const navigate = useNavigate();
    const current = CATEGORIA.some(cat => cat.id === categoria) ? categoria : 'all';


    React.useEffect(() => {
        if (!CATEGORIA.some(cat => cat.id === categoria)) {
            navigate('/productos/all');
        }
    }, [categoria, navigate]);

    React.useEffect(() => {
        setLoading(true);
        listProducto(searchCategoria(categoria))
        

            .then(res => res.json())

            .then(res => {
                const data = res.results?.map((elemento) => ({
                    id: elemento.id,
                    title: elemento.title,
                    price: elemento.price,
                    image: elemento.thumbnail,


                }))
                setItems(data);
            })
            .finally(()=> setLoading(false))
    }, [categoria]);



    return (

        <Box>
            <HomeTabs current={current} items={CATEGORIA} />
            <div>
                <ItemList items={items} loading={loading} />
            </div>

        </Box>
    )
}
