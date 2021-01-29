import * as actions from '../actions/actions';
import { updatedObject } from '../../hoc/utility'

const initialState = {
      picColor:'Blue',
      gender:'Man',
      colCheck:false,
      authCheck:''
    };

const Blue = (state,action) => {
    return updatedObject(state,{picColor:'Blue'})
};
const Green = (state,action) => {
    return updatedObject(state,{picColor:'Green'})
};
const Orange = (state,action) => {
    return updatedObject(state,{picColor:'Orange'})
};
const Pink = (state,action) => {
    return updatedObject(state,{picColor:'Pink'})
};
const Red = (state,action) => {
    return updatedObject(state,{picColor:'Red'})
};
const Man = (state,action) => {
    return updatedObject(state,{gender:'Man'})
};
const Women = (state,action) => {
    return updatedObject(state,{gender:'Women'})
};
const colorCheckbox = (state,action) => {
    return updatedObject(state,{colCheck:true})
};
const authCheckbox = (state,action) => {
    return updatedObject(state,{authCheck:'/success'})
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
     case actions._BLUE:return Blue(state,action);
      case actions._GREEN:return Green(state,action);
       case actions._ORANGE:return Orange(state,action);
        case actions._PINK:return Pink(state,action);
         case actions._RED:return Red(state,action);
          case actions.MAN_GENDER:return Man(state,action);
           case actions.WOMEN_GENDER:return Women(state,action);
            case actions.COL_CHECKBOX:return colorCheckbox(state,action);
             case actions.AUTH_CHECKBOX:return authCheckbox(state,action);
    default:  return state
      }
}

export default reducer;