export const ON_TOGGLE = 'ON_TOGGLE';
export const ON_REDIRECT = 'ON_REDIRECT';
export const ON_ORDER_CHANGE = 'ON_ORDER_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUBMIT = 'LOGOUT_SUBMIT';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT'

export const ADD_PRODUCT = 'ADD_PRODUCT';

export const FIND_ALL_PRODUCTS = 'FIND_ALL_PRODUCTS';
export const FIND_ALL_PRODUCTS_SUCCESS = 'FIND_ALL_PRODUCTS_SUCCESS';
export const FIND_ALL_PRODUCTS_ERROR = 'FIND_ALL_PRODUCTS_ERROR';

export const FIND_ONE_PRODUCT = 'FIND_ONE_PRODUCT';
export const FIND_ONE_PRODUCT_SUCCESS = 'FIND_ONE_PRODUCT_SUCCESS';
export const FIND_ONE_PRODUCT_ERROR = 'FIND_ONE_PRODUCT_ERROR';

export const UPDATE_ONE_PRODUCT = 'UPDATE_ONE_PRODUCT';
export const UPDATE_ONE_PRODUCT_SUCCESS = 'UPDATE_ONE_PRODUCT_SUCCESS';
export const UPDATE_ONE_PRODUCT_ERROR = 'UPDATE_ONE_PRODUCT_ERROR';

export const UPDATE_STOCK = 'UPDATE_STOCK';
export const UPDATE_STOCK_SUCCESS = 'UPDATE_STOCK_SUCCESS';

export const DELETE_ONE_PRODUCT = 'DELETE_ONE_PRODUCT';

export const ADD_NEW_PHOTO = 'ADD_NEW_PHOTO';
export const FIND_ALL_PHOTOS = 'FIND_ALL_PHOTOS';
export const FIND_ALL_PHOTOS_SUCCESS = 'FIND_ALL_PHOTOS_SUCCESS';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';
export const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';

export const FIND_ALL_RECIPES = 'FIND_ALL_RECIPES';
export const FIND_ALL_RECIPES_SUCCESS = 'FIND_ALL_RECIPES_SUCCESS';
export const UPDATE_RECIPES = 'UPDATE_RECIPES';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';

export const FIND_ALL_LEGALS = 'FIND_ALL_LEGALS';
export const FIND_ALL_LEGALS_SUCCESS = 'FIND_ALL_LEGALS_SUCCESS';
export const UPDATE_LEGALS = 'UPDATE_LEGALS';


export const onToggle = () => ({
    type: ON_TOGGLE,
});

export const onRedirect = () => ({
    type: ON_REDIRECT,
});

export const onOrderChange = (payload) => ({
    type: ON_ORDER_CHANGE,
    payload,
});

export const onSubmit = (payload) => ({
    type: ON_SUBMIT,
    payload,
});

export const signupSubmit = () => ({
    type: SIGNUP_SUBMIT,
});

export const loginSubmit = () => ({
    type: LOGIN_SUBMIT,
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

export const logoutSubmit = () => ({
    type: LOGOUT_SUBMIT,
});

export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload,
});

export const findAllProducts = () => ({
    type: FIND_ALL_PRODUCTS,
});

export const findAllProductsSuccess = (payload) => ({
    type: FIND_ALL_PRODUCTS_SUCCESS,
    payload,
});

export const findAllProductsError = () => ({
    type: FIND_ALL_PRODUCTS_ERROR,
});

export const findOneProduct = () => ({
    type: FIND_ONE_PRODUCT,
});

export const findOneProductSuccess = (payload) => ({
    type: FIND_ONE_PRODUCT_SUCCESS,
    payload
});

export const findOneProductError = () => ({
    type: FIND_ONE_PRODUCT_ERROR,
});

export const updateOneProduct = () => ({
    type: UPDATE_ONE_PRODUCT,
});

export const updateOneProductSuccess = (payload) => ({
    type: UPDATE_ONE_PRODUCT_SUCCESS,
    payload
});

export const updateOneProductError = () => ({
    type: UPDATE_ONE_PRODUCT_ERROR,
});

export const deleteOneProduct = () => ({
    type: DELETE_ONE_PRODUCT,
});

export const updateStock = () => ({
    type: UPDATE_STOCK,
});

export const updateStockSuccess = () => ({
    type: UPDATE_STOCK_SUCCESS,
});

// RECETTES ====================================================
export const findAllrecipes = () => ({
    type: FIND_ALL_RECIPES,
});

export const findAllrecipesSuccess = (payload) => ({
    type: FIND_ALL_RECIPES_SUCCESS,
    payload,
});

export const updateRecipes = () => ({
    type: UPDATE_RECIPES,
});

export const updateRecipeSuccess = () => ({
    type: UPDATE_RECIPE_SUCCESS,
});

// PHOTOS ====================================================
export const addNewPhoto = (payload) => ({
    type: ADD_NEW_PHOTO,
    payload,
});

export const findAllPhotos = () => ({
    type: FIND_ALL_PHOTOS,
});

export const findAllPhotosSuccess = (payload) => ({
    type: FIND_ALL_PHOTOS_SUCCESS,
    payload,
});

export const updatePhoto = () => ({
    type: UPDATE_PHOTO,
});

export const updatePhotoSuccess = () => ({
    type: UPDATE_PHOTO_SUCCESS,
});

// LEGALS ====================================================
export const findAllLegals = () => ({
    type: FIND_ALL_LEGALS,
});

export const findAllLegalsSuccess = (payload) => ({
    type: FIND_ALL_LEGALS_SUCCESS,
    payload,
});

export const updateLegals = () => ({
    type: UPDATE_LEGALS,
});
