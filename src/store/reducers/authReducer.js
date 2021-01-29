import * as actions from '../../store/actions/actions';
import { updatedObject } from '../../hoc/utility';

const initialState = {
      token:null,
      logout:false,
      loading:false,
      error:false,
      failMessage:false,
      setRedirect:'/',
      setSignIn:'/signin',
      isSignUp:false,
      signUpinvalid:false,
      userData:null,
      signUpCongrat:null,
      usFirstLast:[],
      nameId:null,
};

const signInStart = (state,action) => {
    return updatedObject(state,{loading:true,})
};
const signInSuccess = (state,action) => {
    return updatedObject(state,{
        loading:false,
        error:false,
        token:action.userToken,
        userData:action.userId,
  })
};
const signInFail = (state,action) => {
    return updatedObject(state,{
         loading:false,error:action.err,
         failMessage:action.message,
    })
};
const signUpStart = (state,action) => {
    return updatedObject(state,{
             loading:true,
             error:false,
    })
};
const signUpSuccess = (state,action) => {
    return updatedObject(state,{
           loading:false,
           error:false,
           isSignUp:action.userSignUp,
           signUpCongrat:action.localUserData
    })
};
const signUpFail = (state,action) => {
    return updatedObject(state,{
           loading:false,
           error:action.signUpErr,
           signUpinvalid:true,
        })
};
const logout = (state,action) => {
    return updatedObject(state,{
        token:null,error:null
   })
};

const setRirectPath = (state,action) => {
    return updatedObject(state,{
        setRedirect:action.actPath
    })
};
const setSignin = (state,action) => {
    return updatedObject(state,{
        setSignIn:action.sigInPath
    })
};

const signUpToken = (state,action) => {
    return updatedObject(state, {
        signUpCongrat:action.localUserData
    })
};

const getUsFirstLast = (state,action) => {
    return updatedObject(state,{
        usFirstLast:action.persIdData
    })
};
const nameId = (state,action) => {
    return updatedObject(state,{
        nameId:action.firstLastId
    })
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
     case actions.SIGN_IN_START:return signInStart(state,action);
     case actions.SIGN_IN_SUCCESS:return signInSuccess(state,action);
     case actions.SIGN_IN_FAIL:return signInFail(state,action);
     case actions.SIGN_UP_START:return signUpStart(state,action);
     case actions.SIGN_UP_SUCCESS:return signUpSuccess(state,action);
     case actions.SIGN_UP_FAIL:return signUpFail(state,action);
     case actions.LOG_OUT:return logout(state,action);
     case actions.REDIRECT_PATH:return setRirectPath(state,action);
     case actions.SET_SIGNIN:return setSignin(state,action);
     case actions.SIGN_UP_TOKEN:return signUpToken(state,action);
     case actions.GET_FIRST_LAST:return getUsFirstLast(state,action);
     case actions.NAME_ID:return nameId(state,action)
     default: 
              return state
    }
};

export default reducer;