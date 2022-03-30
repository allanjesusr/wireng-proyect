

import { Carousel } from 'react-bootstrap';

import { NavbarComponent } from './ui/NavbarComponent';
import { Footer } from './ui/Footer';

import imglogo from '../assets/images/logo/LOGO-VERSION.png';

import imgproduct1 from '../assets/images/products-img/wideant4x4/1.png';
import imgproduct2 from '../assets/images/products-img/wideant4x4/3.png';
import imgproduct3 from '../assets/images/products-img/wideant4x4/4.png';

import imgMimo  from '../assets/images/MIMOMount-8x8_02.png';
import imgDroneStar from '../assets/images/DroneAnt16-plus_07.png';
import imgCable from '../assets/images/about/WRG400-SMAM-NM-20M-AU-90Degrade.png';




export const HomeScreen = () => {

    return (
      <>
        <NavbarComponent />
      
        <div className="home__container">
          <div className="home__home-bg">
            <div className="home__headerContainer">
              <img src={ imglogo } alt="HomeLogo" />
              <p>The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO (45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger </p>
            </div>

            <div className="home__container">
              <img src="" alt="imagen" />
            </div>

          </div>

          <div className="about__services-container">
            <div className="about__servicesHeader">
              <h1>Services</h1>
            </div>

            <div className="about__servicesFlex">
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
            </div>
          </div>

          <div className="about__lastContainer">
            <div className="about__lastHeader">
              <h1>Latest New</h1>
            </div>
            
            <div className="about__lastFlexContainer">
              <div className="about__last-imageContainer"></div>
              <div className="about__last-textContainer">
                <h3>Coming Models</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
              </div>

              <div className="about__last-imageContainer"></div>
              <div className="about__last-textContainer">
                <h3>Coming Models</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
              </div>
              <div className="about__last-imageContainer"></div>
              <div className="about__last-textContainer">
                <h3>Coming Models</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
              </div>
              <div className="about__last-imageContainer"></div>
              <div className="about__last-textContainer">
                <h3>Coming Models</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
              </div>
            </div>
          </div>

          <div className="home__products-container">
            <div className="home__products-firstBg">
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
                <img src={ imgproduct1 } alt="image"/>
                <img src={ imgproduct2 } alt="image"/>
                <img src={ imgproduct3 } alt="image"/>
              </div>
            </div>

            <div className="home__products-secondBg">
              <div className="home__mDescription-container">
                <h3>Other products</h3>
                <p>The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO(45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger</p>
                <button className="home__products-btn">
                  More
                </button>
              </div>

              <div className="home__Flex-image">
                <img src={ imgMimo } alt="image"/>
                <img src={ imgDroneStar } alt="image"/>
                <img src={imgCable} alt="image"/>
              </div>
              

              {/* <div className="home__op-secondFlex">
                <div className="home__sImage-container">
                  <img src={ imgDroneStar } alt="image"/>
                </div>
                <div className="home__tImage-container">
                  <img src={imgCable} alt="image"/>
                </div>
              </div> */}
            </div>

          </div>

          
          {/* <div className="home__overlay">
            <div className="home__image-container">
              <img src={ imgscreen } alt="Imagen Screen" />
            </div>
            <div className="home__text-content">
              <span>WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas</span>
            </div>
          </div> */}





          
        </div>

        {/* <div className="home__grid-header-content">
          <h1>Discover WirEng®</h1>
        </div> */}

        {/* <div className="home__discover-container">
          <div className="home__principal-flex-content">

            <div className="leftContent">
              <div className="boxContainer">
                <img src={ imgGrid1 } alt="ImagenGrid1"/>
                <div className="textDescription-content">
                    <h4>Titulo de imagen</h4>
                    <p>Texto de ejemplo</p>
                </div>
              </div> */}
{/* 
              <div className="boxContainer">
                <img src={ imgGrid4 } alt="ImagenGrid4" />
                <div>
                    <h4>Titulo de imagen</h4>
                    <p>Texto de ejemplo</p>
                </div>
              </div>

            </div>

            <div className="rightContent">

              <div className="boxContainer">
                <img src={ imgGrid2 } alt="ImagenGrid2" />
                <div className="home__grid-text-content">
                  <h4>Titulo de imagen</h4>
                  <p>Texto de ejemplo</p>
                </div>
              </div>

              <div className="boxContainer">
                <img src={ imgGrid3 } alt="ImagenGrid3" />
                <div className="home__grid-text-content"> 
                  <h4>Titulo de imagen</h4>
                  <p>Texto de ejemplo</p>
                </div>
              </div>

            </div>

          </div>
        </div>

            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ imgCarousel4 }
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ imgCarousel5 }
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ imgCarousel7 }
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ imgCarousel1 }
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ imgCarousel2 }
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ imgCarousel3 }
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
            <Footer />
      </>

    )
}
