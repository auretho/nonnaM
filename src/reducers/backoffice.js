import { ON_CHANGE, ADD_PRODUCT_TO_DB } from '../actions/backoffice';
import { FIND_ALL_PRODUCTS_SUCCESS, FIND_ONE_PRODUCT_SUCCESS, UPDATE_ONE_PRODUCT_SUCCESS, LOGIN_SUCCESS, UPDATE_STOCK_SUCCESS, FIND_ALL_LEGALS_SUCCESS, FIND_ALL_RECIPES_SUCCESS, UPDATE_RECIPE_SUCCESS, FIND_ALL_PHOTOS_SUCCESS, UPDATE_PHOTO_SUCCESS} from '../actions/user'

const initialState = {
    stock: '',
    filteredProd: '',
    allPhotos: [],
    photoToUpdt: '',
    products: [],
    productSelected: '',
    newProduct: '',
    activeMenuItem: 'home',
    login: {
        email: '',
        password: ''
    },
    logged: false,
    recipes: '',
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
            
        case FIND_ALL_RECIPES_SUCCESS:
            return{
                ...state,
                recipes: action.payload
            }
        case UPDATE_RECIPE_SUCCESS:
            return{
                ...state,
                recipeToUpdt: '',
            }
        case FIND_ALL_LEGALS_SUCCESS:
            return{
                ...state,
                legals: action.payload
            }
        case FIND_ALL_PHOTOS_SUCCESS:
            return{
                ...state,
                allPhotos: action.payload,
            };
        case UPDATE_PHOTO_SUCCESS: 
            return{
                ...state,
                photoToUpdt: '',
            }
        default:
            return state;
    }
}

export default backoffice;