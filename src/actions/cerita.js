import axios from 'axios';
import history from '../history';
import {tokenConfig} from './auth';

import { GET_CERITA, EDIT_CERITA, ADD_CERITA, ERROR_CERITA } from './types';
import { reset, stopSubmit } from 'redux-form';

export const getCerita = () => async(dispatch, getState) =>{
    const res = await axios.get(`http://127.0.0.1:8000/api/story//`, tokenConfig(getState));
    dispatch({
        type:GET_CERITA,
        payload: res.data
    });
}

export const getCeritas = id => async(dispatch, getState) =>{
    const res = await axios.get(`http://127.0.0.1:8000/api/story//${id}`, tokenConfig(getState));
    dispatch({
        type:GET_CERITA,
        payload: res.data
    });
}

export const editCerita = (formValues, id) => async(dispatch, getState) =>{
    const res = await axios.patch(
        `http://127.0.0.1:8000/api/story//${id}`,
        formValues,
        tokenConfig(getState)
    );
    dispatch({
        type: EDIT_CERITA,
        payload: res.data
    });
    history.push("/user")
}

export const addCerita = formValues => async(dispatch, getState) =>{
    try{
        const res = await axios.patch(
            `http://127.0.0.1:8000/api/story/`,
            formValues,
            tokenConfig(getState)
        );
        dispatch({
            type: ADD_CERITA,
            payload: res.data
        });
        dispatch(reset("ceritaForm"))
    }catch(err){
        dispatch({
            type:ERROR_CERITA
        });
        dispatch(stopSubmit("ceritaForm", err.response.data));
    }
};