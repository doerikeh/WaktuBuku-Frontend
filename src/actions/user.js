import axios from 'axios';
import history from '../history';
import {tokenConfig} from './auth';

import {
    EDIT_USER,
    GET_USERS,
} from './types';


export const getUsers = () => async (dispatch, getState) => {
    const res = await axios.get('http://127.0.0.1:8000/api/user/', tokenConfig(getState));
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  };
  
  export const editUser = (id, formValues) => async(dispatch, getState) =>{
      const res = await axios.patch(`http://127.0.0.1:8000/api/user/${id}`, formValues, tokenConfig(getState));
      dispatch({
        type: EDIT_USER,
        payload: res.data
      });
      history.push("/user");
  };