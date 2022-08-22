import { Helmet } from 'react-helmet';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { locator } from '../../data';

export const DealerLocator = () => {
    return (
        <>
            <Helmet>
                <title>WirEng® Dealer Locator | WirEng® </title>
                <meta name="description" content='WirEng® Dealer Locator' />
                <meta name="keywords" content='WirEng® Dealer Locator antennas, atennas accesories | WirEng® ' />

                <meta property="og:title" content=' WirEng® Dealer Locator | WirEng®  ' />
                <meta property="og:description" content=' WirEng® Dealer Locator | WirEng® ' />
            </Helmet>
            <Container>
                <div className='mt-5 d-flex flex-column justify-content-center align-items-center mb-5'>
                    <h1
                        className='mb-4'
                        style={{
                            color: '#004987',
                            fontSize: '2.5rem',
                            textAlign: 'center',
                        }}
                    >WirEng® Dealer Locator</h1>
                    <p style={{
                        fontSize: '1.6rem',
                        textAlign: 'center'
                    }}>All WirEng® Producs Are Designed In The United States of America and Manufactured In Many Continents, Including North America, South America, Asia, and Europe.</p>
                </div>

                <Row style={{
                    height: '100px',
                }}></Row>

                {
                    locator.map(({ id, name, website, map, description }) => (
                        <Row key={id} xs={1} className="mb-5 g-4" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Col sm={12} xl={6} className="locator__image-container">
                                <img
                                    src={map}
                                    alt={name}

                                />
                            </Col>

                            <Col sm={12} xl={6} style={{
                                height: '280px',
                                backgroundColor: '#f0ecec',
                                borderRadius: '5px',
                                padding: '1.5rem',
                                justifyContent: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}>
                                    <h3 className="mb-4" style={{
                                        margin: '0',
                                        fontSize: '2.2rem',
                                        color: '#014886',
                                    }}>{name}</h3>
                                    <p style={{
                                        fontSize: '1.4rem',
                                    }}>{description}</p>

                                </div>
                                <Button
                                    variant="secondary"
                                    href={website}
                                    className="mt-3"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center ',
                                        alignItems: 'center',
                                        fontSize: '1.2rem',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    <i className="fa-solid fa-arrow-right-long me-2"></i>Visit Now
                                </Button>
                            </Col>

                            <Col style={{
                                height: '100px',
                            }}>
                            </Col>

                        </Row>
                    ))
                }
            </Container>
        </>
    )
}
