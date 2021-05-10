import { ON_TOGGLE } from '../actions/user';

const initialState = {
    burgerOpened: false, 
    navlinks: [
        {
            name: 'Accueil',
            location: '',
            anchor: '/#accueil',
        },
        {
            name: 'Notre histoire',
            location: '',
            anchor: '/#notre-histoire',

        },
        {
            name: 'Photos',
            location: '',
            anchor: '/#photos',
        },
        {
            name: 'Nos produits',
            location: '',
            anchor: '/#nos-produits',

        },
        {
            name: 'Commander',
            location: '',
            anchor: '/commandes/#order',
        },
        {
            name: 'Leur origine',
            location: '',
            anchor: '/#origine-des-produits',

        },
        {
            name: 'Recettes',
            location: '',
            anchor: '/#recettes',

        },
        {
            name: 'Contact',
            location: '',
            anchor: '/#contact',

        },
    ],
};

const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case ON_TOGGLE:
            return{
                ...state,
                burgerOpened: !state.burgerOpened,
            }
        default:
            return state;
    }
}

export default user;