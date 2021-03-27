import { ON_CHANGE, ON_SUBMIT, ADD_PRODUCT, ON_REDIRECT } from '../actions/user';

const initialState = {
    form: {
        id: '',
        lastname: '',
        firstname: '',
        email: '',
        message: '',
    },
    total: 0,
    redirection: false,

    // products: [
    //     {
    //         fullname: "Tomates 1",
    //         name: "tomates1",
    //         count: ""
    //     },
    //     {
    //         fullname: "Tomates 2",
    //         name: "tomates2",
    //         count: ""
    //     },
    //     {
    //         fullname: "Tomates 3",
    //         name: "tomates3",
    //         count: ""
    //     }
    // ],
    // inputDetails: [
    //     {
    //         title: 'Nom',
    //         type: 'text',
    //         name: 'lastname',
    //         placeholder: 'Nom de famille',
    //         value: '',
    //     },
    //     {
    //         title: 'Prénom',
    //         type: 'text',
    //         name: 'firstname',
    //         placeholder: 'Prénom',
    //         value: '',
    //     },
    //     {
    //         title: 'Email',
    //         type: 'email',
    //         name: 'email',
    //         placeholder: 'Email',
    //         value: '',
    //     },
    // ],
};

const orders = (state = initialState, action = {}) => {
    switch (action.type){ 
        case ON_CHANGE:
            return{
                ...state,
                form:{ 
                    ...state.form, 
                    ...action.payload,}
            };
        case ON_SUBMIT: 
            return{
                ...state,
                redirection: true,
            };
        case ADD_PRODUCT: 
            return{
                ...state,
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
                    message: '',
                },
            };
        default:
            return state;
    }
}

export default orders;