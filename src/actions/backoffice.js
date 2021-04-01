export const EDIT_STOCK = 'EDIT_STOCK';
export const ON_CHANGE = 'ON_CHANGE';
export const ADD_PRODUCT_TO_DB = 'ADD_PRODUCT_TO_DB';

export const editStock = (payload) => ({
    type: EDIT_STOCK,
    payload,
})

export const onChange = (payload) => ({
    type: ON_CHANGE,
    payload,
});

export const addProductToDb = (payload) => ({
    type: ADD_PRODUCT_TO_DB,
    payload,
});

