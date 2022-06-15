import { Link, useNavigate } from 'react-router-dom';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export const NavbarComponent = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    return (
        <>
            <Navbar expand="lg" className="navbar__container">

                <Container fluid>
                    <Navbar.Brand>
                        <div className="navbar__logo-container">
                            <img
                                src="https://wirengimages.s3.amazonaws.com/images/logoswireng/wireng_homepage_logo.jpg"
                                alt="Logo"
                                className="navbar__logo pointer"
                                onClick={handleHome}
                                id="nav-top"
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="text-uppercase me-auto">
                            <NavDropdown title="Products" id="nav-dropdown">
                                <Link to="/all-products/antennas" className="link p-2">
                                    Antennas by WirEng®
                                </Link>

                                <NavDropdown.Divider />

                                <Link to="/all-products/antenna-accesories" className="link p-2">
                                    Antenna Accesories by WirEng®
                                </Link>

                            </NavDropdown>

                            <NavDropdown title="Services" id="nav-dropdown">

                                <Link to="/custom-product-inquiry/" className="link p-2">
                                    Custom Product Inquiry
                                </Link>
                                <NavDropdown.Divider />

                                <Link to="/government-military-inquiry/" className="link p-2">
                                    Government/Military Inquiry
                                </Link>
                                <NavDropdown.Divider />
                                <Link to="/b2b-oem-inquiry/" className="link p-2">
                                    B2B/OEM Inquiry
                                </Link>
                                <NavDropdown.Divider />
                                <Link to="/resellership-inquiry/" className="link p-2">
                                    Resellership Inquiry
                                </Link>
                                <NavDropdown.Divider />
                                <Link to="/distributorship-inquiry/" className="link p-2">
                                    Distributorship Inquiry
                                </Link>
                                <NavDropdown.Divider />
                                <Link to="/affiliate-proposal/" className="link p-2">
                                    Affiliate/Partnership Proposal
                                </Link>

                            </NavDropdown>

                            <NavDropdown title="Contact Us" id="nav-dropdown">

                                <Link to="/get-in-touch/" className="link p-2">
                                    Get in Touch
                                </Link>

                                <NavDropdown.Divider />

                                <Link to="/pre-sales-support/" className="link p-2">
                                    Pre-Sales Technical Support
                                </Link>

                                <NavDropdown.Divider />

                                <Link to="/post-sales-support/" className="link p-2">
                                    Post-Sales Technical Support
                                </Link>

                                <NavDropdown.Divider />

                                <Link to="/affiliate-proposal/" className="link p-2">
                                    Affiliate Proposal
                                </Link>

                            </NavDropdown>

                            <NavDropdown title="About Us" id="nav-dropdown">
                                <Link to="/about-wireng/" className="link p-2">
                                    About WirEng®
                                </Link>
                            </NavDropdown>

                            <NavDropdown title="WirEng® Dealer Locator" id="nav-dropdown">
                                <Link to="/dealer-locator/" className="link p-2">
                                    WirEng® in the World
                                </Link>
{/* 
                                <NavDropdown.Divider />

                                <Link to="/subscribe-to-newsletter/" className="link p-2">
                                    WirEng® Europe
                                </Link>

                                <NavDropdown.Divider />

                                <Link to="/subscribe-to-newsletter/" className="link p-2">
                                    WirEng® North America
                                </Link>

                                <NavDropdown.Divider />

                                <Link to="/subscribe-to-newsletter/" className="link p-2">
                                    WirEng® Latin America
                                </Link> */}
                            </NavDropdown>

                        </Nav>
                        <Nav className="d-flex justify-content-end">
                            <Link to="/search" className="text-uppercase link">
                                Search for a WirEng® Product
                            </Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </>
    )
}
