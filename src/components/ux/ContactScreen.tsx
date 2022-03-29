import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import { Footer } from '../ui/Footer';
import { NavbarComponent } from '../ui/NavbarComponent';

export const ContactScreen = () => {

  const form = useRef<any>();

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      Name: '',
      email: '',
      subject: ''
    },
    onSubmit: values => {
      console.log(values);
      emailjs.sendForm('service_85jhcih', 'template_ac26942', form.current, 'juEPiuXfYAhu5N7V4')
            .then( (res) => {
              console.log(res.text);
              Toast.fire({
                icon: 'success',
                title: 'Form sent successfully'
              })
            })
            .catch( (err) => {
              console.log(err)
            })
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      subject: Yup.string()
        .max(15, 'Must be 15 characters or less')
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
  })
  return (

    <>
      <NavbarComponent />
        <div className="contact__web-container">
          <div className="contact__container">

            <div className="contact__flexContent">
              <div className="contact__getIn-container">
                <div className="contact__contactHeader">
                  <h1> Get In Touch </h1>
                  <p>To get in touch with a WirEng team member, please complete the form below </p>
                </div>

                <form ref={ form } onSubmit={ handleSubmit }>
                  <div className="contact__form-container">

                    <input
                      type="text"
                      placeholder="Your Name"
                      { ...getFieldProps('Name') } 
                      autoComplete="off"
                      className='contact__input mt-5' 
                    />

                    { touched.Name && errors.Name && <p className="contact__error"> { errors.Name } </p>}

                    <input
                      type="email"
                      { ...getFieldProps('email') } 
                      placeholder="Email"
                      autoComplete="off"
                      className='contact__input mt-5'
                    />
                    
                    { touched.email && errors.email && <p className="contact__error"> { errors.email } </p> }

                    <input
                      type="text"
                      { ...getFieldProps('subject') } 
                      placeholder="Subject"
                      autoComplete="off"
                      className='contact__input mt-5'
                    />
                    
                    { touched.subject && errors.subject && <p className="contact__error"> { errors.subject } </p> }

                    <textarea 
                      name='message'
                      className="contact__textarea mt-5"
                      placeholder="Your Message"
                    ></textarea>
                    
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
                      <li className="infoList-items"><i className="fa-solid fa-location-dot"></i> To get in touch with a WirEng team member, please complete the form below </li>
                      <li className="infoList-items"><i className="fa-solid fa-envelope"></i> wireng@gmail.com</li>
                      <li className="infoList-items"><i className="fa-solid fa-phone"></i> 0230-1212-2132</li>
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
      <Footer />
    </>
  )
}
