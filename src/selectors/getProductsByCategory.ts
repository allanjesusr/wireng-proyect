import dataList from '../data/data.json';

export const getProductsByCategory = ( category: any ) => {

    const validCategory = ['Antennas', 'Antenna Accesories'];

    if ( !validCategory.includes(category) ) {
        throw new Error(`Invalid category: ${category}`);
    }

    return dataList.products.filter( product => product.category === category );
}