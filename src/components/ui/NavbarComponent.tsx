import { Link, useNavigate } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import logo from "../../assets/images/logo/LOGO-VERSION.png";

export const NavbarComponent = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home');
    }

    return (
        <>
            <Navbar expand="lg" bg="dark">

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
                        <Nav className="justify-content-evenly text-uppercase">
                            <NavDropdown title="Products" id="nav-dropdown">
                                <Link to="/products/antennas" className="link p-2">
                                    Antennas by WirEng®
                                </Link>

                                <NavDropdown.Divider />

                                <Link to="/products/antennas-accesories" className="link p-2">
                                    Antenna Accesories by WirEng®
                                </Link>
                                
                                <NavDropdown.Divider />

                                <Link to="/search" className="link p-2">
                                    Search a WirEng® Product
                                </Link>

                            </NavDropdown>

                            <NavDropdown title="Services" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/subscribe-to-newsletter/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        Custom Product Request
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/subscribe-to-newsletter/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        Government/Military Relations
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/subscribe-to-newsletter/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        B2B/OEM Relations
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/subscribe-to-newsletter/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        B2B Partnerships
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Contact Us" id="nav-dropdown">

                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/get-in-touch/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        Get in Touch
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/get-in-touch/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        Support
                                    </Link>
                                </NavDropdown.Item>


                            </NavDropdown>

                            <NavDropdown title="About Wireng" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/about-wireng/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        About WirEng®
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            {/* <NavDropdown title="WirEng® Dealer Locator" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/subscribe-to-newsletter/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        WirEng® Asia
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/subscribe-to-newsletter/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        WirEng® Europe
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/subscribe-to-newsletter/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        WirEng® North America
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/subscribe-to-newsletter/" style={{ color: "white", fontWeight: "bold" }} className="text-decoration-none">
                                        WirEng® Latin America
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown> */}

                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </>
    )
}
