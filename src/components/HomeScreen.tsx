import { Link, useNavigate } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export const HomeScreen = () => {

  const navigate = useNavigate();

  const handleProduct = () => {
    navigate('/products/wideant4-plus-5g-4x4');
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
              <p className="d-flex mb-5" style={{ color: 'white' }}>WirEng® products are extremely versatile and are available in a number of commercial and industrial applications.</p>

              <button className="home__products-btn">
                <Link
                  to="/products/antennas"
                  className="link"
                >
                  See all WirEng® Products
                </Link>
              </button>

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
            <h1 className='mt-2 mb-5 d-flex justify-content-center'>Welcome to WirEng®</h1>

            <p style={{
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
            >WirEng® is the world’s leader in ultra-wide band cellular-band antennas that are truly compatible with every possible cellular band in the world today. All WirEng®’s antennas are backward-compatible with past technologies as well, making WirEng® the obvious choice for every possible antenna need application. Since the year 2008, WirEng®’s antennas have been deployed by Fortune 500 companies, government and military entities, large and small telecommunication companies throughout the world, and tens of thousands of consumers around the world.</p>

          </div>
        </Container>

        <Container>
          <div className="home__productsHeader">
            <h1 style={{
              marginTop: '20px',
            }} className="mb-3">WirEng® Best seller Antenna</h1>
            <h3 className='mb-4'>WideAnt4-Plus-5G-4x4</h3>
            <p style={{
              fontSize: '1.5rem',
              textAlign: 'center',
            }} className="mb-5">The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO(45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger.</p>
            <button className="home__products-btn">
              <Link
                to="/all-products/antennas"
                className="link"
              >
                More
              </Link>
            </button>
          </div>

          <div className="home__Flex-image">
            <img
              src="https://wirengimages.s3.amazonaws.com/images/homeimages/wideant4-5g-4x2_by_wireng_02.jpg"
              alt="image"
              style={{
                cursor: 'pointer',
              }}
              onClick={handleProduct}
            />
            <img
              src="https://wirengimages.s3.amazonaws.com/images/homeimages/wideant4-5g-4x2_by_wireng_03.jpg"
              alt="image"
              style={{
                cursor: 'pointer',
              }}
              onClick={handleProduct} />
            <img
              src="https://wirengimages.s3.amazonaws.com/images/homeimages/wideant4-5g-4x2_by_wireng_07.jpg"
              alt="image"
              style={{
                cursor: 'pointer',
              }}
              onClick={handleProduct} />
          </div>
        </Container>

        <Container>
          <div className="home__productsHeader">
            <h1 className='mb-5'>Other WirEng® Products</h1>
            <p style={{
              fontSize: '1.5rem',
              textAlign: 'center',
            }} className="mb-5">The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO(45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger.</p>
            <button className="home__products-btn">
              <Link
                to="/all-products/antenna-accesories"
                className="link"
              >
                More
              </Link>
            </button>
          </div>

          <div className="home__Flex-image">
            <img
              src="https://wirengimages.s3.amazonaws.com/images/homeimages/mimomount8_by_wireng_04.jpg"
              alt="image"
              className='pointer'
              onClick={handleAccesories}
            />
            <img
              src="https://wirengimages.s3.amazonaws.com/images/homeimages/gigamimo16-5g-2x2.jpg"
              alt="image"
              className='pointer'
              onClick={handleAccesories}
            />
            <img
              src="https://wirengimages.s3.amazonaws.com/images/homeimages/wrg400-smam-ranm-20m_by_wireng_03.jpg"
              alt="image"
              className='pointer'
              onClick={handleAccesories}
            />
          </div>
        </Container>
      </div>
    </>

  )
}
