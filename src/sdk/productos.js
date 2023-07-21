
    export const listProducto = (search) => {
        return fetch( `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=32`)
    }
        
    export const idProducto = (id) => {
        return fetch(`https://api.mercadolibre.com/items/${id}`)
    
    }