import {Contenedor} from '../conteiner/componentes.js';
import React from 'react'
import { Box } from '@mui/material';


const Conteiner=({children})=>{

    return (
        <Contenedor >
            <Box>
            {children}
            </Box>
        </Contenedor> 
        )
}
export default Conteiner