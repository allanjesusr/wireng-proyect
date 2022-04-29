

import imglogo from '../assets/images/logo/LOGO-VERSION.png';

import imgproduct1 from '../assets/images/products-img/wideant4x4/1.png';
import imgproduct2 from '../assets/images/products-img/wideant4x4/3.png';
import imgproduct3 from '../assets/images/products-img/wideant4x4/4.png';

import imgMimo from '../assets/images/MIMOMount-8x8_02.png';
import imgDroneStar from '../assets/images/DroneAnt16-plus_07.png';
import imgCable from '../assets/images/about/WRG400-SMAM-NM-20M-AU-90Degrade.png';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';




export const HomeScreen = () => {

  const navigate = useNavigate();

  const handleProduct = () =>  {
    navigate('/product/wideant4-plus-5g-4x4');
  }

  return (
    <>
      <Helmet>
        <title> WirEng® - Home </title>
        <meta name="description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
        <meta name="keywords" content="WirEng®, antennas, atennas accesories" />

        <meta property="og:title" content="Home - WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
        <meta property="og:description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas - Home" />
      </Helmet>

      <div className="home__container">
        <div className="home__home-bg">
          <div className="home__headerContainer d-flex justify-content-center align-items-center p-5">
            <p style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'black',
              marginTop: '20px',
              
            }} className="d-flex">WirEng® products enable you to manage modern life, helping you enjoy and easily connect to everything that matters.</p>

            <p style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'black',
              marginTop: '20px',
              
            }} className="d-flex mb-5">WirEng® products are extremely versatile and are available in a number of commercial and industrial applications</p>
            <button className="home__products-btn">
              <Link
                to="/products/antennas"
                className="link"
              >
                See the WirEng® Products
              </Link>
            </button>
          </div>


        </div>


        <div className="home__products-container">
          <div className="home__products-firstBg">
            <Container>

              <div className="home__productsHeader">
                <h1>Products</h1>
                <span style={{
                  fontSize: '1.5rem',
                  color: 'black',
                  marginTop: '20px',
                }} className="mb-1">The most sold wireng antenna</span>
              </div>

              <div className="home__description-content">
                <h3 className='mb-5'>WideAnt4-Plus-5G-4x4</h3>
                <p style={{
                  fontSize: '1.5rem',
                  color: 'black',
                  marginTop: '20px',
                }} className="mb-5 d-flex">The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO(45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger</p>
                <button className="home__products-btn">
                  <Link
                    to="/products/antennas"
                    className="link"
                  >
                    More
                  </Link>
                </button>
              </div>

              <div className="home__Flex-image">
                <img 
                  src={imgproduct1} 
                  alt="image" 
                  style={{
                  cursor: 'pointer',
                  }}
                  onClick={handleProduct}
                />
                <img src={imgproduct2} alt="image" style={{
                  cursor: 'pointer',
                  }}
                  onClick={handleProduct}/>
                <img src={imgproduct3} alt="image" style={{
                  cursor: 'pointer',
                  }}
                  onClick={handleProduct}/>
              </div>
            </Container>
          </div>

          <div className="home__products-secondBg">
            <Container>

              <div className="home__mDescription-container">
                <h3 className='mb-5'>Other products</h3>
                <p style={{
                  fontSize: '1.5rem',
                  color: 'black',
                  marginTop: '20px',
                }} className="mb-5">The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO(45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger</p>
                <button className="home__products-btn">
                  <Link
                    to="/products/antennas-accesories"
                    className="link"
                  >
                    More
                  </Link>
                </button>
              </div>

              <div className="home__Flex-image">
                <img src={imgMimo} alt="image" />
                <img src={imgDroneStar} alt="image" />
                <img src={imgCable} alt="image" />
              </div>
            </Container>
          </div>

          {/* <div className="about__services-container">
          <Container>
            <Row>

              <div
                className="d-flex justify-content-center mt-5 mb-5"
                style={{ color: "white" }}
              >
                <h1>Services</h1>
              </div>

            </Row>

            <Row xs={1} md={2} className="g-4 d-flex justify-content-space-between ">
              <Col className="mb-5">
                <Card >
                  <Card.Img variant="top" src={imgproduct1} alt="image" />
                  <Card.Body>
                    <Card.Title>Custom Product request</Card.Title>
                  </Card.Body>
                  <Button variant="secondary" size="lg">More</Button>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card>
                  <Card.Img variant="top" src={imgproduct1} alt="image" />
                  <Card.Body>
                    <Card.Title>Goverment/military relationships</Card.Title>
                  </Card.Body>
                  <Button variant="secondary" size="lg">More</Button>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card>
                  <Card.Img variant="top" src={imgproduct1} alt="image" />
                  <Card.Body>
                    <Card.Title>B2B Partnerships</Card.Title>
                  </Card.Body>
                  <Button variant="secondary" size="lg">More</Button>
                </Card>
              </Col>

              <Col className="mb-5">
                <Card>
                  <Card.Img variant="top" src={imgproduct1} alt="image" />
                  <Card.Body>
                    <Card.Title>Custom Product request</Card.Title>
                  </Card.Body>
                  <Button variant="secondary" size="lg">More</Button>
                </Card>
              </Col>
            </Row> */}

          {/* <div className="about__servicesFlex">
            <div className="about__servicesContent">
              <div className="about__servicesImageContent">

              </div>
              <p> Custom Product request </p>
            </div>
            <div className="about__servicesContent">
              <div className="about__servicesImageContent">

              </div>
              <p>Goverment/military relationships</p>
            </div>
            <div className="about__servicesContent">
              <div className="about__servicesImageContent">

              </div>
              <p>B2B/OEM relations</p>
            </div>
            <div className="about__servicesContent">
              <div className="about__servicesImageContent">

              </div>
              <p>B2B Partnerships</p>
            </div>
          </div> */}
          {/* </Container>
        </div> */}

          <div className="about__lastContainer">
            <Container>
              <div className="d-flex justify-content-center">
                <h1 className="mt-5  mb-5">Latest New</h1>
              </div>

              <Row xs={1} lg={2}>
                <Col className="mb-5">
                  <Card>
                    <Card.Img variant="top" src={imgproduct1} alt="image" />
                    <Card.Body>
                      <Card.Title>Upcoming Models</Card.Title>
                      <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="mb-5">
                  <Card>
                    <Card.Img variant="top" src={imgproduct1} alt="image" />
                    <Card.Body>
                      <Card.Title>Upcoming Models</Card.Title>
                      <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>

              {/* <div className="about__lastFlexContainer">
                <div className="about__last-imageContainer"></div>
                <div className="about__last-textContainer">
                  <h3>Upcoming Models</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
                </div>
                <div className="about__last-imageContainer"></div>
                <div className="about__last-textContainer">
                  <h3>Upcoming Models</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
                </div>
              </div> */}
            </Container>

          </div>





        </div>
      </div>
    </>

  )
}
