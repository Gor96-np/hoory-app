import * as actions from './actions';
import axios from 'axios';

export const getDataSuccess = (id) => {
    return {
        type:actions.GET_FIRST_LAST,
        persIdData:id
    }
};

export const getUserNames = (id) => {
    return dispatch => {
        axios.get('/user/' + id)
        .then(response => {
            const data = [];
            data.push({...response.data})
            dispatch(getDataSuccess(data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}
