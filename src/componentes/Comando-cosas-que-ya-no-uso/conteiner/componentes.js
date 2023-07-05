


import { Box,styled,Button } from "@mui/material"
export const Contenedor = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    [theme.breakpoints.down(1024)]:{
        margin:5,
    }
}))
export const ContenedorDiv = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,

})) 

export const StyledButton =styled(Button)(()=>({
    padding: "5px 20px",
    borderRadius: "8px",
    boxShadow:'0 0 5px 0 black',
    margin:20,
    
}))