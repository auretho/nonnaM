import { ON_CHANGE, ADD_PRODUCT_TO_DB } from '../actions/backoffice';
import { FIND_ALL_PRODUCTS_SUCCESS, FIND_ONE_PRODUCT_SUCCESS, UPDATE_ONE_PRODUCT_SUCCESS, LOGIN_SUCCESS, UPDATE_STOCK_SUCCESS, FIND_ALL_LEGALS_SUCCESS} from '../actions/user'

const initialState = {
    stock: '',
    products: [],
    productSelected: '',
    newProduct: '',
    activeMenuItem: 'home',
    login: {
        email: 'coucou@coucou.com',
        password: 'coucou'
    },
    logged: false,
    legals: '',
};

const backoffice = (state = initialState, action = {}) => {
    switch (action.type){ 
        case ON_CHANGE:
            return{
                ...state,
                ...action.payload,
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
            logged: true,
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
        case UPDATE_STOCK_SUCCESS:
            return{
                ...state,
            stock: '',
            };

        case FIND_ALL_LEGALS_SUCCESS:
            return{
                ...state,
                legals: action.payload
            }
        default:
            return state;
    }
}

export default backoffice;