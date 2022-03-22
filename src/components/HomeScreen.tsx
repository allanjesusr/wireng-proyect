import { Carousel } from 'react-bootstrap';
import { NavbarComponent } from './ui/NavbarComponent';

import { Footer } from './ui/Footer';

import imgscreen from '../assets/images/HOME-JPEG.jpg';

import imgGrid1 from '../assets/images/grid-images/WIRENG WEB-05.png';
import imgGrid2 from '../assets/images/grid-images/WIRENG WEB-03.png';
import imgGrid3 from '../assets/images/grid-images/WIRENG WEB-04.png';

import imgCarousel1 from '../assets/images/wideant2-plus-5g_by_wireng_09.jpg';
import imgCarousel2 from '../assets/images/wideant2-plus-5g_by_wireng_10.jpg';
import imgCarousel3 from '../assets/images/wideant2-plus-5g_by_wireng_13.jpg';



export const HomeScreen = () => {

  // const handleImage = () => {

  //     React.createElement('IMG', { loading: "lazy", src: {imgGrid1}, alt: "imagen", className: "imageSize" }, null);

  //     const overlay = React.createElement('DIV', { className: "imageOverlay" }, null );

  //     const main = document.querySelector('#root');
  //     main?.appendChild(overlay);

  // }

    return (
      <>
        <NavbarComponent />
      
        <div className="home__container">
          {/* <div className="home__overlay">
            <div className="home__text-content">
              <span>WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas</span>
            </div>
          </div> */}
          <div className="home__image-container">
            <img src={ imgscreen } alt="Imagen Screen" />
          </div>
        </div>

        <div className="home__grid-header-content">
          <h1>Discover WirEng®</h1>
        </div>

        <div className="home__discover-container">
          <div className="home__principal-flex-content">
            <div>
              <div className="leftContent">
                <div className="leftImage">
                  <img src={ imgGrid1 } alt="ImagenGrid1"/>
                </div>
                <div className="textContent">
                    <h4>Titulo de imagen</h4>
                    <p>Texto de ejemplo</p>
                </div>
              </div>

              <div className="leftContent">
                <div className="leftImage">
                  <img src={ imgGrid1 } alt="ImagenGrid1" />
                </div>
                <div>
                    <h4>Titulo de imagen</h4>
                    <p>Texto de ejemplo</p>
                </div>
              </div>

            </div>

            <div>
              
              <div>
                <article className="home__second-grid-content">
                  <img src={ imgGrid2 } alt="ImagenGrid2" />
                  <div className="home__grid-text-content">
                    <h4>Titulo de imagen</h4>
                    <p>Texto de ejemplo</p>
                  </div>
                </article>
              </div>

              <div className="third-grid">
                <article className="home__third-grid-content">
                  <img src={ imgGrid3 } alt="ImagenGrid3" />
                  <div className="home__grid-text-content"> 
                    <h4>Titulo de imagen</h4>
                    <p>Texto de ejemplo</p>
                  </div>
                </article>
              </div>

            </div>
          </div>
        </div>

        {/* GRID RESPONSIVE */}

        {/* <div className="home__mobileGroup">
          <section className="home__mobileGroup home__module-separator wrapper home__mobileGroup-ready">
            <h1 className="home__mobileGroup-header">Discover WirEng</h1>
            <div className="slider home__mobileGroup-slider home__mobileGroup-list">
              <button className="home__sliderButton prevButton home__sliderButton-hide-small home__sliderButton-disabled">
                <span className="offscreen"></span>
              </button>

              <button className="home__sliderButton nextButton home__sliderButton-hide-small home__sliderButton-disabled">
                <span className="offscreen"></span>
              </button>

              <ul className="home__mobileSliderList-container home__sliderList-container-noScroll">
                <li className="home__mobileGroup-item slider-item home__slider-item-active">
                  <a>
                    <picture>

                    </picture>

                    <div>
                      <div>
                        <h2>

                        </h2>
                        <p></p>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a>
                    <picture>

                    </picture>

                    <div>
                      <div>
                        <h2>

                        </h2>
                        <p></p>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a>
                    <picture>

                    </picture>

                    <div>
                      <div>
                        <h2>

                        </h2>
                        <p></p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div> */}

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
