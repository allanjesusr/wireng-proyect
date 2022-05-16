import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";

import img1 from '../../assets/images/about/wideant-5g-fba_by_wireng_06.jpg';
import img2 from '../../assets/images/about/mimomount_by_wireng_06.jpg';
import img3 from '../../assets/images/about/WRG400-SMAM-NM-20M-AU-90Degrade.png';


export const AboutScreen = () => {
  return (
    <>
      <Helmet>
        <title>About WirEng® | WirEng®</title>
        <meta name="description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
        <meta name="keywords" content="WirEng®, antennas, atennas accesories" />

        <meta property="og:title" content="Antennas Accesories by WirEng® | WirEng®" />
        <meta property="og:description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
      </Helmet>
      <Container>
        <div className="about__container">
          <div className="about__content">
            <div className="about__header">
              <h1>About WirEng®</h1>
              <div className="mt-5 mb-5">
                <p>WirEng® is  the world’s leader in ultra-wide band cellular antennas and holds many patent applications, along with USA FCC certifications for advanced RF devices that are currently in production. WirEng®’s founder, electrical engineer Sabino Leone, started experimenting with radio waves since the age of seven, in Rome, Italy. At the age of 14, Sabino entered the ham radio business and quickly realized that standard CB radio antennas where quite inefficient for achieving large distances, and instead of purchasing amplifiers to increase range, he started experimenting with Yagi and other types of antennas and eventually was able to have a brief connection with a ham radio member in Spain, reaching a distance of about a thousand miles with just 3 Watts of nominal power. The excitement resulting from such interaction prompted Sabino to pursue the amateur production of high-efficiency antennas, and a few years later, at the age of 16, Sabino started designing and producing FM-band antennas and small FM transmitters for neighborhood radio coverage (freedom radios). At the age of 19, Sabino opened his own FM radio station which was built entirely out of his own designs, including transistor and vacuum tube exciters, amplifiers, and cavity filters for spectral purity. At times, he achieved the complete coverage of the entire city of Rome with a budget of just a few thousand of dollars, by employing radio bridges on nearby hills, such as Rocca di Papa and Monte Compatri. Since the age of 4, Sabino has also been experimenting with chemistry, mechanics, and a vast range of electronic devices such as music synthesizers, power speakers, audio consoles, etc., giving him unmatched experience in almost any field of physics. Sabino moved to the USA in 1988 and was involved in the cellular industry by 1995, with several ventures that culminated in the founding of WirEng® in 2008, with official registration in 2011.</p>
              </div>
            </div>

            <div>
              <div className="about__flexContainer">
                <div className="about__imageContainer">
                  <img src={img1} alt="Image1" />
                </div>
                <div className="about__imageContainer">
                  <img src={img2} alt="Image2" />
                </div>
                <div className="about__imageContainer">
                  <img src={img3} alt="Image3" />
                </div>

              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}
