import { Routes, Route } from 'react-router-dom';

import { AccesoriesScreen } from '../components/products/AccesoriesScreen';
import { AntennasScreen } from '../components/products/AntennasScreen';
import { ProductScreen } from '../components/products/ProductScreen';

export const ProductRoutes = () => {
    return (
        <Routes>

            <Route path="antennas" element={ <AntennasScreen /> }/> 
            <Route path="antennas-accesories" element={ <AccesoriesScreen /> }/> 

        </Routes>
    )
}
