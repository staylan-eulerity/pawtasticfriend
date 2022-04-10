import { SELECT_ALL_PETS } from "./types";

export const selectAllPets = (urlList) => {
    dispatchEvent({
        type: SELECT_ALL_PETS,
        payload: urlList
    });
}