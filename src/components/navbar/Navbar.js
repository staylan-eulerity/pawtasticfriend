import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import { StyledNavBar, Logo, HamburgerIcon, Menu } from './styles';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <StyledNavBar>
      <Logo>
          <Link to='/'><FaPaw />Pawfect <span>Friend</span></Link>
      </Logo>
      <HamburgerIcon onClick={() => setShowLinks(!showLinks)}>
        <span />
        <span />
        <span />
      </HamburgerIcon>
      <Menu isOpen={showLinks}>
        <Link to='/pets'>Pets</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </Menu>
    </StyledNavBar>
  )
}

export default Navbar