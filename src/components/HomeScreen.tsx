import { Link, useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

import { Helmet } from 'react-helmet';
import { Button, Card, Container } from 'react-bootstrap';

import { testimonials, accesoriesHomeCardContent, antennasHomeCardContent } from '../data';
import { PopupButton, InlineWidget } from 'react-calendly';

export const HomeScreen = () => {

  const navigate = useNavigate();

  const handleProduct = () => {
    navigate('/all-products/antennas');
  }

  const handleAccesories = () => {
    navigate('/all-products/antenna-accesories');
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
        <div className="container-position">
          <div className="header-overlay d-flex ">
            <Container fluid className="p-5">
              <p className="d-flex mb-5" style={{ color: 'black' }}>WirEng® is the only company in the world that designs and manufactures truly ultra-wide band antennas that cover every possible cellular band worldwide.</p>

              <button className="home__products-btn">
                <Link
                  to="/all-products/antennas"
                  className="link"
                >
                  See all WirEng® Products
                </Link>
              </button>
              {/* <PopupButton
                rootElement={document.getElementById('root')}
                url="calendly.com/allan-at-welc-group-co"
                text="Click here to schedule!"
              /> */}

            </Container>
          </div>
          <div style={{
            height: '100%',
          }}>
            <img
              src="https://wirengimages.s3.amazonaws.com/images/homeimages/Home3.jpg"
              alt="image"
              style={{
                width: '100%',
                height: '100%',
              }} />
          </div>
        </div>

        <Container>
          <div className="mt-2 d-flex justify-content-center flex-column" >
            <h1 className='mt-4 mb-5 d-flex justify-content-center' style={{ color: '#004987' }}>Welcome to WirEng®</h1>

            <p style={{
              fontSize: '1.6rem',
              textAlign: 'center',
            }}
            >WirEng® is the world’s leader in ultra-wide band cellular-band antennas that are truly compatible with every possible cellular band in the world today. All WirEng®’s antennas are backward-compatible with past technologies as well, making WirEng® the obvious choice for every possible antenna need application. Since the year 2008, WirEng®’s antennas have been deployed by Fortune 500 companies, government and military entities, large and small telecommunication companies throughout the world, and tens of thousands of consumers around the world.</p>
          </div>
        </Container>

        <Container>
          <div className="home__productsHeader">
            <h1 style={{
              marginTop: '20px',
              color: '#004987',
              fontSize: '2.5rem',
            }} className="mb-3">WirEng® Best Sellers</h1>
            {/* <p style={{
              fontSize: '1.5rem',
            }} className="mb-5">WideAnt2-5G™ True MIMO Dual Antenna for Routers Hotspots Modems Ultra-Wide Band Directional High-Gain Antenna Set 5G/4G/3G/2G 450 to 6000 MHz</p>
            <button className="home__products-btn">
              <Link
                to="/all-products/antennas"
                className="link"
              >
                More
              </Link>
            </button> */}
          </div>

          <div
            className="mb-5"
            style={{
              backgroundColor: '#004987',
              height: '100%',
              width: '100%',
              padding: '2rem',
              borderRadius: '10px',
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
            >
              {
                antennasHomeCardContent.map(({ id, name, description, image }) => (
                  <SwiperSlide key={id}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={image}
                      />
                    </Card>
                    <Card.Body>
                      <Card.Title style={{
                        fontSize: '1.6rem',
                        textAlign: 'center',
                        color: 'white',
                        marginTop: '2rem',
                      }}>{name}</Card.Title>
                      <Card.Text style={{
                        fontSize: '1.3rem',
                        textAlign: 'center',
                        color: 'white',
                        marginTop: '1rem',
                      }}>{description}</Card.Text>
                    </Card.Body>
                    <Card.Body
                      className="mt-3"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Button
                        onClick={handleProduct} className="card__button-size mt-3"
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '1rem',
                          fontSize: '1.3rem',
                        }}><i className="fa-solid fa-arrow-right-long me-2"></i>More Antennas by WirEng®</Button>
                    </Card.Body>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </Container>

        <Container>
          <div className="home__productsHeader">
            <h1 className='mb-5' style={{
              color: '#004987',
              fontSize: '2.5rem',
            }}>Other WirEng® Products</h1>
            {/* <p style={{
              fontSize: '1.5rem',
              textAlign: 'justify',
            }} className="mb-5">The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO(45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger.</p> */}
            {/* <button className="home__products-btn">
              <Link
                to="/all-products/antenna-accesories"
                className="link"
              >
                More
              </Link>
            </button> */}
          </div>

          <div
            style={{
              backgroundColor: '#004987',
              height: '100%',
              width: '100%',
              padding: '2rem',
              borderRadius: '10px',
            }}
            className="mb-5"
          >
            <Swiper
              slidesPerView={1}
              // centeredSlides={true}
              spaceBetween={10}
              // pagination={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
            >
              {
                accesoriesHomeCardContent.map(({ id, name, description, image }) => (
                  <SwiperSlide key={id}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={image}
                      />
                    </Card>
                    <Card.Body>
                      <Card.Title style={{
                        fontSize: '1.6rem',
                        textAlign: 'center',
                        color: 'white',
                        marginTop: '2rem',
                      }}>{name}</Card.Title>
                      <Card.Text style={{
                        fontSize: '1.3rem',
                        textAlign: 'center',
                        color: 'white',
                        marginTop: '1rem',
                      }}>{description}</Card.Text>
                    </Card.Body>
                    <Card.Body
                      className="mt-3"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Button
                        onClick={handleAccesories} className="card__button-size mt-3"
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '1rem',
                          fontSize: '1.3rem',
                        }}><i className="fa-solid fa-arrow-right-long me-2"></i>More Antennas Accesories</Button>
                    </Card.Body>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </Container>

        <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h4 style={{
              color: '#004987',
              fontSize: '2.5rem',
              margin: '0px'
            }}>Schedule a meeting with us now!</h4>
          </div>
          <InlineWidget url="https://calendly.com/wireng" />
        </Container>

        <Container>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination]}
          >

            {
              testimonials.map(({ id, name, date, quote }) => (
                <SwiperSlide key={id}>
                  <figure className="snip1533">
                    <figcaption>
                      <blockquote>
                        <p>{quote}</p>
                      </blockquote>
                      <h3>{name}</h3>
                      <p>{date}</p>
                    </figcaption>
                  </figure>

                </SwiperSlide>
              ))
            }
          </Swiper>
        </Container>
      </div>
    </>

  )
}
