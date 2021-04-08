import { EDIT_STOCK, ON_CHANGE, ADD_PRODUCT_TO_DB, ON_SUBMIT } from '../actions/backoffice';
import { FIND_ALL_PRODUCTS_SUCCESS, FIND_ONE_PRODUCT, FIND_ONE_PRODUCT_SUCCESS, UPDATE_ONE_PRODUCT, UPDATE_ONE_PRODUCT_SUCCESS} from '../actions/user'

const initialState = {
    stock: '',
    products: [],
    productSelected: '',
    newProduct: '',
    activeMenuItem: 'home',
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
        case FIND_ALL_PRODUCTS_SUCCESS:
            return{
                ...state,
                products: action.payload,
                productSelected: '',
            };
        case FIND_ONE_PRODUCT_SUCCESS:
            return{
                ...state,
                productSelected: action.payload,
            };
        case UPDATE_ONE_PRODUCT_SUCCESS:
            return{
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export default backoffice;