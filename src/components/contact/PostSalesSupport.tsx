import { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const PostSalesSupport = () => {

  const form = useRef<any>();

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      Name: '',
      email: '',
      email2: '',
      phone: '',
      subject: '',
      message: ''
    },
    onSubmit: values => {
      console.log(values);
      emailjs.sendForm('service_elxo8mr', 'template_pulz8yp', form.current, '8_6TH-IxPPzxN9XPY')
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
      Name: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      email2: Yup.string()
        .email('Invalid email address')
        .oneOf([Yup.ref("email"), null], "Emails must match")
        .required('Required'),
      phone: Yup.string()
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Invalid phone number')
        .required('Required'),
      subject: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('Required'),
      message: Yup.string()
        .max(1000, 'Must be 1000 characters or less')
        .required('Required')
    })
  });

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

  return (

    <>
      <div className="contact__web-container">
        <div className="contact__container">

          <div className="contact__flexContent">
            <div className="contact__getIn-container">
              <div className="contact__contactHeader">
                <h1>Post-Sales technical support</h1>
                <p>To get in touch with a WirEng® team member, please complete the form below </p>
              </div>

              <form ref={form} onSubmit={handleSubmit}>
                <div className="contact__form-container">

                  <input
                    type="text"
                    placeholder="Name"
                    {...getFieldProps('Name')}
                    autoComplete="off"
                    className='contact__input mt-5'
                  />

                  {touched.Name && errors.Name && <p className="contact__error"> {errors.Name} </p>}

                  <input
                    type="email"
                    {...getFieldProps('email')}
                    placeholder="Email"
                    autoComplete="off"
                    className='contact__input mt-5'
                  />

                  {touched.email && errors.email && <p className="contact__error"> {errors.email} </p>}

                  <input
                    type="email"
                    {...getFieldProps('email2')}
                    placeholder="Email again"
                    autoComplete="off"
                    className='contact__input mt-5'
                  />

                  {touched.email2 && errors.email2 && <p className="contact__error"> {errors.email2} </p>}

                  <input
                    type="tel"
                    {...getFieldProps('phone')}
                    placeholder="Phone Number"
                    autoComplete="off"
                    className='contact__input mt-5'
                  />

                  {touched.phone && errors.phone && <p className="contact__error"> {errors.phone} </p>}

                  <input
                    type="text"
                    {...getFieldProps('subject')}
                    placeholder="Subject"
                    autoComplete="off"
                    className='contact__input mt-5'
                  />

                  {touched.subject && errors.subject && <p className="contact__error"> {errors.subject} </p>}

                  <textarea
                    {...getFieldProps('message')}
                    className="contact__textarea mt-5"
                    placeholder="Your Message"
                  ></textarea>

                  {touched.message && errors.message && <p className="contact__error"> {errors.message} </p>}

                </div>
                <button
                  type='submit'
                  className="button button-block mt-5"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="contact__infoContainer">
              <div className="contact__infoContent">
                <div className="contact__infoHeader">
                  <h1>Contact Info</h1>
                </div>
                <div className="contact__infoList-elements">
                  <ul className="infoList">
                    <li className="infoList-items"><i className="fa-solid fa-location-dot" style={{ color: '#10069F' }}></i> To get in touch with a WirEng® team member, please complete the form below </li>
                    <li className="infoList-items"><i className="fa-solid fa-envelope" style={{ color: '#10069F' }}></i> info@wireng.com </li>
                    <li className="infoList-items"><i className="fa-solid fa-phone" style={{ color: '#10069F' }}></i> +1-512-588-3638</li>
                  </ul>
                </div>

                <div className="contact__info-socialMedias">
                  <ul className="contact__socialMedias-container">
                    <div>
                      <li className="contact__socialMedias-items"><img src="https://wirengimages.s3.amazonaws.com/images/instagram-icon.png" alt="instagram-icon" /></li>
                      <li className="contact__socialMedias-items"><img src="https://wirengimages.s3.amazonaws.com/images/whatsapp-icon.png" alt="whatsapp-icon" /></li>

                    </div>
                    <div>
                      <li className="contact__socialMedias-items"><img src="https://wirengimages.s3.amazonaws.com/images/facebook-icon.png" alt="facebook-icon" /></li>
                      <li className="contact__socialMedias-items"><img src="https://wirengimages.s3.amazonaws.com/images/email-icon.png" alt="email-icon" /></li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
