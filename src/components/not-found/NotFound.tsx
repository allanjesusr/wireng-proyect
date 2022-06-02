import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';


export const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 Page not found | WirEng®</title>
                <meta name="description" content="404 Page not found | WirEng®" />
                <meta name="keywords" content="WirEng®, 404 Page not found, go home" />

                <meta property="og:title" content="404 Page not found | WirEng®" />
                <meta property="og:description" content="404 Page not found | WirEng®" />
            </Helmet>
            <Container>
                <div className="d-flex justify-content-center align-items-center p-5" style={{
                    height: '100vh',
                }}>
                    <div>
                        <h1>404</h1>
                        <p>Page not found</p>
                        <Link to='/'>Go to Home</Link>
                    </div>

                </div>

            </Container>
        </>
    )
}
