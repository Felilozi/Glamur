// import React from 'react';
// import { Button, Snackbar } from '@mui/material';

// const FinalizarCarrito = () => {
//     const [openAlert, setOpenAlert] = React.useState(false);

//     const handleFinalizarCompra = () => {
//         setOpenAlert(true);

//         // Cierra la alerta después de 3 segundos (3000 ms)
    //     setTimeout(() => {
    //         setOpenAlert(false);
    //     }, 3000);
    // };

//     return (
//         <div>
//             <Button variant="contained" color="primary" onClick={handleFinalizarCompra}>
//                 Finalizar Compra
//             </Button>

//             <Snackbar
//                 open={openAlert}
//                 autoHideDuration={3000}
//                 onClose={() => setOpenAlert(false)}
//                 message="Has finalizado la compra"
//             />
//         </div>
//     );
// };

// export default FinalizarCarrito;