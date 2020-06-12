import {
    EDIT_USER,
    GET_USERS,
} from '../actions/types';


  

    
export default function(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                user: action.payload
            };
        case EDIT_USER:
            default:
            return state;
    }
};
