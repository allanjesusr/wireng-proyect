import { VideoLanding } from '../../helpers/VideoLanding';
import { Footer } from './Footer';

export const Landing = () => {

    return (
        <div className="landing__container">
            <div>
                <VideoLanding />
            </div>
            <Footer />
        </div>
    )
}
