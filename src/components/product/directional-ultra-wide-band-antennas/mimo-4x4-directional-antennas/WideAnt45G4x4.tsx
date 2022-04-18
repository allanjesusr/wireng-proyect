import { NavbarComponent } from '../../../ui/NavbarComponent';
import { Footer } from '../../../ui/Footer';
import { Carousel } from 'react-bootstrap';

import img1 from '../../../../assets/images/products-img/wideant4x4/1.png';
import img2 from '../../../../assets/images/products-img/wideant4x4/2.png';
import img3 from '../../../../assets/images/products-img/wideant4x4/3.png';
import img4 from '../../../../assets/images/products-img/wideant4x4/4.png';
import img5 from '../../../../assets/images/products-img/wideant4x4/5.png';

import mech1 from '../../../../assets/images/products-img/wideant4x4/mech-images/WideAnt4-Plus-5G-4x4-01.png';
import mech2 from '../../../../assets/images/products-img/wideant4x4/mech-images/WideAnt4-Plus-5G-4x4-02.png';
import mech3 from '../../../../assets/images/products-img/wideant4x4/mech-images/WideAnt4-Plus-5G-4x4-03.png';
import mech4 from '../../../../assets/images/products-img/wideant4x4/mech-images/WideAnt4-Plus-5G-4x4-04.png';


export const WideAnt45G4x4 = () => {
    return (
      <div>
        <NavbarComponent />
        <div className="product__container">
          <div className="product__mainFtbg">
            <div className="product__header">
              <div className="product__headerTitle">
                <h1>
                  WideAnt4-Plus-5G-4x4™
                </h1>
                <p>Ultra-Wide Extended Band, High Gain, Directional</p>
                <div className="product__headerDescription">
                  <p>The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO (45° clockwise and 45° counter-clockwise wave polarizations), fully en-closed, all-weather, ultra-linear, larger Quad Antenna for outdoor/pole/mast installations. The WideAnt4-5G™ represents a true technological breakthrough as one of the widest-band antennas in the world as of today. The WideAnt4-Plus-5G™ can be used with a variety of 5G, 4G, 3G, and 2G radio equipment systems, including MIMO modems</p>
                </div>
              </div>
            </div>

              <div className="product__content">
                <div className="product__contentHeader">
                  <div className="product__mainFtTitle">
                      <h1>Main Features</h1>
                  </div>
                </div>

                <div className="product__mainFt-content">

                  <div className="product__listFt-left">
                    <ul className="product__listLeft">
                      <li className="product__firstItem-left">Directional, Ultra-Wide-Extended Band, and High Gain</li>
                      <li className="product__secondItem-left">Fully enclosed, robust, and durable, under any weather condition</li>
                      <li className="product__thridItem-left">Unparalleled worldwide cellular bands compatibility for countless applications, including cellular legacy, cellular data, 5G, 4G, LTE, xLTE, WiMAX, etc</li>
                      <li className="product__seventhItem-left">Sealed and splash-proof (also suitable for marine environments)</li>
                      <li className="product__fourthItem-left">Anti-UV treated thick, high quality ABS radomes</li>
                      <li className="product__fifthItem-left">Stanless steel back shield for better gain and mechanical strength</li>
                      <li className="product__sixthItem-left">MIMO 4x4 with optimally predeterminedhorizontal and vertical spacing</li>
                    </ul>
                  </div>

                  <div className="product__containerCrsl">
                    <div className="product__imageCrsl">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={ img1 }
                            alt="First slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={ img2 }
                            alt="Second slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={ img3 }
                            alt="Third slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={ img4 }
                            alt="Third slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={ img5 }
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                    <div className="product__listFt-right">
                      <ul>
                        <li className="product__firstItem-right">24K gold plated N-type connectors on radomes and stainless steel back shielding</li>
                        <li className="product__secondItem-right">True MIMO 4x4 cross polarization with provided stainless steel arms</li>
                        <li className="product__thrirdItem-right">Ultra-high effciency and ultra-low VSWR from 450 MHz to 6200 MHz</li>
                        <li className="product__fourthItem-right">Marine-grade stainless steel brackets for V/V, H/V, H/H, and +/-45° Polarization</li>
                        <li className="product__fifthItem-right">IP67 rating (protected against dust, strong water jets, and waves)</li>
                        <li className="product__sixthItem-right">USA and international trademarks current</li>
                        <li className="product__seventhItem-right">Extended operating temperature range of -25° to +85° C</li>
                      </ul>
                    </div>
                </div>
              </div>

            </div>


            <div className="product__techSp-container">
              <div className="product__techHeader">
                <div className="product__techTitle">
                  <h1>Technical Specifications</h1>
                </div>
              </div>

              <div className="product__techSpcf-table">
                <div className="product__tableRow">
                    <div className="product__techSpcf-cell">
                      <div className="product__titleCell">Parameter</div>
                      <ul className="techCol-bg">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  
                  <div className="product__spaceColInner"></div>

                  <div className="product__techSpcf-cell">
                    <div className="product__titleCell">Unit</div>
                      <ul className="techCol-bg">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  <div className="product__spaceColInner"></div>

                  <div className="product__techSpcf-cell">
                    <div className="product__titleCell">Value</div>
                      <ul className="techCol-bg">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                  </div>
                  <div className="product__spaceColInner"></div>

                  <div className="product__techSpcf-cell">
                    <div className="product__titleCell">Description</div>
                      <ul className="techCol-bg">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>

            <div className="product__mechaSpcf-container">
              <div className="product__mechaHeader">
                <div className="product__mechaTitle">
                  <h1>Mechanical Specifications</h1>
                </div>
              </div>

              <div className="product__mechaDescription">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut omnis numquam molestias ratione dolorem iusto beatae possimus, deleniti nesciunt eius et mollitia voluptatum, unde temporibus! Ea qui dicta eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur perferendis, iusto fugit animi rem quasi facere doloribus vel suscipit nesciunt dolorem numquam debitis molestiae, necessitatibus exercitationem. Ipsum, iste nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, maxime! Ipsum delectus dolore fugit dicta necessitatibus deleniti voluptatum iste tempora quidem laboriosam, illo beatae excepturi, tenetur debitis amet nisi ab?</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta optio temporibus aperiam eos a facere similique fugiat qui ad pariatur veritatis iure libero, ullam earum quod natus blanditiis nostrum doloremque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, necessitatibus doloribus qui nobis aliquam laboriosam debitis numquam repudiandae ratione? Itaque nemo velit praesentium consequatur sint impedit odit cumque recusandae. Assumenda.</span>
              </div>

              <div className="product__mechaImage-container">
                <div className="product__mechaImage-col">
                  <div>
                    <img src={ mech1 }/>
                  </div>
                  <div>
                    <img src={ mech2 }/>
                  </div>

                </div>

                <div className="product__mechaImage-col">
                  <div>
                    <img src={ mech3 }/>
                  </div>
                  <div>
                    <img src={ mech4 }/>
                  </div>
                </div>

              </div>

            </div>

          </div>

        <Footer />
      </div>
    )
}
