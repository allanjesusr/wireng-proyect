import dataList from '../data/data.json';

export const getProductsByUsage = ( usage: string[]) => {

    // const validUsages = ['Directional', 'Omnidirectional'];

    // if ( !validUsages.includes(usage) ) {
    //     throw new Error(`Invalid usage: ${usage}`);
    // }

    return dataList.products.filter( product => product.usage === usage );
    
}