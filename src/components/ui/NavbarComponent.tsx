import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, NavDropdown} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import logo from "../../assets/images/logo/LOGO-VERSION.png";

export const NavbarComponent = () => {

    const navigate = useNavigate();
    
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);

    const handleHome = () => {
        navigate('/home');
    }

    return (
        <div className="navbar__container">
            <Navbar expand="sm" >
                <Container fluid>
                    <Navbar.Brand href="#">
                    <div className="navbar__logo-container">
                        <img 
                            src={ logo } 
                            alt ="Logo"
                            className="navbar__logo pointer"
                            onClick={ handleHome }
                            id="nav-top"    
                        />
                    </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <div className="navbar__navbar-links">
                            <NavDropdown title="Products" id="nav-dropdown">
                                <NavDropdown 
                                title="Directional Ultra Wide Band Antennas" 
                                show={ show }
                                onMouseEnter={ () => setShow(true) }
                                onMouseLeave={ () => setShow(false) }
                            >
                                <NavDropdown 
                                    title="Antenna Selection Wizard" 
                                    show={ show3 }
                                    onMouseEnter={ () => setShow3(true) }
                                    onMouseLeave={ () => setShow3(false) }
                                    drop="end"
                                    id="nav-dropdown"
                                >
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/aeriadesk/" className="link">
                                        AeriaDesk™ by WirEng®
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            
                                <NavDropdown 
                                    title="Single Directional Antennas" 
                                    show={ show4 }
                                    onMouseEnter={ () => setShow4(true) }
                                    onMouseLeave={ () => setShow4(false) }
                                    drop="end"
                                    id="nav-dropdown"
                                >
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant-5g/" className="link">
                                            WideAnt-5G™
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant-plus-5g/" className="link">
                                            WideAnt-Plus-5G™
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/giant-5g/" className="link">
                                            GiAnt-5G™
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown 
                                    title="MIMO 2x2 Directional Antennas" 
                                    show={ show5 }
                                    onMouseEnter={ () => setShow5(true) }
                                    onMouseLeave={ () => setShow5(false) }
                                    drop="end"
                                    id="nav-dropdown"
                                >
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant2-5g/" className="link">
                                            WideAnt2-5G™
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant2-plus-5g/" className="link">
                                            WideAnt2-Plus-5G™
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant2-plus-5g-ref/" className="link">
                                            WideAnt2-Plus-5G-Ref™
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown 
                                    title="MIMO 4x2 Directional Antennas" 
                                    show={ show6 }
                                    onMouseEnter={ () => setShow6(true) }
                                    onMouseLeave={ () => setShow6(false) }
                                    drop="end"
                                    id="nav-dropdown"
                                >
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant4-5g-4x2/" className="link">
                                            WideAnt4-5G-4x2™
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant4-plus-5g-4x2/" className="link">
                                            WideAnt4-Plus-5G-4x2™
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown 
                                    title="MIMO 4x4 Directional Antennas" 
                                    show={ show7 }
                                    onMouseEnter={ () => setShow7(true) }
                                    onMouseLeave={ () => setShow7(false) }
                                    drop="end"
                                    id="nav-dropdown"
                                >
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant4-5g-4x4/" className="link">
                                            WideAnt4-5G-4x4™
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant4-plus-5g-4x4/" className="link">
                                            WideAnt4-Plus-5G-4x4™
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown 
                                    title="MIMO 8x2 Directional Antennas" 
                                    show={ show8 }
                                    onMouseEnter={ () => setShow8(true) }
                                    onMouseLeave={ () => setShow8(false) }
                                    drop="end"
                                    id="nav-dropdown"
                                >
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant8-5g-8x2/" className="link">
                                            WideAnt8-5G-8x2™
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant8-plus-5g-8x2/" className="link">
                                            WideAnt8-Plus-5G-8x2™
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown 
                                    title="MIMO 8x4 Directional Antennas" 
                                    show={ show9 }
                                    onMouseEnter={ () => setShow9(true) }
                                    onMouseLeave={ () => setShow9(false) }
                                    drop="end"
                                    id="nav-dropdown"
                                >
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant8-5g-8x4/" className="link">
                                            WideAnt8-5G-8x4™
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant8-plus-5g-8x4/" className="link">
                                            WideAnt8-Plus-5G-8x4™
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown 
                                    title="MIMO 8x8 Directional Antennas" 
                                    show={ show10 }
                                    onMouseEnter={ () => setShow10(true) }
                                    onMouseLeave={ () => setShow10(false) }
                                    drop="end"
                                    id="nav-dropdown"
                                >
                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant8-5g-8x8/" className="link">
                                            WideAnt8-5G-8x8™
                                        </Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item eventKey="4.1">
                                        <Link to="/wideant8-plus-5g-8x8/" className="link">
                                            WideAnt8-Plus-5G-8x8™
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                </NavDropdown>

                                <NavDropdown.Divider />

                                <NavDropdown 
                                    title="Omnidirectional Ultra Wide Band Antennas" 
                                    show={ show11 }
                                    onMouseEnter={ () => setShow11(true) }
                                    onMouseLeave={ () => setShow11(false) }
                                >
                                    <NavDropdown 
                                    title="MIMO 2x2 Omni Antennas" 
                                    show={ show3 }
                                    onMouseEnter={ () => setShow3(true) }
                                    onMouseLeave={ () => setShow3(false) }
                                    drop="end"
                                    id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial2-5g/" className="link">
                                                Omnirial2-5G™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial2-plus-5g/" className="link">
                                                Omnirial2-Plus-5G™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/gigamimo-plus-5g/" className="link">
                                                GigaMIMO-Plus-5G™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/gigamimo16-plus-5g-2x2/" className="link">
                                                GigaMIMO16-Plus-5G-2x2™
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                            
                                    <NavDropdown 
                                        title="MIMO 4x2 Omni Antennas" 
                                        show={ show4 }
                                        onMouseEnter={ () => setShow4(true) }
                                        onMouseLeave={ () => setShow4(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial4-5g-4x2/" className="link">
                                                Omnirial4-5G-4x2™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial4-plus-5g-4x2/" className="link">
                                                Omnirial4-Plus-5G-4x2™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/gigamimo16-plus-5g-4x2/" className="link">
                                                GigaMIMO16-Plus-5G-4x2™
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown 
                                        title="MIMO 4x4 Omni Antennas" 
                                        show={ show5 }
                                        onMouseEnter={ () => setShow5(true) }
                                        onMouseLeave={ () => setShow5(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial4-5g-4x4/" className="link">
                                                Omnirial4-5G-4x4™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial4-plus-5g-4x4/" className="link">
                                                Omnirial4-Plus-5G-4x4™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/gigamimo16-plus-5g-4x4/" className="link">
                                                GigaMIMO16-Plus-5G-4x4™
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown 
                                        title="MIMO 8x2 Omni Antennas" 
                                        show={ show6 }
                                        onMouseEnter={ () => setShow6(true) }
                                        onMouseLeave={ () => setShow6(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial8-5g-8x2/" className="link">
                                                Omnirial8-5G-8x2™
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial8-plus-5g-8x2/" className="link">
                                                Omnirial8-Plus-5G-8x2™
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown 
                                        title="MIMO 8x4 Omni Antennas" 
                                        show={ show7 }
                                        onMouseEnter={ () => setShow7(true) }
                                        onMouseLeave={ () => setShow7(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial8-5g-8x4/" className="link">
                                                Omnirial8-5G-8x4™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial8-5g-8x8/" className="link">
                                                Omnirial8-Plus-5G-8x4™
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown 
                                        title="MIMO 8x8 Omni Antennas" 
                                        show={ show8 }
                                        onMouseEnter={ () => setShow8(true) }
                                        onMouseLeave={ () => setShow8(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial8-plus-5g-8x8/" className="link">
                                                Omnirial8-5G-8x8™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/omnirial8-plus-5g-8x8/" className="link">
                                                Omnirial8-Plus-5G-8x8™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/octant-5g/" className="link">
                                                OctAnt-5G™
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    </NavDropdown>

                                <NavDropdown.Divider />

                                <NavDropdown 
                                    title="Drone Antennas" 
                                    show={ show2 }
                                    onMouseEnter={ () => setShow2(true) }
                                    onMouseLeave={ () => setShow2(false) }
                                >
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/droneant/" className="link">
                                        DroneAnt™
                                    </Link>
                                    <Link to="/droneant-plus/" className="link">
                                        DroneAnt-Plus™
                                    </Link>
                                    <Link to="/droneant16/" className="link">
                                        DroneAnt16™
                                    </Link>
                                    <Link to="/droneant16-plus/" className="link">
                                        DroneAnt16-Plus™
                                    </Link>
                                </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown.Divider />

                                <NavDropdown 
                                    title="Accesories" 
                                    show={ show12 }
                                    onMouseEnter={ () => setShow12(true) }
                                    onMouseLeave={ () => setShow12(false) }
                                >
                                    <NavDropdown 
                                        title="UWB Combiners" 
                                        show={ show3 }
                                        onMouseEnter={ () => setShow3(true) }
                                        onMouseLeave={ () => setShow3(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/comb2-5g/" className="link">
                                                Comb2-5G™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/comb3-5g/" className="link">
                                                Comb3-5G™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/comb4-5g/" className="link">
                                                Comb4-5G™
                                            </Link>
                                        </NavDropdown.Item>

                                    </NavDropdown>
                            
                                    <NavDropdown 
                                        title="UWB Lightning-Strike Arresters" 
                                        show={ show4 }
                                        onMouseEnter={ () => setShow4(true) }
                                        onMouseLeave={ () => setShow4(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/lightning-pro-5g-sma/" className="link">
                                                Lightning-Pro-5G-SMA™
                                            </Link>
                                        </NavDropdown.Item>

                                    </NavDropdown>

                                    <NavDropdown 
                                        title="UWB Coaxial Cables Assemblies" 
                                        show={ show5 }
                                        onMouseEnter={ () => setShow5(true) }
                                        onMouseLeave={ () => setShow5(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/wrg400-smam-nm-10m-au/" className="link">
                                                WRG400-SMAM-NM-10M-AU™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/wrg400-smam-nm-20m-au/" className="link">
                                                WRG400-SMAM-NM-20M-AU™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/wrg400-smam-ra-nm-10m-au/" className="link">
                                                WRG400-SMAM-RA-NM-10M-AU™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/wrg400-smam-ra-nm-20m-au/" className="link">
                                                WRG400-SMAM-RA-NM-20M-AU	™
                                            </Link>
                                        </NavDropdown.Item>

                                    </NavDropdown>

                                    <NavDropdown 
                                        title="MIMO Brackets" 
                                        show={ show6 }
                                        onMouseEnter={ () => setShow6(true) }
                                        onMouseLeave={ () => setShow6(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/mimomount2x2/" className="link">
                                                MIMOMount-2x2™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/mimomount4x4/" className="link">
                                                MIMOMount-4x4™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/mimomount8x8/" className="link">
                                                MIMOMount-8x8™
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown 
                                        title="Everything Else" 
                                        show={ show7 }
                                        onMouseEnter={ () => setShow7(true) }
                                        onMouseLeave={ () => setShow7(false) }
                                        drop="end"
                                        id="nav-dropdown"
                                    >
                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/extant-smaf-smam/" className="link">
                                                EXTANT-SMAF-SMAM™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/extant-smaf-tncm/" className="link">
                                                EXTANT-SMAF-TNCM™
                                            </Link>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item eventKey="4.1">
                                            <Link to="/extant-smaf-ts9/" className="link">
                                                EXTANT-SMAF-TS9™
                                            </Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>
                            </NavDropdown>

                        <NavDropdown title="Services" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.4">
                                <Link to="/subscribe-to-newsletter/" className="link">
                                    Custom Product Request
                                </Link> 
                            </NavDropdown.Item>

                            <NavDropdown.Item eventKey="4.4">
                                <Link to="/subscribe-to-newsletter/" className="link">
                                    Government/Military Relations
                                </Link> 
                            </NavDropdown.Item>

                            <NavDropdown.Item eventKey="4.4">
                                <Link to="/subscribe-to-newsletter/" className="link">
                                    B2B/OEM Relations
                                </Link> 
                            </NavDropdown.Item>

                            <NavDropdown.Item eventKey="4.4">
                                <Link to="/subscribe-to-newsletter/" className="link">
                                B2B Partnerships
                                </Link> 
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Contact Us" id="nav-dropdown">
                            
                            <NavDropdown 
                                title="Support" 
                                show={ show }
                                onMouseEnter={ () => setShow(true) }
                                onMouseLeave={ () => setShow(false) }
                                drop="end"
                                id="nav-dropdown"
                            >
                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/get-in-touch/" className="link">
                                        Support
                                    </Link> 
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown.Divider />
                            
                            <NavDropdown 
                                title="Contact Us" 
                                show={ show3 }
                                onMouseEnter={ () => setShow3(true) }
                                onMouseLeave={ () => setShow3(false) }
                                drop="end"
                                id="nav-dropdown"
                            >
                                <NavDropdown.Item eventKey="4.4">
                                    <Link to="/get-in-touch/" className="link">
                                        Get in Touch
                                    </Link> 
                                </NavDropdown.Item>
                            </NavDropdown>
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

                            <NavDropdown.Item eventKey="4.4">
                                <Link to="/subscribe-to-newsletter/" className="link">
                                    WirEng® Europe
                                </Link> 
                            </NavDropdown.Item>

                            <NavDropdown.Item eventKey="4.4">
                                <Link to="/subscribe-to-newsletter/" className="link">
                                    WirEng® North America
                                </Link> 
                            </NavDropdown.Item>

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
