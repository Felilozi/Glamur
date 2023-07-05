import { Box, Typography} from '@mui/material'
import React from 'react'
import Item from '../card-item'


export const ItemList = ({ loading, items }) => {
    return (

            <Box style={contenedordiv} >
                {
                    Boolean(loading) ?
                    <Typography>cargando....</Typography>
                    :
                    items.map((item) => <Item data={item} />)
                }
            </Box>


    )
}
export default ItemList
const contenedordiv = {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    margin: '30px',

}