import { EDIT_STOCK, ON_CHANGE, ADD_PRODUCT_TO_DB, ON_SUBMIT } from '../actions/backoffice';

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

    newProduct: '',
};

const backoffice = (state = initialState, action = {}) => {
    switch (action.type){ 
        case ON_CHANGE:
            return{
                ...state,
                ...action.payload,
            };
        case ADD_PRODUCT_TO_DB:
            return{
                ...state,
                ...action.payload,
            };
        // case ON_SUBMIT:
        //     return{
        //         ...state,
        //     };
        default:
            return state;
    }
}

export default backoffice;