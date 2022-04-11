import React from 'react'
import { SubmitButton, StyledContactForm } from './styles';

function ContactForm() {

    const formSubmitHandler = (event) => {
        event.preventDefault();
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
    }

  return (
    <StyledContactForm  onSubmit={(event) => formSubmitHandler(event)} >
        <label htmlFor='fullName'>Full Name:</label>
        <input type='text' placeholder='Enter Your Name' name='fullName' id='fullName' className='form__input' required/>
        <label htmlFor='email'>Email:</label>
        <input type='email' placeholder='Enter Your Email' name='email' id='email' className='form__input' required/>
        <label htmlFor='subject'>Subject:</label>
        <input type='text' placeholder='Enter Subject' name='subject' id='subject' className='form__input' required/>
        <label htmlFor='message'>Message:</label>
        <textarea type='text' placeholder='Enter Your Message' id='message' className='form__input form__textarea' required/>
        <SubmitButton type='submit' value='Submit'/>
    </StyledContactForm>
  )
}

export default ContactForm