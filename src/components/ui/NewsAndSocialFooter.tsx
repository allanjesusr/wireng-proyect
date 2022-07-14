import { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


export const NewsAndSocialFooter = () => {

    const form = useRef<any>();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            console.log(values);
            emailjs.sendForm('service_elxo8mr', 'template_zlglupg', form.current, '8_6TH-IxPPzxN9XPY')
                .then((res) => {
                    console.log(res.text);
                    Toast.fire({
                        icon: 'success',
                        title: 'Form sent successfully'
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        })
    })

    return (
        <div className="footer__newsAndSocial-container">
            <div className="footer__box-container">
                <div className="footer__flexcontainer">
                    <div className="contact__news-container" id='newsletter'>
                        <div className="contact__contactHeader">
                            <h1>Subscribe to WirEng® Newsletter</h1>
                            {/* <span>Subscribe to the WirEng® New</span> */}
                        </div>

                        <div className="footer__news-form">
                            <form ref={form} onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    {...getFieldProps('email')}
                                    placeholder="Email"
                                    autoComplete="off"
                                    className='contact__input mt-5'
                                />
                                {touched.email && errors.email && <p className="contact__error"> {errors.email} </p>}
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
                                <li className="infoList-items"><i className="fa-solid fa-envelope"></i> info@wireng.com </li>
                            </ul>
                        </div>

                        <div className="footer__info-socialMedias">
                            <ul className="footer__socialMedias-container">
                                <div className="footer__socialMedias-container">
                                    <li className="footer__socialMedias-items"><img src="https://wirengimages.s3.amazonaws.com/images/instagram-icon.png" alt="instagram-icon" /></li>
                                    <li className="footer__socialMedias-items"><img src="https://wirengimages.s3.amazonaws.com/images/whatsapp-icon.png" alt="whatsapp-icon" /></li>
                                    <li className="footer__socialMedias-items"><img src="https://wirengimages.s3.amazonaws.com/images/facebook-icon.png" alt="facebook-icon" /></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
