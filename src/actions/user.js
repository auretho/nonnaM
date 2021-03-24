export const ON_TOGGLE = 'ON_TOGGLE';
export const ON_CHANGE = 'ON_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';


export const onToggle = () => ({
    type: ON_TOGGLE,
})

export const onChange = (payload) => ({
    type: ON_CHANGE,
    payload,
})

export const onSubmit = () => ({
    type: ON_SUBMIT,
})