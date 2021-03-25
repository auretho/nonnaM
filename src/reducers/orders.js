import { ON_CHANGE, ON_SUBMIT, ADD_PRODUCT } from '../actions/user';


const initialState = {
    form: {
        id: '',
        subject: 'Commande n°',      
        lastname: '',
        firstname: '',
        email: '',
        message: '',
    },
    products: [
        {
            fullname: "Tomates 1",
            name: "tomates1",
            count: ""
        },
        {
            fullname: "Tomates 2",
            name: "tomates2",
            count: ""
        },
        {
            fullname: "Tomates 3",
            name: "tomates3",
            count: ""
        }
    ],

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
                form: {        
                    id: '',
                    subject: '',      
                    lastname: '',
                    firstname: '',
                    email: '',
                    message: '',
                },
                // products: 
            };
        case ADD_PRODUCT: 
            return{
                ...state,
                // ...action.payload
            };
        default:
            return state;
    }
}

export default orders;