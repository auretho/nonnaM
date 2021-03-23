import { ON_SUBMIT } from '../actions/user';

const initialState = {
    details: {
        lastname: 'Tho',
        firstname: 'Aure',
        email: 'test@test.fr'
    }
};

const orders = (state = initialState, action = {}) => {
    switch (action.type){ 
        case ON_SUBMIT: 
        return{
            ...state,
        }
        default:
            return state;
    }
}

export default orders;