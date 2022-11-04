import dataList from '../data/data.json';

export const getProductsByGain = ( gain: string) => {

    // const validgains = ['Directional', 'Omnidirectional'];

    // if ( !validgains.includes(gain) ) {
    //     throw new Error(`Invalid gain: ${gain}`);
    // }

    return dataList.products.filter( product => product.gain === gain );
    
}