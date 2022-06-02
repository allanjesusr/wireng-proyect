import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';


export const NewsAndSocialFooter = () => {

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
            Toast.fire({
                icon: 'success',
                title: 'Form sent successfully'
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
                    <div className="contact__news-container">
                        <div className="contact__contactHeader">
                            <h1>Subscribe to WirEng® Newsletter</h1>
                            {/* <span>Subscribe to the WirEng® New</span> */}
                        </div>

                        <div className="footer__news-form">
                            <form onSubmit={handleSubmit}>
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
