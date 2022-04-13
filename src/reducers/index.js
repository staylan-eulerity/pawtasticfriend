import petListReducer from "./petListReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
    petData: petListReducer,
})

export default combinedReducer;