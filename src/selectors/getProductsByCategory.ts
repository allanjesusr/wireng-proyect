import dataList from '../data/data.json';

export const getProductsByCategory = ( category: string) => {

    const validCategory = ['Antennas', 'Antenna Accesories'];

    if ( !validCategory.includes(category) ) {
        throw new Error(`Invalid category: ${category}`);
    }

    return dataList.products.filter( product => product.category === category );
    
    // let productos: any[] = [];

    // if ( types.length > 0 ) {
    //     productos = productos.concat( products.filter( product => types.includes(product.type) ) );
    // } else {
    //     productos = productos.concat( products );
    // }


    // if(  types.length == 0  && mimo.length == 0 && usage.length == 0 && gain.length == 0 ) {
    //     productos = products;
    // }

    //     productos.push( ...products.filter( product => {
    //         if( ( types.length > 0 ) ? types.includes(product.type as string) : true && ( mimo.length > 0 ) ? mimo.includes(product.mimo as string) : true && ( usage.length > 0 ) ? usage.includes(product.usage as string) : true && ( gain.length > 0 ) ? gain.includes(product.gain as string) : true ) {
    //             return product;
    //         }
    //     } ))

    // return productos;
}