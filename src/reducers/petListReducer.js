import {
    FETCH_PETS_ERROR,
    FETCH_PETS_REQUEST, FETCH_PETS_SUCCESS,
} from '../actions/types'


const initialState = {
    petList: [],
    isLoading: true,
    error: false
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
                error: false,
                petList: action.payload
            }
        case FETCH_PETS_ERROR:
            return {
                ...state,
                isLoading: false,
                petList: [],
                error: true
            }
        default: return state
    }
}

export default petListReducer;