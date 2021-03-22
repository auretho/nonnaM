import {EDIT_STOCK} from '../actions/backoffice';

const initialState = {
    stock: '5',
};

const orders = (state = initialState, action = {}) => {
    switch (action.type){ 
        case EDIT_STOCK:
            return{
                ...state,
                stock: action.payload,
            }
        default:
            return state;
    }
}

export default orders;