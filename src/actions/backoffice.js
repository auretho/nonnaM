export const EDIT_STOCK = 'EDIT_STOCK';
export const ON_CHANGE = 'ON_CHANGE';

export const editStock = (payload) => ({
    type: EDIT_STOCK,
    payload,
})

export const onChange = (payload) => ({
    type: ON_CHANGE,
    payload,
});