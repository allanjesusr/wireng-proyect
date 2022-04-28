

import imglogo from '../assets/images/logo/LOGO-VERSION.png';

import imgproduct1 from '../assets/images/products-img/wideant4x4/1.png';
import imgproduct2 from '../assets/images/products-img/wideant4x4/3.png';
import imgproduct3 from '../assets/images/products-img/wideant4x4/4.png';

import imgMimo from '../assets/images/MIMOMount-8x8_02.png';
import imgDroneStar from '../assets/images/DroneAnt16-plus_07.png';
import imgCable from '../assets/images/about/WRG400-SMAM-NM-20M-AU-90Degrade.png';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';




export const HomeScreen = () => {

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
          <div className="home__headerContainer">
            <img src={imglogo} alt="HomeLogo" />
            <p>The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO (45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger </p>
          </div>

        </div>

        <div className="about__services-container">
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
            </Row>

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
          </Container>
        </div>

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


        <div className="home__products-container">
          <div className="home__products-firstBg">
            <Container>

              <div className="home__productsHeader">
                <h1>Products</h1>
                <span>The most sold wireng antenna</span>
              </div>

              <div className="home__description-content">
                <h3>WideAnt4-Plus-5G-4x4</h3>
                <p>The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO(45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger</p>
                <button className="home__products-btn">More</button>
              </div>

              <div className="home__Flex-image">
                <img src={imgproduct1} alt="image" />
                <img src={imgproduct2} alt="image" />
                <img src={imgproduct3} alt="image" />
              </div>
            </Container>
          </div>

          <div className="home__products-secondBg">
            <Container>

              <div className="home__mDescription-container">
                <h3>Other products</h3>
                <p>The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO(45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger</p>
                <button className="home__products-btn">
                  More
                </button>
              </div>

              <div className="home__Flex-image">
                <img src={imgMimo} alt="image" />
                <img src={imgDroneStar} alt="image" />
                <img src={imgCable} alt="image" />
              </div>
            </Container>
          </div>


        </div>
      </div>
    </>

  )
}
