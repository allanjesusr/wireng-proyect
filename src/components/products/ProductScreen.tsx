import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Helmet } from "react-helmet";
import { Button, Carousel, Container, Table } from 'react-bootstrap';

import { getProductsById } from '../../selectors/getProductsById';
import { NotFound } from '../not-found/NotFound';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import { Pagination } from "swiper";

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

    const tableNames1 = [
        "Operating frequency range, MHz",
        "Radiation type",
        "Polarization",
        "Nominal impedance, Ohm",
        "Acceptable impedance range, Ohm",
        "Signal gain, dBi",
        "VSWR",
        "IM3 intermodulation, dBc",
        "Radome material",
        "Shield material",
        "Internal elements main material",
        "Bolt/nuts/washers/lockers material",
        "Color",
    ]

    const tableNames2 = [
        "Wind resistance, km/h",
        "Operating temperature, °C",
        "Storage temperature, °C",
        "Environmental rating",
        "Connector type",
        "Mount type",
        "Flammability Rating",
        "International Protection Marking",
        "Weight, kg (pounds)",
        "Dimensions, cm (inches)",
        "Suitable markets",
        "Warranty",
    ]

    return (
        <>
            <Helmet>
                <title>{product.name} | WirEng® </title>
                <meta name="description" content={product.short_description} />
                <meta name="keywords" content={`${product.keywords.join()}, antennas, atennas accesories | WirEng® `} />

                <meta property="og:title" content={`Information about: ${product.name} | WirEng® `} />
                <meta property="og:description" content={`Product: ${product.name} - ${product.short_description} | WirEng® `} />
            </Helmet>

            <div className="layout__container">
                <div className="product__container">
                    <div className="product__header">
                        <Container>
                            <div className="product__headerTitle">
                                <h1> {product.name} </h1>
                                <p>Ultra-Wide Extended Band, High Gain, Directional</p>
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
                                        product.features1.map(features => (
                                            <li
                                                key={features}
                                                className="product__firstItem-left"
                                                style={{
                                                    fontSize: '1.2rem',
                                                }}
                                            >
                                                <p> {features} </p>
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
                                                        alt={product.short_description}
                                                    />
                                                </Carousel.Item>

                                            ))
                                        }
                                    </Carousel>
                                    {/* <Swiper
                                        pagination={{
                                            clickable: true,
                                            dynamicBullets: true,
                                        }}
                                        spaceBetween={30}
                                        modules={[Pagination]}
                                        className="mySwiper"
                                    >
                                        {
                                            product.images?.map(images => (
                                                <SwiperSlide
                                                    key={images}
                                                >
                                                    <img
                                                        className="d-block w-100"
                                                        src={images}
                                                        alt={product.short_description}
                                                    />
                                                </SwiperSlide>

                                            ))
                                        }
                                    </Swiper> */}
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

                    <div className='product__description-container mt-4'>
                        {/* <h3 className='mb-4'>{product.name} by WirEng®</h3> */}
                        <p > {product.description} </p>
                    </div>


                    <div className='mt-5 d-flex justify-content-center'>
                        <h3>Technical Specifications</h3>
                    </div>

                    <Table responsive bordered hover className='mt-5'>
                        <thead>
                            <tr>
                                {
                                    tableNames1.map(tableTitles => (
                                        <th
                                            key={tableTitles}
                                            className="text-align-center"
                                            style={{ fontSize: '1.2rem' }}
                                        > {tableTitles} </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    product.technical_specification1.map((technicals1, i) => (
                                        <td
                                            key={i}
                                            style={{ fontSize: '1.2rem' }}
                                        >{technicals1} </td>
                                    ))
                                }
                            </tr>
                        </tbody>
                    </Table>

                    <Table responsive bordered hover className='mt-2'>
                        <thead>
                            <tr>
                                {
                                    tableNames2.map(tableTitles2 => (
                                        <th
                                            key={tableTitles2}
                                            className="align-items-start"
                                            style={{ fontSize: '1.2rem' }}
                                        > {tableTitles2}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    product.technical_specification2.map((technicals2, i) => (
                                        <td
                                            key={i}
                                            style={{ fontSize: '1.2rem' }}
                                        >{technicals2} </td>
                                    ))
                                }
                            </tr>
                        </tbody>
                    </Table>

                    <div className="container-btn-shopify">
                        <Button
                            variant="secondary"
                            href={product.shopify}
                            className="mt-3 btn-shopify"
                            style={{ padding: '0.8rem', marginTop: '0.5rem'}}
                            ><i className="fa-solid fa-arrow-right-long me-2"></i>Buy Now</Button>
                    </div>

                    {/* <div className="product__mechaSpcf-container">
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
