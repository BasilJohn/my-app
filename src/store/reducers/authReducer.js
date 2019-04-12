
import * as ActionTypes from '../../constants/storeConstants';

const initialState = {
    userName: "",
    email: "",
    password: "",
    loginInformation:{}
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
        default:
            return state;
    }
};
