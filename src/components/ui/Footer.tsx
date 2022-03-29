import { Link } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

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
                <div className="footer__nav-footer-row">
                    <div className="footer__nav-footer-column">
                        <ul>
                            <li>Rural Solutions</li>
                            <li>Home Solutions</li>
                            <li>Mobile Solutions</li>
                            <li>Marine Solutions</li>
                            <li>Drones Solutions</li>
                            <li>Custom Solutions</li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                        <ul>
                            <li>Become a WirEng® System Installer</li>
                            <li>Become a WirEng® Representative</li>
                            <li>Become a WirEng® Reseller</li>
                            <li>Become a WirEng® Distributor</li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                        <ul>
                            <li>WirEng® in the World</li>
                            <li><Link to='/about-wireng/' className="footer__link">About WirEng®</Link></li>
                            <li><Link to='/get-in-touch/' className="footer__link">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                        <ul>
                            <li>WirEng® Store</li>
                            <li>Register Your WirEng® Product</li>
                            <li>WirEng® Two-Year Warranty</li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                        <ul>
                            <li>Contact the WirEng® Engineering Team</li>
                            <li>Contact the WirEng® Sales Team</li>
                            <li>Contact the WirEng® Business Team</li>
                            <li>Government/Military Relations</li>
                            <li>B2B/OEM Relations</li>
                            <li>B2B Partnerships</li>
                        </ul>
                    </div >
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                        <ul>
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
                    </div >
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                        <ul>
                            <li>WirEng® on YouTube</li>
                            <li>WirEng® on LinkedIn</li>
                            <li>WirEng® on Tweeter</li>
                            <li>WirEng® on Facebook</li>
                            <li>WirEng® on Instagram</li>
                            <li>WirEng® Careers</li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                        <ul>
                            <li>WirEng® Headquarters</li>
                            <li>Austin, Texas 78729</li>
                            <li>United States of America</li>
                            <li>Tel. +1-443-353-9268</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__productsTitle">
                    <h2>The WirEng® 2022 Product Line</h2>
            </div>

            <div className="footer__nav-footer">
                <div className="footer__nav-footer-row">
                    <div className="footer__nav-footer-column">
                        <div className="footer__nav-footer-colhead">DroneAnt™ Series</div>
                        <ul>
                            <li><Link to='/droneant/' className="footer__link">DroneAnt™</Link></li>
                            <li><Link to='/droneant-plus/' className="footer__link">DroneAnt-Plus™</Link></li>
                            <li><Link to='/droneant16/' className="footer__link">DroneAnt16™</Link></li>
                            <li><Link to='/droneant16-plus/' className="footer__link">DroneAnt16-Plus™</Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                    <div className="footer__nav-footer-colhead">GiAnt-5G™ Series</div>
                        <ul>
                            <li><Link to='/giant-5g/' className="footer__link">GiAnt-5G™</Link></li>
                            <li><Link to='/giant-5g/' className="footer__link">GiAnt2-5G™</Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                    <div className="footer__nav-footer-colhead">GigaMIMO-Plus-5G™ Series</div>
                        <ul>
                            <li><Link to='/gigamimo-plus-5g/' className="footer__link">GigaMIMO-Plus-5G™</Link></li>
                            <li><Link to='/gigamimo16-plus-5g-2x2/' className="footer__link">GigaMIMO16-Plus-5G-2x2™</Link></li>
                            <li><Link to='/gigamimo16-plus-5g-4x2/' className="footer__link">GigaMIMO16-Plus-5G-4x2™</Link></li>
                            <li><Link to='/gigamimo16-plus-5g-4x4/' className="footer__link">GigaMIMO16-Plus-5G-4x4™</Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                    <div className="footer__nav-footer-colhead">MIMOMount™ Series</div>
                        <ul>
                            <li><Link to='/mimomount2x2/' className="footer__link">MIMOMount-2x2™</Link></li>
                            <li><Link to='/mimomount4x4/' className="footer__link">MIMOMount-4x4™</Link></li>
                            <li><Link to='/mimomount8x8/' className="footer__link">MIMOMount-8x8™</Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                    <div className="footer__nav-footer-colhead">OctAnt-5G™ Series</div>
                        <ul>
                            <li><Link to='/octant-5g/' className="footer__link">OctAnt-5G-8x8™</Link></li>
                        </ul>
                    </div >
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                    <div className="footer__nav-footer-colhead">Omnirial-Plus-5G™ Series</div>
                        <ul>
                            <li><Link to='/omnirial2-plus-5g/' className="footer__link">Omnirial2-Plus-5G™</Link></li>
                            <li><Link to='/omnirial4-plus-5g-4x2/' className="footer__link">Omnirial4-Plus-5G-4x2™</Link></li>
                            <li><Link to='/omnirial4-plus-5g-4x4/' className="footer__link">Omnirial4-Plus-5G-4x4™</Link></li>
                            <li><Link to='/omnirial8-plus-5g-8x2/' className="footer__link">Omnirial8-Plus-5G-8x2™</Link></li>
                            <li><Link to='/omnirial8-5g-plus-8x4/' className="footer__link">Omnirial8-Plus-5G-8x4™</Link></li>
                            <li><Link to='/omnirial8-plus-5g-8x8/' className="footer__link">Omnirial8-Plus-5G-8x8™</Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                    <div className="footer__nav-footer-colhead">WideAnt-5G™ Series</div>
                        <ul>
                            <li><Link to='/wideant-5g/' className="footer__link">WideAnt-5G™</Link></li>
                            <li><Link to='/wideant2-5g/' className="footer__link">WideAnt2-5G™</Link></li>
                            <li><Link to='/wideant4-5g-4x2/' className="footer__link">WideAnt4-5G-4x2™</Link></li>
                            <li><Link to='/wideant4-5g-4x4/' className="footer__link">WideAnt4-5G-4x4™</Link></li>
                            <li><Link to='/wideant8-5g-8x2/' className="footer__link">WideAnt8-5G-8x2™</Link></li>
                            <li><Link to='/wideant8-5g-8x4/' className="footer__link">WideAnt8-5G-8x4™</Link></li>
                            <li><Link to='/wideant8-5g-8x8/' className="footer__link">WideAnt8-5G-8x8™</Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                    <div className="footer__nav-footer-colhead">WideAnt-Plus-5G™ Series</div>
                        <ul>
                            <li><Link to='/wideant-plus-5g/' className="footer__link">WideAnt-Plus-5G™</Link></li>
                            <li><Link to='/wideant2-plus-5g/' className="footer__link">WideAnt2-Plus-5G™</Link></li>
                            <li><Link to='/wideant2-plus-5g-ref/' className="footer__link">WideAnt2-Plus-5G-Ref™</Link></li>
                            <li><Link to='/wideant4-plus-5g-4x2/' className="footer__link">WideAnt4-Plus-5G-4x2™</Link></li>
                            <li><Link to='/wideant4-plus-5g-4x4/' className="footer__link">WideAnt4-Plus-5G-4x4™</Link></li>
                            <li><Link to='/wideant8-plus-5g-8x2/' className="footer__link">WideAnt8-Plus-5G-8x2™</Link></li>
                            <li><Link to='/wideant8-plus-5g-8x4/' className="footer__link">WideAnt8-Plus-5G-8x4™</Link></li>
                            <li><Link to='/wideant8-plus-5g-8x8/' className="footer__link">WideAnt8-Plus-5G-8x8™</Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                    <div className="footer__nav-footer-colhead">ExtAnt-5G™ Series</div>
                        <ul>
                            <li><Link to='/extant-smaf-smam/' className="footer__link">EXTANT-SMAF-SMAM™</Link></li>
                            <li><Link to='/extant-smaf-tncm/' className="footer__link">EXTANT-SMAF-TNCM™</Link></li>
                            <li><Link to='/extant-smaf-ts9/' className="footer__link">EXTANT-SMAF-TS9™</Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav-footer-spaceColInner"></div>
                    <div className="footer__nav-footer-column">
                    <div className="footer__nav-footer-colhead">WRG400-AU™ Series</div>
                        <ul>
                            <li><Link to='/wrg400-smam-nm-10m-au/' className="footer__link">WRG400-SMAM-NM-10M-AU™</Link></li>
                            <li><Link to='/wrg400-smam-nm-20m-au/' className="footer__link">WRG400-SMAM-NM-20M-AU™</Link></li>
                            <li><Link to='/wrg400-smam-ra-nm-10m-au/' className="footer__link">WRG400-SMAM-RA-NM-10M-AU™</Link></li>
                            <li><Link to='/wrg400-smam-ra-nm-20m-au/' className="footer__link">WRG400-SMAM-RA-NM-20M-AU™</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className="footer__newsAndSocial-container">
                <div>
                    <Form>
                        <div className="footer__newsletterTitle">
                            <h1>Subscribe to WirEng® Newsletter</h1>
                        </div>
                        <Form.Control
                            type="text"
                            placeholder="email"
                            className="contact__input"
                            aria-label="Search"
                        />
                        <Button className="button">Subscribe</Button>
                    </Form>
                </div>
                <div className="footer__social-container">
                    <div className="footer__socialTitle">
                        <h1>Social Medias</h1>
                    </div>
                    <div className="footer__icons-social-container">
                        <i className="fa-brands fa-facebook footer__icon"></i>
                        <i className="fa-brands fa-twitter footer__icon"></i>
                        <i className="fa-brands fa-instagram footer__icon"></i>
                        <i className="fa-brands fa-youtube footer__icon"></i>
                    </div>
                </div>
            
            </div>

            <hr />

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

            <div className="footer__mobileProduct-title">
                <p>The WirEng® 2022 Product Line</p>
            </div>

            <div className="footer__mobileContent">
                <div className="footer__mobileColumn">
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">WideAnt-5G™ Series</li>

                        <li>WideAnt-5G™</li>
                        <li>WideAnt2-5G™</li>
                        <li>WideAnt4-5G-4x2™</li>
                        <li>WideAnt4-5G-4x4™</li>
                        <li>WideAnt8-5G-8x2™</li>
                        <li>WideAnt8-5G-8x4™</li>
                        <li>WideAnt8-5G-8x8™</li>
                    </ul>
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">Omnirial-Plus-5G™ Series</li>

                        <li>Omnirial2-Plus-5G™</li>
                        <li>Omnirial4-Plus-5G-4x2™</li>
                        <li>Omnirial4-Plus-5G-4x4™</li>
                        <li>Omnirial8-Plus-5G-8x2™</li>
                        <li>Omnirial8-Plus-5G-8x4™</li>
                        <li>Omnirial8-Plus-5G-8x8™</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">WideAnt-Plus-5G™ Series</li>

                        <li>WideAnt-Plus-5G™</li>
                        <li>WideAnt2-Plus-5G™</li>
                        <li>WideAnt2-Plus-5G-Ref™</li>
                        <li>WideAnt4-Plus-5G-4x2™</li>
                        <li>WideAnt4-Plus-5G-4x4™</li>
                        <li>WideAnt8-Plus-5G-8x2™</li>
                        <li>WideAnt8-Plus-5G-8x4™</li>
                        <li>WideAnt8-Plus-5G-8x8™</li>
                    </ul>
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">DroneAnt™ Series</li>

                        <li>DroneAnt™</li>
                        <li>DroneAnt-Plus™</li>
                        <li>DroneAnt16™</li>
                        <li>DroneAnt16-Plus™</li>
                    </ul>
                </div>
                <div className="footer_columntest">
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">WRG400-AU™ Series</li>

                        <li>WRG400-SMAM-NM-10M-AU™</li>
                        <li>WRG400-SMAM-NM-20M-AU™</li>
                        <li>WRG400-SMAM-RA-NM-10M-AU™</li>
                        <li>WRG400-SMAM-RA-NM-20M-AU™</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">GigaMIMO-Plus-5G™ Series</li>

                        <li>GigaMIMO-Plus-5G™</li>
                        <li>GigaMIMO16-Plus-5G-2x2™</li>
                        <li>GigaMIMO16-Plus-5G-4x2™</li>
                        <li>GigaMIMO16-Plus-5G-4x4™</li>
                    </ul>
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">MIMOMount™ Series</li>

                        <li>MIMOMount-2x2™</li>
                        <li>MIMOMount-4x4™</li>
                        <li>MIMOMount-8x8™</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">ExtAnt-5G™ Series</li>

                        <li>EXTANT-SMAF-SMAM™</li>
                        <li>EXTANT-SMAF-TNCM™</li>
                        <li>EXTANT-SMAF-TS9™</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">OctAnt-5G™ Series</li>

                        <li>OctAnt-5G-8x8™</li>
                    </ul>
                    <ul className="footer__mobileList">
                        <li className="footer__mobilelist-title">GiAnt-5G™ Series</li>

                        <li>GiAnt-5G™</li>
                        <li>GiAnt2-5G™</li>
                    </ul>
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
