import { Footer } from "../ui/Footer";
import { NavbarComponent } from "../ui/NavbarComponent";

import img1 from '../../assets/images/about/wideant-5g-fba_by_wireng_06.jpg';
import img2 from '../../assets/images/about/mimomount_by_wireng_06.jpg';
import img3 from '../../assets/images/about/WRG400-SMAM-NM-20M-AU-90Degrade.png';


export const AboutScreen = () => {
    return (
      <div>
        <NavbarComponent />
        <div className="about__container">
          <div className="about__content">
            <div className="about__header">
              <h1>About WirEng®</h1>
              <div>
                <p>The WideAnt4-Plus-5G™ by WirEng® is a 5G and 4G true ±45° MIMO (45° clockwise and 45° counter-clockwise wave polarizations), fully enclosed, all-weather, ultra-linear, larger Quad Antenna for outdoor/pole/mast installations. The WideAnt4-5G™ represents a true technological breakthrough as one of the widest-band antennas in the world as of today. The WideAnt4-Plus-5G™ can be used with a variety of 5G, 4G, 3G, and 2G radio equipment systems, including MIMO modems</p>
              </div>
            </div>

            <div>
              <div className="about__flexContainer">
                <div className="about__imageContainer">
                  <img src={ img1 } alt="Image1" />
                </div>
                <div className="about__imageContainer">
                  <img src={ img2 } alt="Image2" />
                </div>
                <div className="about__imageContainer">
                  <img src={ img3 } alt="Image3" />
                </div>
                
              </div>
            </div>
          </div>

          <div className="about__services-container">
            <div className="about__servicesHeader">
              <h1>Services</h1>
            </div>

            <div className="about__servicesFlex">
              <div className="about__servicesContent">
                <div className="about__servicesImageContent">

                </div>
                <p> Custom Product request </p>
              </div>
              <div className="about__servicesContent">
                <div className="about__servicesImageContent">

                </div>
                <p>Goverment/military relationships</p>
              </div>
              <div className="about__servicesContent">
                <div className="about__servicesImageContent">

                </div>
                <p>B2B/OEM relations</p>
              </div>
              <div className="about__servicesContent">
                <div className="about__servicesImageContent">

                </div>
                <p>B2B Partnerships</p>
              </div>
            </div>
          </div>

          <div className="about__lastContainer">
            <div className="about__lastHeader">
              <h1>Latest New</h1>
            </div>
            
            <div className="about__lastFlexContainer">
              <div className="about__last-imageContainer"></div>
              <div className="about__last-textContainer">
                <h3>Coming Models</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
              </div>

              <div className="about__last-imageContainer"></div>
              <div className="about__last-textContainer">
                <h3>Coming Models</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
              </div>
              <div className="about__last-imageContainer"></div>
              <div className="about__last-textContainer">
                <h3>Coming Models</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
              </div>
              <div className="about__last-imageContainer"></div>
              <div className="about__last-textContainer">
                <h3>Coming Models</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quasi nostrum quibusdam, eos consequuntur, sapiente neque tempora beatae sit molestiae!</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}
