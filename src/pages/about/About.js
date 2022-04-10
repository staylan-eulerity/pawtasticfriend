import React from 'react';
import AboutTeam from './components/AboutTeam';
import { FaPaw } from 'react-icons/fa'
import { AboutContent, AboutHeader, AboutMainContent } from './styles';

function About() {
  return (
    <AboutContent>
      <AboutHeader><FaPaw /> About Us <FaPaw /></AboutHeader>
      <AboutMainContent>
        <p>
          For nearly 7 years Pawfect Friend has been pairing our clients with the perfect furry friend. Whether our pets have fur, scales, or feathers we strive to find them the perfect forecver home!
        </p>
        <br />
        <p>
          We are partnered with nearly every animal shelter, pet shop, and even breeders across the country. We constantly are sharing images, and backgrounds of our companions, enabling our users to learn more about them. If you see a pet you'd love to meet, we will connect you with their handlers, so you can purchase or adopt them! Expand your family today!
        </p>
        <h2>Meet Our Team</h2>
        <AboutTeam />
        <br />
        <small>Note: This company is sadly not real... On the bright side though you can download the pet images!</small>
      </AboutMainContent>
    </AboutContent>
  )
}

export default About