import * as actions from './actions';
import axios from 'axios';


export const sendHooryName = (name) => {
    return {
        type:actions.ADD_HOORY_NAME,
        name:name
    }
}

export const addItemsSuccess = () => {
    return {
        type:actions.ADD_ITEMS_SUCCESS,
    }
};

export const addItemsFail = (error) => {
    return {
        type:actions.ADD_ITEMS_FAIL,
        err:error
    }
};

export const submitHooryItems = (gender,color,name,localUserId) => {
       return dispatch => {
        const hooryItems = {
            gender:gender,
            color:color,
            hooryname:name,
            userId:localUserId,
        }
     axios.post('https://hoory.herokuapp.com/data/add',hooryItems)
     .then(response => {
         dispatch(addItemsSuccess());
     })    
     .catch(error => {
         dispatch(addItemsFail(error));
         console.log(error)
     });

  }
};

export const getDataStart = () => {
    return {
        type:actions.GET_DATA_START
    }
};

export const getDataSuccessHoory = (data,id) => {
    return {
        type:actions.GET_DATA_SUCCESS,
        userData:data,
        adminId:id
    }
};

export const getDataFail = (error) => {
    return {
        type:actions.GET_DATA_FAIL,
        error:error
    }
};

export const getData = (id) => {
      return dispatch => {
          dispatch(getDataStart());
          axios.get('https://hoory.herokuapp.com/data/' )
          .then(response => {
                dispatch(getDataSuccessHoory(response.data,id));
          })
          .catch(error => {
              console.log(error);
              dispatch(getDataFail(error))
          })
      }
};

export const filterHoory = (id) => {
    return {
        type:actions.DELETE_DATA,
        elemId:id,
        }
}

export const deleteData = (id) => {
    return dispatch => {
        axios.delete('https://hoory.herokuapp.com/data/' + id)
            .then(res => {
                  dispatch(filterHoory(id))
            }).catch(err => {
                  console.log(err)
            })
    }
};

export const updatedHooryName = (persName,id,updName) => {
    return {
        type:actions.UPDATE_DATA,
        name:persName,
        id:id,
        elemName:updName
    }
};

export const updateName = (id,name,itemName) => {
    return dispatch => {
        const updatedName = {hooryname:name}
        axios.post('https://hoory.herokuapp.com/data/update/' + id,updatedName)
        .then(response => {
            dispatch(updatedHooryName(name,id,itemName))
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}




