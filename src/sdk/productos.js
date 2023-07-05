
    export const listProducto = (search) => {
        return fetch( `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=32`)
    }
        
    export const idProducto = (value) => {
        return fetch(`https://api.mercadolibre.com/items/${value}`)
    
    }