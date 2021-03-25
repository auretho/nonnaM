import {EDIT_STOCK} from '../actions/backoffice';

const initialState = {
    stock: '5',
    products: [
        {
            fullname: "Tomates 1",
            name: "tomates1",
            stock: '2',
        },
        {
            fullname: "Tomates 2",
            name: "tomates2",
            stock: '25',
        },
        {
            fullname: "Tomates 3",
            name: "tomates3",
            stock: '12',
        }
    ],
};

const backoffice = (state = initialState, action = {}) => {
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

export default backoffice;