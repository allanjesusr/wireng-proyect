import dataList from '../data/data.json';

export const getProductsByCategory = ( category: string) => {

    const validCategory = ['Antennas', 'Antenna Accesories'];

    if ( !validCategory.includes(category) ) {
        throw new Error(`Invalid category: ${category}`);
    }

    return dataList.products.filter( product => product.category === category );
    
}