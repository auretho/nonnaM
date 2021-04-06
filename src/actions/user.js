export const ON_TOGGLE = 'ON_TOGGLE';
export const ON_REDIRECT = 'ON_REDIRECT';
export const ON_CHANGE = 'ON_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';
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

export const onToggle = () => ({
    type: ON_TOGGLE,
});

export const onRedirect = () => ({
    type: ON_REDIRECT,
});

export const onChange = (payload) => ({
    type: ON_CHANGE,
    payload,
});

export const onSubmit = (payload) => ({
    type: ON_SUBMIT,
    payload,
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