import { Container } from 'react-bootstrap';
import { useSEO } from '../../hooks/useSEO';

import { ProductsList } from './ProductsList';


export const AntennasScreen = () => {

    const title = 'Antennas by WirEng®';
    useSEO({ title });

    return (
        <Container>
            <div className="d-flex justify-content-center mt-5 mb-5">

                <h1>Antennas by WirEng®</h1>

            </div>
            <ProductsList category="Antennas" />
        </Container>
    )
}
