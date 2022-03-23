import { useState } from 'react';

import { Carousel } from 'react-bootstrap';

import { NavbarComponent } from './ui/NavbarComponent';
import { Footer } from './ui/Footer';

import imgscreen from '../assets/images/HOME-JPEG.jpg';

import imgGrid1 from '../assets/images/grid-images/1.jpeg';
import imgGrid2 from '../assets/images/grid-images/2.jpeg';
import imgGrid3 from '../assets/images/grid-images/3.jpeg';
import imgGrid4 from '../assets/images/grid-images/12.jpeg';


import imgCarousel1 from '../assets/images/grid-images/5.jpeg';
import imgCarousel2 from '../assets/images/grid-images/6.jpeg';
import imgCarousel3 from '../assets/images/grid-images/7.jpeg';
import imgCarousel4 from '../assets/images/grid-images/8.jpeg';
import imgCarousel5 from '../assets/images/grid-images/9.jpeg';
import imgCarousel7 from '../assets/images/grid-images/11.jpeg';





export const HomeScreen = () => {

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

            <div className="leftContent">
              <div className="boxContainer">
                <img src={ imgGrid1 } alt="ImagenGrid1"/>
                <div className="textDescription-content">
                    <h4>Titulo de imagen</h4>
                    <p>Texto de ejemplo</p>
                </div>
              </div>

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
