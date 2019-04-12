import * as ActionTypes from '../../constants/storeConstants';


const signUpUser = data => (dispatch, getState) => {

    dispatch({
        type: ActionTypes.SIGNUP,
        data: data
    });
};

const textValueChanged = (field, data) => (dispatch, getState) => {
    dispatch({
        type: ActionTypes.TEXTVALUECHANGED,
        data: [data, field]
    });
};


export { signUpUser, textValueChanged }