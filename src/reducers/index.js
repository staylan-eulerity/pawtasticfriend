import petListReducer from "./petListReducer";
import selectReducer from "./selectReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
    petData: petListReducer,
    selectedPets: selectReducer
})

export default combinedReducer;