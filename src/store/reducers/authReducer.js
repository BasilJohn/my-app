
import * as ActionTypes from '../../constants/storeConstants';

const initialState = {
    userName: "",
    email: "",
    password: "",
    loginInformation: {},
    errorInformation: {}
}



export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP:
            return {
                ...state,
                loginInformation: action.data
            };
        case ActionTypes.TEXTVALUECHANGED:
            return {
                ...state,
                [action.data[1]]: action.data[0]
            };
        case ActionTypes.SIGNIN:
            return {
                ...state,
                loginInformation: action.data
            };
        case ActionTypes.SIGNINSUCCESS:
            return {
                ...state,
                loginInformation: action.data
            };
        case ActionTypes.SIGNUPSUCCESS:
            return {
                ...state,
                loginInformation: action.data
            };
        case ActionTypes.SIGNUPERROR:
            return {
                ...state,
                errorInformation: action.data
            };
        case ActionTypes.SIGNINERROR:
            return {
                ...state,
                errorInformation: action.data
            };
        default:
            return state;
    }
};
