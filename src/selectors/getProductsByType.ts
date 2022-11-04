import dataList from '../data/data.json';

export const getProductsByType = ( type: string) => {

    // const validTypes = ['Directional', 'Omnidirectional'];

    // if ( !validTypes.includes(type) ) {
    //     throw new Error(`Invalid type: ${type}`);
    // }

    return dataList.products.filter( product => product.type === type );
    
}