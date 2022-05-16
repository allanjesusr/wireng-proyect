import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import locator from '../../assets/images/locator/LOCATOR-08.jpg';


export const DealerLocator = () => {
    return (
        <>
            <Helmet>
                <title>WirEng® Dealer Locator | WirEng® </title>
                <meta name="description" content='WirEng® Dealer Locator'/>
                <meta name="keywords" content='WirEng® Dealer Locator antennas, atennas accesories | WirEng® ' />

                <meta property="og:title" content=' WirEng® Dealer Locator | WirEng®  '/>
                <meta property="og:description" content=' WirEng® Dealer Locator | WirEng® ' />
            </Helmet>
            <Container>
                <div className='mt-5 d-flex justify-content-center'>
                    <h1>WirEng® Dealer Locator</h1>
                </div>

                <div >
                    <img 
                        src={locator}
                        alt="image"
                        style={{
                            width: '100%',
                            height: '800px',
                        }}
                    />
                </div>
            </Container>
        </>
    )
}
