import React from 'react'
import Conteiner from '../../conteiner';
import { ContenedorDiv,StyledButton } from '../../conteiner/componentes.js';
import { Typography, Box} from '@mui/material'
import { useDebounce } from '../hooks/useDebounce';
const MIN_VAlUE = 0 ;


export const ContadorPage = () => {
    const [value,setVAlue]=React.useState(0)
    const textRef = React.useRef(null);
    const handlePressMax =() =>{
        if (value >= 10){
            return
        }
        setVAlue(value + 1);
    }
    const handlePressMinus =() =>{
        if (value <= MIN_VAlUE){
            return ;
        }
        setVAlue(value -1)
    }
    if (textRef) {
        console.log(textRef.current);

    }

    
    return (
        <Conteiner>
            <Typography ref={textRef} variant="h2" >
                Contador:
            </Typography>
            <Box>
                <Typography>Valor:{useDebounce(value,100)}</Typography>
                < ContenedorDiv>
                    <StyledButton onClick={handlePressMax} sx={{backgroundColor:' #f8b7bd', color:"black"}}>
                        +
                    </StyledButton>
                    <StyledButton onClick={handlePressMinus} sx={{backgroundColor:'#00E7FF', color:"black"}}>
                        -
                    </StyledButton>
                </ ContenedorDiv>
            </Box>

        </Conteiner >
    )
}
