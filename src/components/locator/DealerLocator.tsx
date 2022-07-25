import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

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
                <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                    <h1 
                        className='mb-4'
                        style={{
                            color: '#004987',
                            fontSize: '2.5rem',
                        }}   
                    >WirEng® Dealer Locator</h1>
                    <p style={{
                        fontSize: '1.6rem',
                        textAlign: 'center'
                    }}>All WirEng® Producs Are Designed In The United States of America and Manufactured In Many Continents, Including North America, South America, Asia, and Europe.</p>
                </div>

                <div >
                    <img 
                        src="https://wirengimages.s3.amazonaws.com/images/locator/LOCATOR-08.jpg"
                        alt="image"
                        style={{
                            width: '100%',
                            height: '100vh',
                        }}
                    />
                </div>
            </Container>
        </>
    )
}
