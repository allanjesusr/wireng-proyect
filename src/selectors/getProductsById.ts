import data from '../data/data.json';


export const getProductsById = ( id = '' ) => {
    return data.products.find( product => product.id === id );
}

