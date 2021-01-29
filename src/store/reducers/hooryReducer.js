import * as actions from '../actions/actions'
import { updatedObject } from '../../hoc/utility';

const initialState = {
      load:false,
      error:false,
      name:false,
      itemAdd:false,
      hooryName:'',
      hooryData:[],
};

const addHooryName = (state,action) => {
    return updatedObject(state,{
              load:true,
              error:false,
              hooryName:action.name
            })
};
const addItemsSuccess = (state,action) => {
    return updatedObject(state,{
        load:false,error:false,
        itemAdd:true,
    })
}
const addItemsFail = (state,action) => {
    return updatedObject(state,{load:false,error:action.err})
};

const getDataStart = (state,action) => {
    return updatedObject(state,{load:true})
}
export const getDataSuccess = (state,action) => {
    return updatedObject(state, {
        hooryData:action.userData.filter(id => action.adminId === id.userId),
        load:false,
        hooryName:''
    })
};

export const getDataFail = (state,action) => {
    return updatedObject(state,{
        load:false,
        error:action.error
    })
};


export const deleteData = (state,action) => {
    const deletedData = state.hooryData.filter(pop => pop._id !== action.elemId )
    return updatedObject(state,{
           hooryData:deletedData,
    })
};

export const updatedData = (state,action) => {
    return updatedObject(state, {
           hooryName:action.name,
    })
}


const reducer = (state = initialState,action) => {
    switch(action.type) {
     case actions.ADD_ITEMS_SUCCESS:return addItemsSuccess(state,action);
     case actions.ADD_ITEMS_FAIL:return addItemsFail(state,action);
     case actions.ADD_HOORY_NAME:return addHooryName(state,action);
     case actions.GET_DATA_START:return getDataStart(state,action);
     case actions.GET_DATA_SUCCESS:return getDataSuccess(state,action);
     case actions.GET_DATA_FAIL:return getDataFail(state,action);
     case actions.DELETE_DATA:return deleteData(state,action);
     case actions.UPDATE_DATA:return updatedData(state,action)
     default: return state
    }
};

export default reducer;