import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/Untitled Project.png";
import { useState } from 'react';

export const Navbar = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);

    const handleHome = () => {
        navigate('/home')
    }

    return (
        <div className="navbar__container">
            <nav className="navbar__navbar-container">
                <div className="navbar__logo-container">
                    <img 
                        src={ logo } 
                        alt ="Logo"
                        className="navbar__logo pointer"
                        onClick={ handleHome }    
                    />
                </div>

                <div className="navbar__navbar-links">
                    <NavDropdown title="Products" id="nav-dropdown">
                        <NavDropdown 
                            title="Direccional Ultra Wide Band Antennas" 
                            show={ show }
                            onMouseEnter={ () => setShow(true) }
                            onMouseLeave={ () => setShow(false) }
                        >
                            <NavDropdown 
                                title="DESKTOP/PORTABLE ANTENNAS" 
                                show={ show3 }
                                onMouseEnter={ () => setShow3(true) }
                                onMouseLeave={ () => setShow3(false) }
                            >
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/aeriadesk/" className="link">
                                    AeriaDesk™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1"><Link to="/aeriaflex/" className="link">
                                    AeriaFlex™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1"><Link to="/deskant/" className="link">
                                    DeskAnt™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1"><Link to="/domeant/" className="link">
                                    Domeant™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1"><Link to="/flexant/" className="link">
                                    Flexant™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1"><Link to="/omniant/" className="link">
                                    Omniant™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1"><Link to="/omniwide/" className="link">
                                    Onniwide™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.1"><Link to="/sleekant/" className="link">
                                    SleekAnt™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        
                            <NavDropdown 
                                title="CONCEALED/WALL/DOME ANTENNAS" 
                                show={ show4 }
                                onMouseEnter={ () => setShow4(true) }
                                onMouseLeave={ () => setShow4(false) }
                            >
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/domeant-alpha/" className="link">
                                        DomeAnt-Alpha™
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/domeant-delta/" className="link">
                                        DomeAnt-Delta™
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/domeant-gamma/" className="link">
                                        DomeAnt-Gamma™
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/domeaerial/" className="link">
                                        DomeAerial™
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/cubeant/" className="link">
                                        CubeAnt™
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/panelant/" className="link">
                                        PanAnt™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/wallant/" className="link">
                                        WallAnt™
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown 
                                title="ON-WINDOW ANTENNAS" 
                                show={ show5 }
                                onMouseEnter={ () => setShow5(true) }
                                onMouseLeave={ () => setShow5(false) }
                            >
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/empatch-v/" className="link">
                                        EMPatch-V™
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/maxwimax/" className="link">
                                        MaxWiMAX™
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/winaerial/" className="link">
                                        WinAerial™
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/winaerial2/" className="link">
                                        WinAerial2™
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown 
                                title="POLE/MAST MOUNT ANTENNAS" 
                                show={ show6 }
                                onMouseEnter={ () => setShow6(true) }
                                onMouseLeave={ () => setShow6(false) }
                            >
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/aerialight/" className="link">
                                        AeriaLight™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/aerialight2/" className="link">
                                        AeriaLight2™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/aerialight-plus/" className="link">
                                        AeriaLight-Plus™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/aerialight2-plus/" className="link">
                                        AeriaLight2-Plus™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/aerialight-mini/" className="link">
                                        AeriaLight-Mini™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/aerialog/" className="link">
                                        AeriaLog™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/aerialog-lite/" className="link">
                                        AeriaLog-Lite™
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/aeriawide75/" className="link">
                                        Aeriawide75™
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/giant/" className="link">
                                        GiAnt™
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/wideant/" className="link">
                                        WideAnt™
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/wideant-light/" className="link">
                                        WideAnt-Lite™ by WirEng®
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/yagiref-qlp/" className="link">
                                        YagiRef-QLP™
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/yagimax/" className="link">
                                        YagiMAX™
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/yagiref-plus/" className="link">
                                        YagiRef-Plus™
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                    <Link to="/yagiref-lite/" className="link">
                                        YagiRef-Lite™
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            </NavDropdown>

                            <NavDropdown.Divider />
                            <NavDropdown 
                                title="Legacy Antennas" 
                                show={ show2 }
                                onMouseEnter={ () => setShow2(true) }
                                onMouseLeave={ () => setShow2(false) }
                            >
                            <NavDropdown.Item eventKey="4.1">
                                <Link to="/empatch-v/" className="link">
                                    EMPatch-V™
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.1">
                                <Link to="/micropatch/" className="link">
                                    MicroPatch™
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.1">
                                <Link to="/maxwimax/" className="link">
                                    MaxWiMAX™
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.1">
                                <Link to="/omnimax/" className="link">
                                    OmniMAX™
                                </Link>
                            </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.1">
                                <Link to="/winmax/" className="link">
                                    WinMAX™
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown.Divider />
                        <NavDropdown 
                                title="Accesories" 
                                show={ show7 }
                                onMouseEnter={ () => setShow7(true) }
                                onMouseLeave={ () => setShow7(false) }
                            >
                            <NavDropdown.Item eventKey="4.1">
                                <Link to="/empatch-v/" className="link">
                                    UWB Combiners
                                </Link>
                                <Link to="/empatch-v/" className="link">
                                    UWB Lighting-Strike Arresters
                                </Link>
                                <Link to="/empatch-v/" className="link">
                                    UWB Coaxial Cables Assemblies
                                </Link>
                                <Link to="/empatch-v/" className="link">
                                    MIMO Brackets
                                </Link>
                                <Link to="/empatch-v/" className="link">
                                    Everything Else
                                </Link>
                            </NavDropdown.Item>
                            </NavDropdown>
                    </NavDropdown>

                    <NavDropdown title="Services" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Customer services" id="nav-dropdown">
                        
                        <NavDropdown 
                            title="Support" 
                            show={ show }
                            onMouseEnter={ () => setShow(true) }
                            onMouseLeave={ () => setShow(false) }
                        >
                            <NavDropdown.Item eventKey="4.4">
                                <Link to="/get-in-touch/" className="link">
                                    Support
                                </Link> 
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown.Divider />

                        <NavDropdown 
                            title="Newsletter" 
                            show={ show2 }
                            onMouseEnter={ () => setShow2(true) }
                            onMouseLeave={ () => setShow2(false) }
                        >
                            <NavDropdown.Item eventKey="4.4">
                                <Link to="/subscribe-to-newsletter/" className="link">
                                    Subscribe to the wireng newsletter
                                </Link> 
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown.Divider />
                        
                        <NavDropdown 
                            title="Contact Us" 
                            show={ show3 }
                            onMouseEnter={ () => setShow3(true) }
                            onMouseLeave={ () => setShow3(false) }
                        >
                            <NavDropdown.Item eventKey="4.4">
                                <Link to="/get-in-touch/" className="link">
                                    Get in Touch
                                </Link> 
                            </NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>
                </div>
            </nav>
        </div>
    )
}
