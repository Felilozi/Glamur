import { Box, Button, Modal } from '@mui/material'
import React from 'react'


const emailValiDato = (email) => /^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

const UserInfo = ({ carrito, createNewOrder }) => {
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefono, setTelefono] = React.useState('');

    const totalCarrito = carrito.reduce((a, v) => a = a + (v.price * v.quantity), 0);
    const handleFinalizarCompra = () => {

        if (!isFormValid || !createNewOrder || !carrito.length) {
            return;
        }
        const order = {
            buyer: {
                nombre,
                apellido,
                email,
                telefono
            },
            items: carrito,
            createdAt: new Date(),
            total: carrito.reduce((a, v) => a = a + (v.price * v.quantity), 0)
        }
        createNewOrder(order)
    };
    const isFormValid = () => {
        return Boolean(nombre.length) && Boolean(apellido.length) && emailValiDato(email) && Boolean(telefono.length);

    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (


        <div>
            <h2>TOTAL DE LA COMPRA  ${totalCarrito}</h2>
            <Button onClick={handleOpen}>Confirmar Compra</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    
                    <h2>Usuario</h2>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 200, }} >

                        <input type="text" placeholder='Nombre' value={nombre} onChange={(event) => setNombre(event.target.value)} />
                        <input type="text" placeholder='Apellido' value={apellido} onChange={(event) => setApellido(event.target.value)} />
                        <input type="text" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
                        <input type="text" placeholder='Telefono' value={telefono} onChange={(event) => setTelefono(event.target.value)} />

                    </Box>
                    <Box sx={{ marginTop: 5 }} >

                        <Button variant="contained" color="primary" onClick={handleFinalizarCompra} disabled={!isFormValid()}>
                            Finalizar Compra
                        </Button>

                    </Box>

                </Box>
            </Modal>
        </div>
    );
}


export default UserInfo;
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};