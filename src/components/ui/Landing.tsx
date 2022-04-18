import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

// import { Footer } from './Footer';

import logo from '../../assets/images/logo/LOGO-VERSION.png';
import video from "../../assets/videos/WideAnt2-Plus-5G.mp4";
import { NewsAndSocialFooter } from './NewsAndSocialFooter';

export const Landing = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home')
    }

    return (
        <div className="landing__container">
            <div 
                onClick={ handleHomeClick }
                className="landing__video-container pointer"
            >
                <div className="landing__overlay" >
                    <img 
                        src={ logo } 
                        alt="WirEng Logo" 
                        className="landing__logo"
                    />
                </div>

                <div className="landing__video-wrapper">
                    <ReactPlayer 
                        url={ video }
                        controls={ false }
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
    )
}
