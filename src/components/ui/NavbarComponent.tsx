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
                                src="https://wirengimages.s3.amazonaws.com/images/logoswireng/wireng_homepage_logo2.jpg"
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
                                <NavDropdown.Item as={Link} to="/all-products/antennas" className="link p-2">Antennas by WirEng®</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/all-products/antenna-accesories" className="link p-2">Antenna Accesories by WirEng®</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Services" id="nav-dropdown">
                                <NavDropdown.Item as={Link} to="/custom-product-inquiry/" className="link p-2">Custom Product Inquiry</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/government-military-inquiry/" className="link p-2">Government/Military Inquiry</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/b2b-oem-inquiry/" className="link p-2">B2B/OEM Inquiry</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/resellership-inquiry/" className="link p-2">Resellership Inquiry</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/distributorship-inquiry/" className="link p-2">Distributorship Inquiry</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/affiliate-proposal/" className="link p-2">Affiliate/Partnership Proposal</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Contact Us" id="nav-dropdown">
                                <NavDropdown.Item as={Link} to="/get-in-touch/" className="link p-2">Get in Touch</NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item as={Link} to="/pre-sales-support/" className="link p-2">Pre-Sales Technical Support</NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item as={Link} to="/support/" className="link p-2">Post-Sales Technical Support</NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item as={Link} to="/affiliate-proposal/" className="link p-2">Affiliate Proposal</NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown title="About Us" id="nav-dropdown">
                                <NavDropdown.Item as={Link} to="/about-wireng/" className="link p-2">About WirEng®</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="WirEng® Dealer Locator" id="nav-dropdown">
                                <NavDropdown.Item as={Link} to="/dealer-locator/" className="link p-2">WirEng® in the World</NavDropdown.Item>

                            </NavDropdown>

                        </Nav>
                        <Nav className="d-flex justify-content-end">
                            <Nav.Link as={Link} to="/search" className="text-uppercase link">Search for a WirEng® Product</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </>
    )
}
