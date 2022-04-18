import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import logo from "../../assets/images/logo/LOGO-VERSION.png";

export const NavbarComponent = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleHome = () => {
        navigate('/home');
    }

    return (
        <div className="navbar__container">

            <Navbar expand="sm" >

                <Container fluid>
                    <Navbar.Brand>
                        <div className="navbar__logo-container">
                            <img
                                src={logo}
                                alt="Logo"
                                className="navbar__logo pointer"
                                onClick={handleHome}
                                id="nav-top"
                            />
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>

                            <div className="navbar__navbar-links">
                                <NavDropdown title="Products" id="nav-dropdown">

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/products/antennas" className="link">
                                            Antennas by WirEng®
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/products/antennas-accesories" className="link">
                                            Antenna Accesories by WirEng®
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/search" className="link">
                                            Search a WirEng® Product
                                        </Link>
                                    </NavDropdown.Item>

                                </NavDropdown>

                                <NavDropdown title="Services" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/subscribe-to-newsletter/" className="link">
                                            Custom Product Request
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/subscribe-to-newsletter/" className="link">
                                            Government/Military Relations
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/subscribe-to-newsletter/" className="link">
                                            B2B/OEM Relations
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/subscribe-to-newsletter/" className="link">
                                            B2B Partnerships
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Contact Us" id="nav-dropdown">

                                    <NavDropdown.Item eventKey="4.4">
                                            <Link to="/get-in-touch/" className="link">
                                                Get in Touch
                                            </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item eventKey="4.4">
                                            <Link to="/get-in-touch/" className="link">
                                                Support
                                            </Link>
                                    </NavDropdown.Item>

                                    
                                </NavDropdown>

                                <NavDropdown title="About Wireng" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/about-wireng/" className="link">
                                            About WirEng®
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="WirEng® Dealer Locator" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/subscribe-to-newsletter/" className="link">
                                            WirEng® Asia
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/subscribe-to-newsletter/" className="link">
                                            WirEng® Europe
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/subscribe-to-newsletter/" className="link">
                                            WirEng® North America
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item eventKey="4.4">
                                        <Link to="/subscribe-to-newsletter/" className="link">
                                            WirEng® Latin America
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </div>
    )
}
