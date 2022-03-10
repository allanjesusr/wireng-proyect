// import { useForm } from '../../hooks/useForm';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';

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
  })
  

  // const [ formValues, handleInputChange ] = useForm({
  //   name: 'Allan',
  //   email: 'allan@email.com',
  //   subject: 'Subject form',
  //   message: 'This is a message'
  // });

  // const { name, email, subject, message }:ValuesProps = formValues;

  const handleSubmit = (e:any) => {
      e.preventDefault();
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
  }

  return (

    <>
      <Navbar />
        <div className="contact__web-container">
          <div className="contact__container">
            <h1> Get In Touch </h1>
            <p>To get in touch with a WirEng team member, please complete the form below ( * indicates a required filed) </p>
          </div>

            <form ref={form} onSubmit={ handleSubmit } >
              <div className="contact__form-container">
                <h3> Your Name *</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="off"
                  className="contact__input mt-5"
                  
                />
                <h3> Your Email *</h3>
                <input
                  type="email"
                  name="email" 
                  placeholder="Email"
                  autoComplete="off"
                  className="contact__input mt-5"
                />
                <h3>Subject *</h3>
                <input
                  type="text"
                  name="subject" 
                  placeholder="Subject"
                  autoComplete="off"
                  className="contact__input mt-5"
                />
                <h3>Your Message *</h3>
                <textarea 
                  name='message'
                  className="contact__textarea mt-5"
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
      <Footer />
    </>
  )
}
