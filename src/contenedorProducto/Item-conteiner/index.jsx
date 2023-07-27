import { Box } from '@mui/material'
import React from 'react'
import HomeTabs from '../Tabs'
import { useNavigate, useParams } from 'react-router-dom'
import { ItemList } from '../item-list'
import { getFirestore, getDocs, collection, where, query } from 'firebase/firestore';
export const CATEGORIA = [
    { id: "all", titulo: "Todo los productos" },
    { id: "Remera", titulo: "Remeras" },
    { id: "Pantalon", titulo: "Pantalones" },
    { id: "Buzo", titulo: "Buzo" }
]
export const ItemContainer = () => {
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
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
        const db = getFirestore();
        const getCollection = collection(db, 'productos')
        if (categoria === "all") {
            getDocs(getCollection)
                .then((snapshot) => {
                    setLoading(false);
                    setItems(snapshot.docs.map(el => ({ id: el.id, ...el.data() })))
                    
                });}
        else if (CATEGORIA.some(categorias => categorias.id === categoria)) {
            const q = query(getCollection, where('category', '==', categoria));
            getDocs(q)
                .then((snapshot) => {
                    setLoading(false);
                    setItems(snapshot.docs.map(el => ({ id: el.id, ...el.data() })))
                    
                })
        }}, [categoria])
    return (
        <Box>
            <HomeTabs current={current} items={CATEGORIA} />
            <div>
                <ItemList items={items} loading={loading} />
            </div>
        </Box>
    )}
