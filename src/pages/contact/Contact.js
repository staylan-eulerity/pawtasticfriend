import React from 'react'
import ContactForm from './components/ContactForm';
import { ContactContent, ContactHeader } from './styles';
import { FaPaw } from 'react-icons/fa'

function Contact() {
  return (
    <ContactContent>
      <ContactHeader><FaPaw /> Contact Us <FaPaw/></ContactHeader>
      <small>Submit Form For Something Cool</small>
      <ContactForm />
    </ContactContent>
  )
}

export default Contact