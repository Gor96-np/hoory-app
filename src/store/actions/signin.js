import * as actions from './actions';
import { setInStorage,getFromStorage } from '../../hoc/utility'
import axios from 'axios';

export const signInStart = () => {
    return {
        type:actions.SIGN_IN_START
    }
}
export const signInSuccess = (idToken,Id) => {
    return {
        type:actions.SIGN_IN_SUCCESS,
        userToken:idToken,
        userId:Id
    }
}
export const signFail = (message,error) => {
    return {
        type:actions.SIGN_IN_FAIL,
        err:error,
        message:message,
    }
}


export const signIn = (mail,userPassword) => {
 return dispatch => {
    dispatch(signInStart())
     const signInData = {
         email:mail,
         password:userPassword
     };
    axios.post('/user/signin',signInData)
    .then(response => {
    if(response.data.success){
      dispatch(signInSuccess(response.data.token,response.data.userData))
      setInStorage('_hoory_auth_token',{ token:response.data.token });
      localStorage.setItem('User__Id',(response.data.userData))
    } else {
        dispatch(signFail(response.data.message,null))
    }
})
.catch(error => {
    dispatch(signFail(null,error));
    console.log(error)
})
}
};

export const logout = () => {
    localStorage.clear()
    return {
        type:actions.LOG_OUT
    }
};


export const authCheckToken = () => {
    return dispatch => {
        const localUser = localStorage.getItem('User__Id');
        const userToken = getFromStorage('_hoory_auth_token');
        if(userToken) {
            dispatch(signInSuccess(userToken,localUser));
        } else {
            dispatch(logout())
        }
    }
};


export const setAuthRedirectUser = (redirectPath) => {
    return {
        type:actions.REDIRECT_PATH,
        actPath:redirectPath
    }
};


