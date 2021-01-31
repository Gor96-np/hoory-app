import * as actions from './actions';
import { getFromStorage } from '../../hoc/utility'
import axios from 'axios';


export const getStartToken = () => {
    return {
        type:actions.START_GET_TOKEN
    }
}

export const getTokenSuccess = (getToken) => {
    return {
        type:actions.GET_TOKEN_SUCCESS,
        getToken:getToken
    }
};

export const getStoreToken = () => {
    return dispatch => {
        dispatch(getStartToken());
    const obj = getFromStorage('_hoory__auth__token');
    if(obj && obj.token) {
        const  { token } = obj;
        dispatch(getTokenSuccess(token))
        axios.post('https://hoory-mern.herokuapp.com/verify?token='+token)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }
    }
}


export const signUpStart = () => {
    return {
        type:actions.SIGN_UP_START
    }
};
export const signUpSuccess = (signUp,getUserToken) => {
    return {
        type:actions.SIGN_UP_SUCCESS,
        userSignUp:signUp,
        localUserData:getUserToken
        
    }
};

export const signUpFail = (error) => {
    return {
        type:actions.SIGN_UP_FAIL,
        signUpErr:error
    }
};

export const signUpUser = (firstname,lastname,email,password) => {
    return dispatch => {
        dispatch(signUpStart());
        const signUpData = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password
           }
    axios.post('https://hoory-mern.herokuapp.com/user/signup',signUpData)
    .then(response => {
     if(response.data.success) {
 localStorage.setItem('Signup__Success',response.data.loclUserData)
 dispatch(signUpSuccess(response.data.success,response.data.loclUserData));
           } else {
            dispatch(signUpFail(response.data.message))
           }
        })
           .catch(err => { 
               dispatch(signUpFail(err));
               console.log(err)
           })
           }
    };

export const getUserSugnUpToken = () => {
    return dispatch => {
        const signUpToken = localStorage.getItem('Signup__Success')
        dispatch(signUpSuccess(null,signUpToken))
    }
}
    

 export const setSignInRedirect = (redirectSignin) => {
     return {
         type:actions.SET_SIGNIN,
         sigInPath:redirectSignin
     }
 };