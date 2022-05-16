import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import { ProductsList } from './ProductsList';

export const AccesoriesScreen = () => {

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
{/* 
                <h3>Refine Your Search</h3>
                <hr />

                <div className='d-flex justify-content-evenly mb-5'>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Filter
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Form.Check
                                inline
                                label="coaxial ultra-low loss cables"
                                style={{
                                    color: 'white',
                                }}
                            />
                            <Form.Check
                                inline
                                label="coaxial low loss cables"
                                style={{
                                    color: 'white',
                                }}
                            />
                            <Form.Check
                                inline
                                label="coaxial patch cables"
                                style={{
                                    color: 'white',
                                }}
                            />
                            <Form.Check
                                inline
                                label="coaxial adapter and strain-relief cables"
                                style={{
                                    color: 'white',
                                }}
                            />
                            <Form.Check
                                inline
                                label="antenna-side combiners"
                                style={{
                                    color: 'white',
                                }}
                            />
                            <Form.Check
                                inline
                                label="antenna mounts"
                                style={{
                                    color: 'white',
                                }}
                            />
                            <Form.Check
                                inline
                                label="antenna hardware"
                                style={{
                                    color: 'white',
                                }}
                            />
                            <Form.Check
                                inline
                                label="Lightning-Strike protectors"
                                style={{
                                    color: 'white',
                                }}
                            />
                            <Form.Check
                                inline
                                label="Any"
                                style={{
                                    color: 'white',
                                }}
                            />
                        </Dropdown.Menu>
                    </Dropdown>

                </div> */}

                <ProductsList category="Antenna Accesories" />
            </Container>
        </>
    )
}
