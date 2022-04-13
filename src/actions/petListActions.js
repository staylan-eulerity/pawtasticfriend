import axios from 'axios';
import {
    FETCH_PETS_REQUEST,
    FETCH_PETS_SUCCESS,
    FETCH_PETS_ERROR,
    SELECT_ALL_PETS,
    DESELECT_ALL_PETS
} from './types';

export const fetchPets = () => async (dispatch) => {
    dispatch({
        type: FETCH_PETS_REQUEST
    });
    try {
        const response = await axios.get('https://eulerity-hackathon.appspot.com/pets')
        let petData = response.data;
        petData = petData.map((pet) => ({...pet, isSelected: false}))
        dispatch({
            type: FETCH_PETS_SUCCESS,
            payload: petData
        })
    } catch (error) {
        const errorMessage = error;
        dispatch({
            type: FETCH_PETS_ERROR,
            payload: errorMessage
        })
    }
}

export const selectAllPets = (selectedPetList) => {
    return (dispatch) => {
        dispatch({
            type: SELECT_ALL_PETS,
            payload: selectedPetList.map((pet) => ({...pet, isSelected: true}))
        })
    }
}

export const deSelectAllPets = (selectedPetList) => {
    return (dispatch) => {
        dispatch({
            type: DESELECT_ALL_PETS,
            payload: selectedPetList.map((pet) => ({...pet, isSelected: false}))
        })
    }
}

export const selectSinglePet = (selectedPetList, id) => {
    return (dispatch) => {
        selectedPetList[id].isSelected = !(selectedPetList[id].isSelected)
        dispatch({
            type: DESELECT_ALL_PETS,
            payload: selectedPetList
        })
    }
}