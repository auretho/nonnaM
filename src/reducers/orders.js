import { ON_CHANGE, ON_SUBMIT, ADD_PRODUCT, ON_REDIRECT } from '../actions/user';

const initialState = {
    form: {
        id: '',
        lastname: '',
        firstname: '',
        email: '',
        phone: '',
        message: '',
    },
    total: 0,
    redirection: false,
    delivery: undefined,

    inputDetails: [
        {
            title: 'Nom',
            type: 'text',
            name: 'lastname',
            placeholder: 'Nom de famille',
            pattern: '^[a-zA-Z]$',
        },
        {
            title: 'Prénom',
            type: 'text',
            name: 'firstname',
            placeholder: 'Prénom',
            pattern: '^[a-zA-Z]$',
        },
        {
            title: 'Email',
            type: 'email',
            name: 'email',
            placeholder: 'Email',
        },
        {
            title: 'Téléphone',
            type: 'tel',
            name: 'phone',
            placeholder: 'ex: 06 12 34 56 78',
            pattern: '^(?:[0-9] ?){10,14}$',
        },
    ],
};

const orders = (state = initialState, action = {}) => {
    switch (action.type){ 
        case ON_CHANGE:
            return{
                ...state,
                // ...action.payload,
                form:{ 
                    ...state.form, 
                    ...action.payload,
                }
            };
        case ON_SUBMIT: 
            return{
                ...state,
                redirection: true,
            };
        case ADD_PRODUCT: 
            return{
                ...state,
                ...action.payload,
            };
        case ON_REDIRECT: 
            return{
                ...state,
                redirection: false,
                form: {        
                    id: '',
                    subject: '',      
                    lastname: '',
                    firstname: '',
                    email: '',
                    phone: '',
                    message: '',
                },
                delivery: undefined,
                total: 0,
            };
        default:
            return state;
    }
}

export default orders;