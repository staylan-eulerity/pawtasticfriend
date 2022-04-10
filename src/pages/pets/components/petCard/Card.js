import React from 'react';
import { StyledCard } from './styles';

const Card = ({name, image, description, created}) => {
    return (
        <StyledCard>
            <div className='img__container'>
                <img src={image} alt={name} />
            </div>
            <div className='card__content'>
                <h4 className='pet__name'>{name}</h4>
                <p className='pet__description'>{description}</p>
                <hr className='card__break'/>
                <small className='pet__date'>{created}</small>
            </div>
        </StyledCard>
    )
}

export default Card;