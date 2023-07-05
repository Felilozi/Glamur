
// import React from "react";
// import { ListProducto } from "../../../sdk/productos";
// import ListaElementos from "../../lista-elementos";

// const Conjuntos = () => {
//     const [items, setItem] = React.useState([]);
//     const [loading, setLoading] = React.useState(false);

//     React.useEffect(() => {
//         setLoading(true);
//         ListProducto()

//         .then((respuesta) => {
//             console.log(respuesta);
//             return respuesta.json()})

//         .then((respuesta) => {
//             console.log(respuesta);
//             setItem(respuesta) 
//             console.log(items)  })
//         .catch((err) => {
//             console.error(err);
//             alert("Error de carga");
//             setLoading(false)  })
//         .finally(() => {
//             setLoading(false); })
//     }, [])

//     console.log(items);
//     return (
//         <ListaElementos items={items} loading={loading}/>
//     )
// }

// export default Conjuntos;

