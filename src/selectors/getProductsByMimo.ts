import dataList from '../data/data.json';

export const getProductsByMimo = ( mimo: string) => {

    // const validmimos = ['Directional', 'Omnidirectional'];

    // if ( !validmimos.includes(mimo) ) {
    //     throw new Error(`Invalid mimo: ${mimo}`);
    // }

    return dataList.products.filter( product => product.mimo === mimo );
    
}