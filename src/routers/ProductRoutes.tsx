import { Routes, Route } from 'react-router-dom';

import { AccesoriesScreen } from '../components/products/AccesoriesScreen';
import { AntennasScreen } from '../components/products/AntennasScreen';

export const ProductRoutes = () => {
    return (
        <Routes>

            <Route path="antennas" element={ <AntennasScreen /> }/> 
            <Route path="antenna-accesories" element={ <AccesoriesScreen /> }/> 

        </Routes>
    )
}
