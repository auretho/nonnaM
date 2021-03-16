import photo1 from './img/1.jpg';
import photo2 from './img/2.jpg';
import photo3 from './img/3.jpg';
import photo4 from './img/4.jpg';
import photo5 from './img/5.jpg';
import photo6 from './img/6.jpg';
import photo7 from './img/7.jpg';
import photo8 from './img/8.jpg';
import photo9 from './img/9.jpg';
import photo10 from './img/10.jpg';
import photo11 from './img/11.jpg';
import photo12 from './img/12.jpg';
import photo13 from './img/13.jpg';
import photo14 from './img/14.jpg';
import photo15 from './img/15.jpg';
import photo16 from './img/16.jpg';
import photo17 from './img/17.jpg';
import photo19 from './img/19.jpg';
import photo20 from './img/20.jpg';
import photo21 from './img/21.jpg';
import photo22 from './img/22.jpg';
import photo23 from './img/23.jpg';
import photo24 from './img/24.jpg';
import photo25 from './img/25.jpg';
import photo26 from './img/26.jpg';
import photo27 from './img/27.jpg';
import photo28 from './img/28.jpg';
import photo29 from './img/29.jpg';
import photo30 from './img/30.jpg';
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
    cupello: [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7,
        photo8,
        photo9,
        photo10,
        photo11,
        photo12,
        photo13,
        photo14,
        photo15,
        photo16,
        photo17,
        photo19,
        photo20,
        photo21,
        photo22,
        photo23,
        photo24,
        photo25,
        photo26,
        photo27,
        photo28,
        photo29,
        photo30,

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