import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { Footer } from './Footer';

import logo from '../../assets/images/logo/Untitled-Project.png';
import video from "../../assets/videos/WideAnt2-Plus-5G.mp4";

export const Landing = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home')
    }

    return (
        <div className="landing__container">
            <div>
            <div 
                onClick={ handleHomeClick }
                className="video__container pointer">
            <div className="video__overlay" >
                <div className="video__logo pointer">
                    <img 
                        src={ logo } 
                        alt="WirEng Logo" 
                        className="logo"
                    />
                </div>
            </div>
            <div className="video__video-wrapper">
                <ReactPlayer 
                    url={ video }
                    controls={ false }
                    className="video__react-player"
                    playing 
                    muted
                    loop
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
            </div>
            <Footer />
        </div>
    )
}
