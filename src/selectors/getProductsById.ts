import data from '../data/data.json';


export const getProductsById = ( id = '' ) => {
    console.log('getProductsById Called');
    return data.products.find( product => product.id === id );
}

