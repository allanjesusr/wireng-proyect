import { Form, Button, FormControl } from 'react-bootstrap';

export const Footer = () => {
    return (
        <div className="footer__container">
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
                            <li>About WirEng®</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
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
                            <li>WirEng® Headquarters</li>
                            <li>Austin, Texas 78729</li>
                            <li>United States if America</li>
                            <li>Tel. +1-443-353-9268</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <div className="footer__newsletter-container">
                <Form>
                    <Form.Label>Subscribe to WirEng® Newsletter</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="email"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-secondary">Subscribe</Button>
                </Form>

                <div className="footer__social-container">
                    <h1>Social Medias</h1>
                    
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
    )
}
