import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Helmet } from "react-helmet";
import { Carousel, Container, Table } from 'react-bootstrap';

import { getProductsById } from '../../selectors/getProductsById';
import { NotFound } from '../not-found/NotFound';

// import mech1 from '../../assets/images/products-img/wideant4x4/mech-images/WideAnt4-Plus-5G-4x4-01.png';
// import mech2 from '../../assets/images/products-img/wideant4x4/mech-images/WideAnt4-Plus-5G-4x4-02.png';
// import mech3 from '../../assets/images/products-img/wideant4x4/mech-images/WideAnt4-Plus-5G-4x4-03.png';
// import mech4 from '../../assets/images/products-img/wideant4x4/mech-images/WideAnt4-Plus-5G-4x4-04.png';

export const ProductScreen = () => {


    const { productId } = useParams();

    const product = useMemo(() => getProductsById(productId), [productId]);

    if (!product) {
        return <NotFound />
    }

    return (
        <>
            <Helmet>
                <title>{product.name} | WirEng® </title>
                <meta name="description" content={product.short_description} />
                <meta name="keywords" content={`${product.name}, antennas, atennas accesories | WirEng® `} />

                <meta property="og:title" content={`Information about: ${product.name} | WirEng® `} />
                <meta property="og:description" content={`Product: ${product.name} - ${product.short_description} | WirEng® `} />
            </Helmet>
            <div className="layout__container">
                <div className="product__container">
                    <div className="product__mainFtbg">
                        <div className="product__header">
                            <Container>
                                <div className="product__headerTitle">
                                    <h1> {product.name} </h1>
                                    <p>Ultra-Wide Extended Band, High Gain, Directional</p>
                                    <p> {product.description} </p>
                                </div>
                            </Container>
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
                                        {
                                            product.features1.map(feature => (
                                                <li
                                                    key={feature}
                                                    className="product__firstItem-left"
                                                    style={{
                                                        fontSize: '1.2rem',
                                                    }}
                                                >
                                                    <p> {feature} </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="product__containerCrsl">
                                    <div className="product__imageCrsl">
                                        <Carousel>
                                            {
                                                product.images?.map(images => (
                                                    <Carousel.Item
                                                        key={images}
                                                    >
                                                        <img
                                                            className="d-block w-100"
                                                            src={images}
                                                            alt="First slide"
                                                        />
                                                    </Carousel.Item>

                                                ))
                                            }
                                        </Carousel>
                                    </div>
                                </div>
                                <div className="product__listFt-right">
                                    <ul>
                                        {
                                            product.features2.map(feature => (
                                                <li
                                                    key={feature}
                                                    className="product__firstItem-right"
                                                    style={{
                                                        fontSize: '1.2rem',
                                                    }}
                                                >
                                                    <p> {feature} </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='mt-5 d-flex justify-content-center'>
                        <h3>Technical Specifications</h3>
                    </div>

                    <Table responsive bordered hover className='mt-5'>
                        <thead>
                            <tr>
                                <th>Operating frequency range, MHz</th>
                                <th>Radiation type</th>
                                <th>Polarization</th>
                                <th>Nominal impedance, Ohm</th>
                                <th>Acceptable impedance range, Ohm</th>
                                <th>Signal gain, dBi</th>
                                <th>VSWR</th>
                                <th>IM3 intermodulation, dBc</th>
                                <th>Radome material</th>
                                <th>Shield material</th>
                                <th>Internal elements main material</th>
                                <th>Bolt/nuts/washers/lockers material</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    product.technical_specification1.map((technicals1) => (
                                        <td key={product.id}>{technicals1} </td>
                                    ))
                                }
                            </tr>
                        </tbody>
                    </Table>

                    <Table responsive bordered hover className='mt-2'>
                        <thead>
                            <tr>
                                <th>Wind resistance, kmh</th>
                                <th>Operating temperature, °C</th>
                                <th>Storage temperature, °C</th>
                                <th>Environmental rating</th>
                                <th>Connector type</th>
                                <th>Mount type</th>
                                <th>Flammability Rating</th>
                                <th>International Protection Marking</th>
                                <th>Weight, kg (pounds)</th>
                                <th>Dimensions, cm (inches)</th>
                                <th>Suitable markets</th>
                                <th>Warranty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    product.technical_specification2.map((technicals2) => (
                                        <td key={product.id}>{technicals2} </td>
                                    ))
                                }
                            </tr>
                        </tbody>
                    </Table>


                    {/* <div className="product__techSp-container">
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
                                    <img src={mech1} />
                                </div>
                                <div>
                                    <img src={mech2} />
                                </div>

                            </div>

                            <div className="product__mechaImage-col">
                                <div>
                                    <img src={mech3} />
                                </div>
                                <div>
                                    <img src={mech4} />
                                </div>
                            </div>

                        </div>

                    </div> */}

                </div>
            </div>
        </>
    )
}
