import React from 'react'
import { BtnContainer, HomeContainer, HomeContent, HomeDesc, HomeH1, StartBtn } from './styles'
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';


function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeH1>Pawfect <span>Friend</span></HomeH1>
        <HomeDesc>Find your pawfect match today!</HomeDesc>
        <BtnContainer>
          <Link to='/pets'>
            <StartBtn><FaPaw style={{marginRight: '5px'}}/>Get Started</StartBtn>
          </Link>
        </BtnContainer>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home