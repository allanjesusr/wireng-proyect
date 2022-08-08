import { Link, useNavigate, NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';



export const NavbarComponent = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    return (
        <>
            <Navbar expand="lg" className="navbar__container" collapseOnSelect>
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
                            {/* Products Section Navbar */}
                            <NavDropdown title="Products" id="collasible-nav-dropdown">
                                <LinkContainer to='/all-products/antennas'>
                                    <NavDropdown.Item>Antennas by WirEng®</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/all-products/antenna-accesories">
                                    <NavDropdown.Item>Antenna Accesories by WirEng®</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/* Services Section NavBar */}
                            <NavDropdown title="Services" id="nav-dropdown">
                                <LinkContainer to='/custom-product-inquiry/'>
                                    <NavDropdown.Item>Custom Product Inquiry</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/government-military-inquiry/">
                                    <NavDropdown.Item>Government/Military Inquiry</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/b2b-oem-inquiry/">
                                    <NavDropdown.Item>B2B/OEM Inquiry</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/resellership-inquiry/">
                                    <NavDropdown.Item>Resellership Inquiry</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/distributorship-inquiry/">
                                    <NavDropdown.Item>Distributorship Inquiry</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/affiliate-proposal/">
                                    <NavDropdown.Item>Affiliate/Partnership Proposal</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/* Contact Section Navbar */}
                            <NavDropdown title="Contact Us" id="nav-dropdown">
                                <LinkContainer to="/get-in-touch/">
                                    <NavDropdown.Item>Get in Touch</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/pre-sales-support/">
                                    <NavDropdown.Item>Pre-Sales Technical Support</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/support/">
                                    <NavDropdown.Item>Post-Sales Technical Support</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/affiliate-proposal/">
                                    <NavDropdown.Item>Affiliate Proposal</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/* About Section Navbar */}
                            <NavDropdown title="About Us" id="nav-dropdown">
                                <LinkContainer to="/about-wireng/">
                                    <NavDropdown.Item>About WirEng®</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            <NavDropdown title="WirEng® Dealer Locator" id="nav-dropdown">
                                <LinkContainer to="/dealer-locator/">
                                    <NavDropdown.Item>WirEng® in the World</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                        </Nav>
                        <Nav className="d-flex justify-content-end">
                            <LinkContainer to="/search">
                                <Nav.Link className="text-uppercase">Search for a WirEng® Product</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </>
    )
}
