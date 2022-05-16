

export const NewsAndSocialFooter = () => {
    return (
        <div className="footer__newsAndSocial-container">
            <div className="footer__box-container">
                <div className="footer__flexcontainer">
                    <div className="contact__news-container">
                        <div className="contact__contactHeader">
                            <h1>Subscribe to WirEng® Newsletter</h1>
                            {/* <span>Subscribe to the WirEng® New</span> */}
                        </div>

                        <div className="footer__news-form">
                            <form>
                                <input 
                                    placeholder="Email"
                                    autoComplete="off"
                                    className='contact__input mt-5'
                                />
                                <button
                                    type='submit'
                                    className="button button-block mt-5"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="footer__infoContainer">
                        <div className="footer__infoHeader">
                            <h1>Contact Info</h1>
                        </div>

                        <div className="footer__infoList-elements">
                            <ul className="infoList">
                                <li className="infoList-items"><i className="fa-solid fa-envelope"></i> wirengdirect@gmail.com</li>
                            </ul>
                        </div>

                        <div className="footer__info-socialMedias">
                            <ul >
                                <div className="footer__socialMedias-container">
                                    <li className="footer__socialMedias-items"><i className="fa-brands fa-whatsapp"></i></li>
                                    <li className="footer__socialMedias-items"><i className="fa-brands fa-instagram"></i></li>
                                    <li className="footer__socialMedias-items"><i className="fa-brands fa-facebook"></i></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
