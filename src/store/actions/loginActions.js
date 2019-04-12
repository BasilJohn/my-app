import * as ActionTypes from '../../constants/storeConstants';
import firebase from '../../firebase';


const signUpUser = ({ email, userName, password }) => (dispatch, getState) => {

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            signUpUserSuccess(dispatch, user, userName)
        })
        .catch((error) => {
            dispatch({
                type: ActionTypes.SIGNUPERROR,
                data: error
            })
        });
};

const signUpUserSuccess = (dispatch, user, username) => {
    dispatch({
        type: ActionTypes.SIGNINSUCCESS,
        data: user
    })
};

const loginUserFail = (dispatch, error) => {
    dispatch({
        type: ActionTypes.SIGNINERROR,
        data: error
    })
};

const signInUser = ({ email, password }) => (dispatch, getState) => {

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
            loginUserFail(dispatch, error)
        });

};

const loginUserSuccess = (dispatch, user) => {

    dispatch({
        type: ActionTypes.SIGNINSUCCESS,
        data: user
    })
};

const textValueChanged = (field, data) => (dispatch, getState) => {
    dispatch({
        type: ActionTypes.TEXTVALUECHANGED,
        data: [data, field]
    });
};


export { signUpUser, textValueChanged, signInUser }