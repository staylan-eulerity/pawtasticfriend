import { FETCH_PETS_REQUEST, FETCH_PETS_SUCCESS, FETCH_PETS_ERROR, SELECT_ALL_PETS, DESELECT_ALL_PETS, SELECT_PET } from '../actions/types'


const initialState = {
    petList: [],
    selectedPetList: [],
    isLoading: true,
    error: ''
}

const petListReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PETS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PETS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                petList: action.payload,
                selectedPetList: action.payload.map((pet) => ({url: pet.url, isSelected: false}))
            }
        case FETCH_PETS_ERROR:
            return {
                ...state,
                isLoading: false,
                petList: [],
                selectedPetList: [],
                error: action.payload
            }
        case SELECT_ALL_PETS:
            return {
                ...state,
                selectedPetList: action.payload
            }
        case DESELECT_ALL_PETS:
            return {
                ...state,
                selectedPetList: action.payload
            }
        case SELECT_PET:
            return {
                ...state,
                selectedPetList: action.payload
            }
        default: return state
    }
}

export default petListReducer;