export const ON_TOGGLE = 'ON_TOGGLE';
export const ON_CHANGE = 'ON_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const onToggle = () => ({
    type: ON_TOGGLE,
});

export const onChange = (payload) => ({
    type: ON_CHANGE,
    payload,
});

export const onSubmit = () => ({
    type: ON_SUBMIT,
});

export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload,
});

export const removeProduct = (payload) => ({
    type: REMOVE_PRODUCT,
    payload,
});