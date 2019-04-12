import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "../reducers";
import ReduxThunk from 'redux-thunk';



let composeEnhancers = compose;

export default function configureStore () {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));
};


