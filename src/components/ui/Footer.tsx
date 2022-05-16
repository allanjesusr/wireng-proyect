import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';

import { NewsAndSocialFooter } from './NewsAndSocialFooter';

export const Footer = () => {

    return (
        <>
            <div className="footer__container mobileFooterContainer" id="navFooter">
                <a href="#nav-top">
                    <div className="footer__back-top pointer">
                        <h2>Back to top</h2>
                    </div>
                </a>
                <div className="footer__nav-footer">

                    <Container>

                        <Row className="g-4">
                            <Col>
                                <ul className="list-unstyled">
                                    <li>Rural Solutions</li>
                                    <li>Home Solutions</li>
                                    <li>Mobile Solutions</li>
                                    <li>Marine Solutions</li>
                                    <li>Drones Solutions</li>
                                    <li>Custom Solutions</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>Become a WirEng® System Installer</li>
                                    <li>Become a WirEng® Representative</li>
                                    <li>Become a WirEng® Reseller</li>
                                    <li>Become a WirEng® Distributor</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>WirEng® in the World</li>
                                    <li><Link to='/about-wireng/' className="footer__link">About WirEng®</Link></li>
                                    <li><Link to='/get-in-touch/' className="footer__link">Contact Us</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>WirEng® Store</li>
                                    <li>Register Your WirEng® Product</li>
                                    <li>WirEng® Two-Year Warranty</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>Contact the WirEng® Engineering Team</li>
                                    <li>Contact the WirEng® Sales Team</li>
                                    <li>Contact the WirEng® Business Team</li>
                                    <li>Government/Military Relations</li>
                                    <li>B2B/OEM Relations</li>
                                    <li>B2B Partnerships</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>Company Profile</li>
                                    <li>Testimonials</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms and Conditions</li>
                                    <li>Site Map</li>
                                    <li>Website Terms of Service</li>
                                    <li>Shipping Policy</li>
                                    <li>Product Request</li>
                                    <li>Email Newsletter</li>
                                    <li>Technical Papers</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>WirEng® on YouTube</li>
                                    <li>WirEng® on LinkedIn</li>
                                    <li>WirEng® on Tweeter</li>
                                    <li>WirEng® on Facebook</li>
                                    <li>WirEng® on Instagram</li>
                                    <li>WirEng® Careers</li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>WirEng® Headquarters</li>
                                    <li>Austin, Texas 78729</li>
                                    <li>United States of America</li>
                                    <li>Tel. +1-443-353-9268</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="footer__productsTitle">
                    <h2>The WirEng® 2022 Product Line</h2>
                </div>

                <div className="footer__nav-footer">
                    <Container>

                        <Row className="g-4">
                            <Col>
                                <div className="footer__nav-footer-colhead">DroneAnt™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/droneant' className="footer__link">DroneAnt™</Link></li>
                                    <li><Link to='/product/droneant-plus' className="footer__link">DroneAnt-Plus™</Link></li>
                                    <li><Link to='/product/droneant16' className="footer__link">DroneAnt16™</Link></li>
                                    <li><Link to='/product/droneant16-plus' className="footer__link">DroneAnt16-Plus™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">GiAnt-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/giant-5g' className="footer__link">GiAnt-5G™</Link></li>
                                    <li><Link to='/product/giant2-5g' className="footer__link">GiAnt2-5G™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">GigaMIMO-Plus-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/gigamimo-plus-5g' className="footer__link">GigaMIMO-Plus-5G™</Link></li>
                                    <li><Link to='/product/gigamimo16-plus-5g-2x2' className="footer__link">GigaMIMO16-Plus-5G-2x2™</Link></li>
                                    <li><Link to='/product/gigamimo16-plus-5g-4x2' className="footer__link">GigaMIMO16-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/product/gigamimo16-plus-5g-4x4' className="footer__link">GigaMIMO16-Plus-5G-4x4™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">MIMOMount™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/mimomount' className="footer__link">MIMOMount-2x2™</Link></li>
                                    <li><Link to='/product/mimomount4' className="footer__link">MIMOMount-4x4™</Link></li>
                                    <li><Link to='/product/mimomount8' className="footer__link">MIMOMount-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">OctAnt-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/octant-5g' className="footer__link">OctAnt-5G-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">Omnirial-Plus-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/omnirial2-plus-5g' className="footer__link">Omnirial2-Plus-5G™</Link></li>
                                    <li><Link to='/product/omnirial4-plus-5g-4x2' className="footer__link">Omnirial4-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/product/omnirial4-plus-5g-4x4' className="footer__link">Omnirial4-Plus-5G-4x4™</Link></li>
                                    <li><Link to='/product/omnirial8-plus-5g-8x2' className="footer__link">Omnirial8-Plus-5G-8x2™</Link></li>
                                    <li><Link to='/product/omnirial8-5g-plus-8x4' className="footer__link">Omnirial8-Plus-5G-8x4™</Link></li>
                                    <li><Link to='/product/omnirial8-plus-5g-8x8' className="footer__link">Omnirial8-Plus-5G-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">WideAnt-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/wideant-5g' className="footer__link">WideAnt-5G™</Link></li>
                                    <li><Link to='/product/wideant2-5g' className="footer__link">WideAnt2-5G™</Link></li>
                                    <li><Link to='/product/wideant4-5g-4x2' className="footer__link">WideAnt4-5G-4x2™</Link></li>
                                    <li><Link to='/product/wideant4-5g-4x4' className="footer__link">WideAnt4-5G-4x4™</Link></li>
                                    <li><Link to='/product/wideant8-5g-8x2' className="footer__link">WideAnt8-5G-8x2™</Link></li>
                                    <li><Link to='/product/wideant8-5g-8x4' className="footer__link">WideAnt8-5G-8x4™</Link></li>
                                    <li><Link to='/product/wideant8-5g-8x8' className="footer__link">WideAnt8-5G-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">WideAnt-Plus-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/wideant-plus-5g' className="footer__link">WideAnt-Plus-5G™</Link></li>
                                    <li><Link to='/product/wideant2-plus-5g' className="footer__link">WideAnt2-Plus-5G™</Link></li>
                                    <li><Link to='/product/wideant2-plus-5g-ref' className="footer__link">WideAnt2-Plus-5G-Ref™</Link></li>
                                    <li><Link to='/product/wideant4-plus-5g-4x2' className="footer__link">WideAnt4-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/product/wideant4-plus-5g-4x4' className="footer__link">WideAnt4-Plus-5G-4x4™</Link></li>
                                    <li><Link to='/product/wideant8-plus-5g-8x2' className="footer__link">WideAnt8-Plus-5G-8x2™</Link></li>
                                    <li><Link to='/product/wideant8-plus-5g-8x4' className="footer__link">WideAnt8-Plus-5G-8x4™</Link></li>
                                    <li><Link to='/product/wideant8-plus-5g-8x8' className="footer__link">WideAnt8-Plus-5G-8x8™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">ExtAnt-5G™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/extant-smaf-smam' className="footer__link">EXTANT-SMAF-SMAM™</Link></li>
                                    <li><Link to='/product/extant-smaf-tncm' className="footer__link">EXTANT-SMAF-TNCM™</Link></li>
                                    <li><Link to='/product/extant-smaf-ts9' className="footer__link">EXTANT-SMAF-TS9™</Link></li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="footer__nav-footer-colhead">WRG400-AU™ Series</div>
                                <ul className="list-unstyled">
                                    <li><Link to='/product/wrg400-smam-nm-10m' className="footer__link">WRG400-SMAM-NM-10M™</Link></li>
                                    <li><Link to='/product/wrg400-smam-nm-20m' className="footer__link">WRG400-SMAM-NM-20M™</Link></li>
                                    <li><Link to='/product/wrg400-smam-ranm-10m' className="footer__link">WRG400-SMAM-RANM-10M™</Link></li>
                                    <li><Link to='/product/wrg400-smam-ranm-20m' className="footer__link">WRG400-SMAM-RANM-20M™</Link></li>
                                </ul>
                            </Col>

                        </Row>
                    </Container>
                </div>

                <NewsAndSocialFooter />

                <div className="footer__rights-container">
                    <p>Copyright © WirEng®. All rights reserved.</p>
                </div>
            </div>

            {/* Footer Responsive */}

            <footer className="navFooterMobile">
                <div id="nav-footer" className="footer__navFooterGateway">
                    <a id="mblFooter-gototop" className="navFooter-topPage" href="#nav-top">
                        <i className="fa-solid fa-caret-up navIcon"></i>
                        <b className="nav-b">Top of Page</b>
                    </a>

                    <Container>
                        <div className="footer__mobileContent">
                            <div className="footer__mobileColumn">
                                <ul className="footer__mobileList">
                                    <li>Rural Solutions</li>
                                    <li>Home Solutions</li>
                                    <li>Mobile Solutions</li>
                                    <li>Marine Solutions</li>
                                    <li>Drones Solutions</li>
                                    <li>Custom Solutions</li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li>Company Profile</li>
                                    <li>Testimonials</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms and Conditions</li>
                                    <li>Site Map</li>
                                    <li>Website Terms of Service</li>
                                    <li>Shipping Policy</li>
                                    <li>Product Request</li>
                                    <li>Email Newsletter</li>
                                    <li>Technical Papers</li>
                                </ul>

                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li>Contact the WirEng® Engineering Team</li>
                                    <li>Contact the WirEng® Sales Team</li>
                                    <li>Contact the WirEng® Business Team</li>
                                    <li>Government/Military Relations</li>
                                    <li>B2B/OEM Relations</li>
                                    <li>B2B Partnerships</li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li>Become a WirEng® System Installer</li>
                                    <li>Become a WirEng® Representative</li>
                                    <li>Become a WirEng® Reseller</li>
                                    <li>Become a WirEng® Distributor</li>
                                </ul>
                            </div>
                            <div className="footer_columntest">
                                <ul className="footer__mobileList">
                                    <li>WirEng® in the World</li>
                                    <li>About WirEng®</li>
                                    <li>Contact Us</li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li>WirEng® Store</li>
                                    <li>Register Your WirEng® Product</li>
                                    <li>WirEng® Two-Year Warranty</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li>WirEng® on YouTube</li>
                                    <li>WirEng® on LinkedIn</li>
                                    <li>WirEng® on Tweeter</li>
                                    <li>WirEng® on Facebook</li>
                                    <li>WirEng® on Instagram</li>
                                    <li>WirEng® Careers</li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li>WirEng® Headquarters</li>
                                    <li>Austin, Texas 78729</li>
                                    <li>United States of America</li>
                                    <li>Tel. +1-443-353-9268</li>
                                </ul>
                            </div>
                        </div>
                    </Container>

                    <div className="footer__mobileProduct-title">
                        <p>The WirEng® 2022 Product Line</p>
                    </div>

                    <Container>

                        <div className="footer__mobileContent">
                            <div className="footer__mobileColumn">
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">WideAnt-5G™ Series</li>

                                    <li><Link to='/product/wideant-5g' className="footer__link">WideAnt-5G™</Link></li>
                                    <li><Link to='/product/wideant2-5g' className="footer__link">WideAnt2-5G™</Link></li>
                                    <li><Link to='/product/wideant4-5g-4x2' className="footer__link">WideAnt4-5G-4x2™</Link></li>
                                    <li><Link to='/product/wideant4-5g-4x4' className="footer__link">WideAnt4-5G-4x4™</Link></li>
                                    <li><Link to='/product/wideant8-5g-8x2' className="footer__link">WideAnt8-5G-8x2™</Link></li>
                                    <li><Link to='/product/wideant8-5g-8x4' className="footer__link">WideAnt8-5G-8x4™</Link></li>
                                    <li><Link to='/product/wideant8-5g-8x8' className="footer__link">WideAnt8-5G-8x8™</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">Omnirial-Plus-5G™ Series</li>

                                    <li><Link to='/product/omnirial2-plus-5g' className="footer__link">Omnirial2-Plus-5G™</Link></li>
                                    <li><Link to='/product/omnirial4-plus-5g-4x2' className="footer__link">Omnirial4-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/product/omnirial4-plus-5g-4x4' className="footer__link">Omnirial4-Plus-5G-4x4™</Link></li>
                                    <li><Link to='/product/omnirial8-plus-5g-8x2' className="footer__link">Omnirial8-Plus-5G-8x2™</Link></li>
                                    <li><Link to='/product/omnirial8-5g-plus-8x4' className="footer__link">Omnirial8-Plus-5G-8x4™</Link></li>
                                    <li><Link to='/product/omnirial8-plus-5g-8x8' className="footer__link">Omnirial8-Plus-5G-8x8™</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">WideAnt-Plus-5G™ Series</li>

                                    <li><Link to='/product/wideant-plus-5g' className="footer__link">WideAnt-Plus-5G™</Link></li>
                                    <li><Link to='/product/wideant2-plus-5g' className="footer__link">WideAnt2-Plus-5G™</Link></li>
                                    <li><Link to='/product/wideant2-plus-5g-ref' className="footer__link">WideAnt2-Plus-5G-Ref™</Link></li>
                                    <li><Link to='/product/wideant4-plus-5g-4x2' className="footer__link">WideAnt4-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/product/wideant4-plus-5g-4x4' className="footer__link">WideAnt4-Plus-5G-4x4™</Link></li>
                                    <li><Link to='/product/wideant8-plus-5g-8x2' className="footer__link">WideAnt8-Plus-5G-8x2™</Link></li>
                                    <li><Link to='/product/wideant8-plus-5g-8x4' className="footer__link">WideAnt8-Plus-5G-8x4™</Link></li>
                                    <li><Link to='/product/wideant8-plus-5g-8x8' className="footer__link">WideAnt8-Plus-5G-8x8™</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">DroneAnt™ Series</li>

                                    <li><Link to='/product/droneant' className="footer__link">DroneAnt™</Link></li>
                                    <li><Link to='/product/droneant-plus' className="footer__link">DroneAnt-Plus™</Link></li>
                                    <li><Link to='/product/droneant16' className="footer__link">DroneAnt16™</Link></li>
                                    <li><Link to='/product/droneant16-plus' className="footer__link">DroneAnt16-Plus™</Link></li>
                                </ul>
                            </div>
                            <div className="footer_columntest">
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">WRG400-AU™ Series</li>

                                    <li><Link to='/product/wrg400-snam-nm-10m' className="footer__link">WRG400-SNAM-NM-10M™</Link></li>
                                    <li><Link to='/product/wrg400-snam-nm-20m' className="footer__link">WRG400-SNAM-NM-20M™</Link></li>
                                    <li><Link to='/product/wrg400-smam-ranm-10m' className="footer__link">WRG400-SMAM-RA-NM-10M™</Link></li>
                                    <li><Link to='/product/wrg400-smam-ranm-20m' className="footer__link">WRG400-SMAM-RA-NM-20M™</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">GigaMIMO-Plus-5G™ Series</li>

                                    <li><Link to='/product/gigamimo-plus-5g' className="footer__link">GigaMIMO-Plus-5G™</Link></li>
                                    <li><Link to='/product/gigamimo16-plus-5g-2x2' className="footer__link">GigaMIMO16-Plus-5G-2x2™</Link></li>
                                    <li><Link to='/product/gigamimo16-plus-5g-4x2' className="footer__link">GigaMIMO16-Plus-5G-4x2™</Link></li>
                                    <li><Link to='/product/gigamimo16-plus-5g-4x4' className="footer__link">GigaMIMO16-Plus-5G-4x4™</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">MIMOMount™ Series</li>

                                    <li><Link to='/product/mimomount' className="footer__link">MIMOMount-2x2™</Link></li>
                                    <li><Link to='/product/mimomount4' className="footer__link">MIMOMount-4x4™</Link></li>
                                    <li><Link to='/product/mimomount8' className="footer__link">MIMOMount-8x8™</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">ExtAnt-5G™ Series</li>

                                    <li><Link to='/product/extant-smaf-smam' className="footer__link">EXTANT-SMAF-SMAM™</Link></li>
                                    <li><Link to='/product/extant-smaf-tncm' className="footer__link">EXTANT-SMAF-TNCM™</Link></li>
                                    <li><Link to='/product/extant-smaf-ts9' className="footer__link">EXTANT-SMAF-TS9™</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">OctAnt-5G™ Series</li>

                                    <li><Link to='/product/octant-5g' className="footer__link">OctAnt-5G-8x8™</Link></li>
                                </ul>
                                <ul className="footer__mobileList">
                                    <li className="footer__mobilelist-title">GiAnt-5G™ Series</li>

                                    <li><Link to='/product/giant-5g' className="footer__link">GiAnt-5G™</Link></li>
                                    <li><Link to='/product/giant2-5g' className="footer__link">GiAnt2-5G™</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Container>

                    <div className="footer__newsAndSocial-container">
                        <div className="footer__box-container">
                            <div className="contact__news-container">
                                <div className="contact__contactHeader">
                                    <h1>Subscribe to WirEng Newsletter</h1>
                                    <span>To get in touch with a WirEng team member, please complete the form below (* indicates a required filed)</span>
                                </div>

                                <div className="footer__news-form">
                                    <form>
                                        <input
                                            placeholder="Email"
                                            autoComplete="off"
                                            className='contact__input mt-5'
                                        />
                                        <button
                                            type='submit'
                                            className="button button-block mt-5"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="footer__infoContainer">
                                <div className="footer__infoHeader">
                                    <h1>Contact Info</h1>
                                </div>

                                <div className="footer__infoList-elements">
                                    <ul className="infoList">
                                        <li className="infoList-items"><i className="fa-solid fa-envelope"></i> wireng@gmail.com</li>
                                    </ul>
                                </div>

                                <div className="footer__info-socialMedias">
                                    <ul >
                                        <div className="footer__socialMedias-container">
                                            <li className="footer__socialMedias-items"><i className="fa-brands fa-whatsapp"></i></li>
                                            <li className="footer__socialMedias-items"><i className="fa-brands fa-instagram"></i></li>
                                            <li className="footer__socialMedias-items"><i className="fa-brands fa-facebook"></i></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="footer__mobilerights-container">
                        <p>Copyright © WirEng®. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
