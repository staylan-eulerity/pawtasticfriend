import axios from 'axios';
import { FETCH_PETS_REQUEST, FETCH_PETS_SUCCESS, FETCH_PETS_ERROR } from './types';

export const fetchPets = () => async (dispatch) => {
    dispatch({
        type: FETCH_PETS_REQUEST
    });
    try {
        const res = await axios.get('https://eulerity-hackathon.appspot.com/pets');
        dispatch({
            type: FETCH_PETS_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: FETCH_PETS_ERROR
        })
    }
}