import { GETS_STICKY } from '../actions/process-actions';

const initialState = {};

const user = (state = initialState, action = {}) => {
    switch (action.type){ 
        case GETS_STICKY:
            return{
                ...state
            };
        default:
            return state;
    }
}

export default user;