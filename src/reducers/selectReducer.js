import {
    SELECT_ALL_PETS,
    DESELECT_ALL_PETS,
    SELECT_PET,
    DESELECT_PET
} from '../actions/types';


const intialState = {
    selectedPets: []
}

const selectReducer = ( state = intialState, action) => {
    switch(action.type) {
        case SELECT_ALL_PETS:
            return {
                selectedPets: [...action]
            }
        case DESELECT_ALL_PETS:
            return {
                selectedPets: []
            }
        default: return state;
    }
}

export default selectReducer;