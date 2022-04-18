import data from '../data/data.json'


export const getProductsByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLowerCase();
    return data.products.filter( product => product.name.toLowerCase().includes( name ) );

}