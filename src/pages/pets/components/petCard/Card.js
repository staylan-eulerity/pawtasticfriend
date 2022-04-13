import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSinglePet } from '../../../../actions/petListActions';
import { StyledCard } from './styles';

const Card = ({name, image, description, created, id }) => {
    const { selectedPetList } = useSelector(state => state.petData);
    const dispatch = useDispatch();

    const selectPetHandler = () => {
        dispatch(selectSinglePet(selectedPetList, id))
    }

    return (
        <StyledCard>
            <div className='img__container'>
                <img src={image} alt={name} />
            </div>
            <div className='card__content'>
                <h4 className='pet__name'>{name}</h4>
                <p className='pet__description'>{description}</p>
                <hr className='card__break'/>
                <div className='card__sub'>
                    <small className='pet__date'>{created}</small>
                    <input className='pet__select' type='checkbox' onChange={() => selectPetHandler(selectedPetList, id)} checked={selectedPetList[id].isSelected}/>
                </div>
            </div>
        </StyledCard>
    )
}

export default Card;