import React from "react";
import { Box, Tab, Tabs } from '@mui/material';
// import Conjuntos from "../contenedor/lista-producto";
// import { ContadorPage } from "../contador";
import { useNavigate } from "react-router-dom";

const HomeTabs = ({current,items}) => {
    // const [selected, setSelected] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (_, newvalue) => {
        navigate('/productos/' + newvalue);

        

    }


    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Box>
                <Tabs value={current} onChange={handleChange} aria-label="lab API tabs example">
                    {
                        items.map((item,index) => <Tab key={item.id + index} label={item.titulo} value={item.id} />)
                    }

                    {/*---------------- FORMATO VIEJO DEJO PARA LA PRACTICA----------- 
                    <Tab label="conjuntos" value="conjuntos" />
                    <Tab label="Remeras" value="remeras" />
                    <Tab label="Buzo" value="buzo" />
                    <Tab label="Pantalones" value="pantalones" /> */}
                </Tabs>
            </Box>
            <Box m={3}>
                {/* {selectedSections(selected)} */}


            </Box>
        </Box>
    )
};
export default HomeTabs

    // const selectedSections = (value) => {
    //     switch (value) {
    //         case "all":
    //             return <Conjuntos />;

    //         case "remeras":
    //             return <ContadorPage />;

    //         case "buzo":
    //             return <Box>Buzo</Box>;

    //         case "pantalones":
    //             return <Box>Pantalon</Box>;
    //         default:
    //             return <Box></Box>;
    //     }
    // }



    