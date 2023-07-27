import React from "react";
import { Box, Tab, Tabs } from '@mui/material';
import { useNavigate } from "react-router-dom";

const HomeTabs = ({current,items}) => {

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
                </Tabs>
            </Box>
        </Box>
    )
};
export default HomeTabs

