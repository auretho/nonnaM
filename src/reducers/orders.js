import { ON_CHANGE, ON_SUBMIT } from '../actions/user';

const initialState = {
    form: ''
        // lastname: '',
        // firstname: '',
        // email: '',
    
};

const orders = (state = initialState, action = {}) => {
    switch (action.type){ 
        case ON_CHANGE:
            return{
                ...state,
                form: {...state.form, ...action.payload},
            }
        case ON_SUBMIT: 
            return{
                ...state,
            }
        default:
            return state;
    }
}

export default orders;