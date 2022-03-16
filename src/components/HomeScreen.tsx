import { Carousel } from 'react-bootstrap';
import { NavbarComponent } from './ui/NavbarComponent';

import { Footer } from './ui/Footer';

import imgscreen from '../assets/images/wideant2-plus-5g_by_wireng_004.jpg';
import imgGrid1 from '../assets/images/grid-images/DroneAnt16-plus_05.png';
import imgGrid2 from '../assets/images/grid-images/wideant-plus-5g_08.png';
import imgGrid3 from '../assets/images/grid-images/wideant2-plus-5g_by_wireng_07.jpg';
import imgCarousel1 from '../assets/images/wideant2-plus-5g_by_wireng_09.jpg';
import imgCarousel2 from '../assets/images/wideant2-plus-5g_by_wireng_10.jpg';
import imgCarousel3 from '../assets/images/wideant2-plus-5g_by_wireng_13.jpg';



export const HomeScreen = () => {
    return (
      <>
        <NavbarComponent />
      
        <div className="home__container">
          <div className="home__overlay">
            <div className="home__text-content">
              <span>WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas</span>
            </div>
          </div>
          <div className="home__image-container">
            <img src={ imgscreen } alt="Imagen Screen" />
          </div>
        </div>

        <div className="home__grid-header-content">
          <h1>Discover WirEng®</h1>
        </div>

        <div className="home__principal-grid-content">

          <article className="home__first-grid-content">
            <img src={ imgGrid1 } alt="ImagenGrid1" />
            <div className="home__grid-text-content">
              <h4>Titulo de imagen</h4>
              <p>Texto de ejemplo</p>
            </div>
          </article>
          
          <article className="home__second-grid-content">
            <img src={ imgGrid2 } alt="ImagenGrid2" />
            <div className="home__grid-text-content">
              <h4>Titulo de imagen</h4>
              <p>Texto de ejemplo</p>
            </div>
          </article>

          <article className="home__thirst-grid-content">
            <img src={ imgGrid3 } alt="ImagenGrid3" />
            <div className="home__grid-text-content"> 
              <h4>Titulo de imagen</h4>
              <p>Texto de ejemplo</p>
            </div>
          </article>
        </div>

        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ imgCarousel1 }
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ imgCarousel2 }
              alt="Second slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ imgCarousel3 }
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
            <Footer />
      </>

    )
}
