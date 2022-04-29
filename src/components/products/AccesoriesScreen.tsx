
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { ProductsList } from './ProductsList';

export const AccesoriesScreen = () => {

    // const title = 'Antennas Accesories by WirEng®';
    // useSEO({ title });

    return (
        <>
            <Helmet>
                <title>Antennas Accesories by WirEng® | WirEng®</title>
                <meta name="description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
                <meta name="keywords" content="WirEng®, antennas, atennas accesories" />

                <meta property="og:title" content="Antennas Accesories by WirEng® | WirEng®" />
                <meta property="og:description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
            </Helmet>
            <Container>

                <div className="d-flex justify-content-center mt-5 mb-5">

                    <h1>Antenna Accesories by WirEng®</h1>

                </div>

                <ProductsList category="Antenna Accesories" />
            </Container>
        </>
    )
}
