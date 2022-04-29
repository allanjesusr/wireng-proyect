import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import { ProductsList } from './ProductsList';


export const AntennasScreen = () => {

    return (
        <>
            <Helmet>
                <title>Antennas by WirEng® | WirEng®</title>
                <meta name="description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
                <meta name="keywords" content="WirEng®, antennas, atennas accesories" />

                <meta property="og:title" content="Antennas by WirEng® | WirEng®" />
                <meta property="og:description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
            </Helmet>
            <Container>
                <div className="d-flex justify-content-center mt-5 mb-5">

                    <h1>Antennas by WirEng®</h1>

                </div>
                <ProductsList category="Antennas" />
            </Container>

        </>
    )
}
