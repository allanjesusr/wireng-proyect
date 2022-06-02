import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";

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
                <p style={{
                  fontSize: '1.4rem',
                  textAlign: 'center',
                }}>WirEng® is  the world’s leader in ultra-wide band cellular antennas and filed many patent applications, along with better ing FCC certified for advanced radio frequency devices that are currently in production. WirEng®’s founder, electrical engineer Sabino Leone (Summa Cum Laude BSEE from the University of Houston), started experimenting with radio waves since the age of seven, in Rome, Italy. At the age of 14, Sabino entered the ham radio business and quickly realized that standard CB radio antennas where quite inefficient for achieving large distances, and instead of purchasing amplifiers to increase range, he started experimenting with Yagi and other types of antennas, and was eventually able to have a brief connection with a ham radio member in Spain, reaching a distance of about a thousand miles with just 3 Watts of nominal power. The excitement resulting from such interaction prompted Sabino to pursue the amateur production of high-efficiency antennas, and a few years later, at the age of 16, Sabino started designing and producing FM-band antennas and small FM transmitters for neighborhood radio coverage (freedom radios). At the age of 19, Sabino opened his own FM radio station which was built entirely out of his own designs, including transistor and vacuum tube exciters, amplifiers, and all the resonant cavity filters needed to achieve spectral purity. At times, Sabino achieved the complete coverage of the entire city of Rome with a budget of just a few thousands of dollars, by employing radio bridges on nearby hills, such as Rocca di Papa and Monte Compatri. Since the age of 4, Sabino has also been experimenting with chemistry, mechanics, and a vast range of electronic devices such as music synthesizers, power speakers, audio consoles, etc., giving him unmatched experience in almost any field of electronics and physics. Sabino moved to the USA in 1988 and was involved in the cellular industry by 1995, with several ventures that culminated in the founding of WirEng® in 2008, with its official registration as a trademark in 2011.</p>
              </div>
            </div>

            <div>
              <div className="about__flexContainer">
                <div className="about__imageContainer">
                  <img 
                    src="https://wirengimages.s3.amazonaws.com/images/homeimages/wideant-5g.jpg"
                    alt="Image1" />
                </div>
                <div className="about__imageContainer">
                  <img 
                    src="https://wirengimages.s3.amazonaws.com/images/homeimages/mimomount_by_wireng_06.jpg"
                    alt="Image2" />
                </div>
                <div className="about__imageContainer">
                  <img 
                    src="https://wirengimages.s3.amazonaws.com/images/homeimages/wrg400-smam-ranm-20m_by_wireng_03.jpg"
                    alt="Image3" />
                </div>

              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  )
}
