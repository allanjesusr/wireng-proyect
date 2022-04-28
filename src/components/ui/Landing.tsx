import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';

import logo from '../../assets/images/logo/LOGO-VERSION.png';
import video from "../../assets/videos/WideAnt2-Plus-5G.mp4";

export const Landing = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home')
    }

    return (
        <>
            <Helmet>
                <title>WirEng® - WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas</title>
                <meta name="description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
                <meta name="keywords" content="WirEng®, antennas, atennas accesories" />

                <meta property="og:title" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
                <meta property="og:description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
            </Helmet>
            <div className="landing__container">
                <div
                    onClick={handleHomeClick}
                    className="landing__video-container pointer"
                >
                    <div className="landing__overlay" >
                        <img
                            src={logo}
                            alt="WirEng Logo"
                            className="landing__logo"
                        />
                    </div>

                    <div className="landing__video-wrapper">
                        <ReactPlayer
                            url={video}
                            controls={false}
                            className="landing__react-player"
                            playing
                            muted
                            loop
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>

                {/* <Footer /> */}
            </div>
        </>
    )
}
