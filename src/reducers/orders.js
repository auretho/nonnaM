import { ON_CHANGE, ON_SUBMIT, ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/user';


const initialState = {
    form: {
        id: '',
        subject: '',      
        lastname: '',
        firstname: '',
        email: '',
        message: '',
        products: '',
    },
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
                form: {
                    ...state.form, 
                    subject: `Commande n°`, // A REVOIR POUR ACCOLDER L'ID
                    ...action.payload},

            };
        case ON_SUBMIT: 
            return{
                ...state,
                form: {        
                    id: '',
                    subject: '',      
                    lastname: '',
                    firstname: '',
                    email: '',
                    message: '',
                },
            };
        case ADD_PRODUCT: 
            return{
                ...state,
                form: {        
                    products: [
                        ...state.form.products,
                        action.payload
                    ]
                },
            };
        case REMOVE_PRODUCT: 
            return{
                ...state,
                form: {        
                    products: [
                        ...state.form.products,
                        action.payload
                    ]
                },
            };
        default:
            return state;
    }
}

export default orders;