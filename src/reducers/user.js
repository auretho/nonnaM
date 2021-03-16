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
    comments: [
        {
            name: "Luca",
            text: "Mamma mia! Ces produits sont tellement bons! A chaque bouchée, c'est un vrai bonheur! Grazie Nonna!"
        },
        {
            name: "Delf",
            text: "Waah! Ces produits sont tellement bons! A chaque bouchée, c'est un vrai bonheur! Grazie Nonna!"
        },
        {
            name: "Ade",
            text: "Waah! Ces produits sont tellement bons! A chaque bouchée, c'est un vrai bonheur! Grazie Nonna!"
        }
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