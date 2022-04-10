import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducer from './reducers';


const store = createStore(
    combinedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;