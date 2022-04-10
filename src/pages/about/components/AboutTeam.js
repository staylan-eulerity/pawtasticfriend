import React from 'react';
import { StyledTeamContainer, TeamCard } from './styles';
import Team1 from '../../../assets/images/Team1.jpg';
import Team2 from '../../../assets/images/Team2.jpg';
import Team3 from '../../../assets/images/Team3.jpg';

const teamMembers = [
    {
        name: 'Eric Johnson',
        title: 'CEO',
        image: Team1
    },
    {
        name: 'Mike Richard',
        title: 'Dog Lover',
        image: Team2
    },
    {
        name: 'Zeus',
        title: 'Adorable',
        image: Team3
    }
]

function AboutTeam () {
    return (
        <StyledTeamContainer>
            { teamMembers.map((member, index) => {
                return (
                <TeamCard key={index}>
                    <div className='img__cont'>
                        <img src={member.image} alt={member.name}/>
                    </div>
                    <div className='card__main'>
                        <h4>{member.name}</h4>
                        <h5>{member.title}</h5>
                    </div>
                </TeamCard>
                )})
            }
        </StyledTeamContainer>
    )
}

export default AboutTeam;