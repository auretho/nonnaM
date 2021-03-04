// import photo1 from './img/1.jpg';
// import photo2 from './img/2.jpg';
// import photo3 from './img/3.jpg';
// import photo4 from './img/4.jpg';
// import photo5 from './img/5.jpg';
// import photo6 from './img/6.jpg';
// import photo7 from './img/7.jpg';
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
import photo18 from './img/18.jpg';
import photo19 from './img/19.jpg';
import photo20 from './img/20.jpg';
import photo21 from './img/21.jpg';



const initialState = {
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
        // photo1,
        // photo2,
        // photo3,
        // photo4,
        // photo5,
        // photo6,
        // photo7,
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
        photo18,
        photo19,
        photo20,
        photo21,
    ]

    
};

const user = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default user;