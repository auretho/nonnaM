export const ON_TOGGLE = 'ON_TOGGLE';
export const ON_REDIRECT = 'ON_REDIRECT';
export const ON_CHANGE = 'ON_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';
export const ADD_PRODUCT = 'ADD_PRODUCT';

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