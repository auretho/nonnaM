import { EDIT_STOCK, ON_CHANGE } from '../actions/backoffice';

const initialState = {
    stock: '',
    products: [
        {
            fullname: "Tomates 1",
            name: "tomates1",
            stock: '',
        },
        {
            fullname: "Tomates 2",
            name: "tomates2",
            stock: '',
        },
        {
            fullname: "Tomates 3",
            name: "tomates3",
            stock: '',
        }
    ],
};

const backoffice = (state = initialState, action = {}) => {
    switch (action.type){ 
        case ON_CHANGE:
            return{
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export default backoffice;