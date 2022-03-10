import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/images/logo/Untitled Project.png';
import video from "../assets/videos/WideAnt2-Plus-5G.mp4";


export const VideoLanding = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home')
    }

    return (
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
        
    )
}
