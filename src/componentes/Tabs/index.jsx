import React from "react";

import {Box,Tab,Tabs} from '@mui/material';
import Conjuntos from "../../pages/main/conjuntos";

const HomeTabs = () => {
    const [selected,setSelected] =React.useState("camisa");
    const handleChange=(_,value) => {
        setSelected(value);
        console.log(selected);

    }

    const selectedSections = (value) => {
        switch (value) {
            case "conjuntos" :
                return <Conjuntos/>;

            case "remeras":
                return <Box>Remera</Box>;
                
            case "buzo":
                return <Box>Buzo</Box>;

            case "pantalones" :
                return <Box>Pantalon</Box>;
            default :
                return <Box></Box>;
        }}
    

        return (
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Box>
                <Tabs value={selected} onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="conjuntos" value="conjuntos" />
                    <Tab label="Remeras" value="remeras" />
                    <Tab label="Buzo" value="buzo" />
                    <Tab label="Pantalones" value="pantalones" />
                </Tabs>
                </Box>
                <Box m={3}>
                {selectedSections(selected)}
                {/* {
                    selected === "conjuntos" ? 
                    <Conjuntos/>
                    : null
                }
                {
                    selected ==="remeras" ? 
                    <Box>Remeras</Box>:null
                }
                
                {
                    selected ==="buzo" ? 
                    <Box>Buzo</Box>:null
                }
                
                {
                    selected ==="pantalones" ? 
                    <Box>Pantalon</Box>:null
                } */}

                </Box>
            </Box>
)};
export default HomeTabs