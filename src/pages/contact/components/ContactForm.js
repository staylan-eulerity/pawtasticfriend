import React from 'react'
import { ContactButton, StyledContactForm } from './styles';

function ContactForm() {

    const formSubmitHandler = (event) => {
        event.preventDefault();
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
    }

  return (
    <StyledContactForm>
        <label htmlFor='fullName'>Full Name:</label>
        <input type='text' placeholder='Enter Your Name' name='fullName' id='fullName' className='form__input'/>
        <label htmlFor='email'>Email:</label>
        <input type='email' placeholder='Enter Your Email' name='email' id='email' className='form__input' />
        <label htmlFor='subject'>Subject:</label>
        <input type='text' placeholder='Enter Subject' name='subject' id='subject' className='form__input'/>
        <label htmlFor='message'>Message:</label>
        <textarea type='text' placeholder='Enter Your Message' id='message' className='form__input form__textarea'/>
        <ContactButton onClick={(event) => formSubmitHandler(event)}>Send Message</ContactButton>
    </StyledContactForm>
  )
}

export default ContactForm