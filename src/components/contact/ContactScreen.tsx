import { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const ContactScreen = () => {

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
      Name: '',
      email: '',
      email2: '',
      subject: '',
      message: '',
      image: '',
    },
    onSubmit: values => {
      console.log(values);
      emailjs.sendForm('service_85jhcih', 'template_ac26942', form.current, 'juEPiuXfYAhu5N7V4')
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
      subject: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('Required'),
      message: Yup.string()
        .max(1000, 'Must be 1000 characters or less')
        .required('Required')
    })
  });



  return (

    <>
      <div className="contact__web-container">
        <div className="contact__container">

          <div className="contact__flexContent">
            <div className="contact__getIn-container">
              <div className="contact__contactHeader">
                <h1> Get In Touch</h1>
                <p>To get in touch with a WirEng® team member, please complete the form below</p>
              </div>

              <form ref={form} onSubmit={handleSubmit}>
                <div className="contact__form-container">

                  <input
                    type="text"
                    placeholder="Your Name"
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

                  {/* <label
                    className='mt-2 mb-2'
                    style={{ fontSize: '1.2rem' }}
                  >Choose file to upload (Optional).</label>
                  <input
                    type="file"
                    {...getFieldProps('image')}
                    accept=".jpg, .jpeg, .png"
                    multiple
                  /> */}

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
                    <li className="infoList-items"><i className="fa-solid fa-location-dot"></i> To get in touch with a WirEng® team member, please complete the form below </li>
                    <li className="infoList-items"><i className="fa-solid fa-envelope"></i> info@wireng.com </li>
                    <li className="infoList-items"><i className="fa-solid fa-phone"></i> +1-512-588-3638</li>
                  </ul>
                </div>

                <div className="contact__info-socialMedias">
                  <ul className="contact__socialMedias-container">
                    <div>
                      <li className="contact__socialMedias-items"><i className="fa-brands fa-whatsapp"></i></li>
                      <li className="contact__socialMedias-items"><i className="fa-solid fa-envelope"></i></li>
                    </div>

                    <div>
                      <li className="contact__socialMedias-items"><i className="fa-brands fa-instagram"></i></li>
                      <li className="contact__socialMedias-items"><i className="fa-brands fa-facebook"></i></li>
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
