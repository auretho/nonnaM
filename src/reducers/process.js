import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/scribble.png';
import arrow3 from '../assets/arrow3.png';

import smile1 from '../assets/smile1.png';
import smile2 from '../assets/smile2.png';


const initialState = {
   location:[
        {
            img1: smile1,
            img2: smile2,
            arrow: arrow1,
            title: 'Les artichauts',
            text: "Ces légumes sont considérés comme la perle du village de Cupello (connu au niveau national comme le `Village des artichauts`; il y a même un panneau à l'entrée du village `Cupello città del Carciofo`! Ma famille utilise depuis plusieurs générations les mêmes graines qu'elle protège jalousement (de type `Mazzaferrata`) afin de vous livrer un produit d'exception.",
            imgBlockPos: {
                pos: 'relative',
                top: '45%',
                left: '60%', 
            },
            imgBlockPosMob: {
                pos: 'absolute',
                top: '65%',
                left: '55%', 
            },
            imgBlockPosIpad: {
                pos: 'absolute',
                top: '65%',
                left: '55%', 
            },
            arrowPos: {
                pos: '',
                top: '',
                left: '',
            },
            arrowPosMob: {
                pos: '',
                top: '',
                left: '',
            },
            arrowPosIpad: {
                pos: '',
                top: '',
                left: '',
            },
            smileyPos: {
                pos: 'relative',
                top: '-150px',
                left: '',
            },
            smileyPosMob: {
                pos: 'relative',
                top: '-50px',
                left: '',
            },
            smileyPosIpad: {
                pos: 'relative',
                top: '-130px',
                left: '',
            },
            textPos: {
                pos: 'absolute',
                top: '-80%',
                left: '110%',
            },
            textPosMob: {
                pos: 'absolute',
                top: '10%',
                left: '-140%',
            },
            textPosIpad: {
                pos: 'absolute',
                top: '50%',
                left: '-140%',
            },
        },
        {
            img1: smile1,
            img2: smile2,
            arrow: arrow2,
            title: 'L\'huile d\'olive',
            text: "Nous avons plus de 600 oliviers (qualité `leccino` et qualité `gentile`) dont ma famille prend soin depuis environ 1921. D'autres champs d'oliviers situés dans la province de Chieti peuvent être utilisés pour satisfaire vos besoins. Les olives une fois ramassées sont amenées au moulin et transformées en une huile extra vierge, douce, intense… et délicieuse.",
            imgBlockPos: {
                pos: 'relative',
                top: '45%',
                left: '10%', 
            },
            imgBlockPosMob: {
                pos: 'relative',
                top: '40%',
                left: '20%', 
            },
            imgBlockPosIpad: {
                pos: 'absolute',
                top: '50%',
                left: '30%', 
            },
            arrowPos: {
                pos: 'relative',
                top: '-70px',
                left: '-60px',
            },
            arrowPosMob: {
                pos: 'relative',
                top: '',
                left: '30px',
            },
            arrowPosIpad: {
                pos: 'relative',
                top: '-70px',
                left: '-60px',
            },
            smileyPos: {
                pos: 'relative',
                top: '-230px',
                left: '-150px',
            },
            smileyPosMob: {
                pos: 'relative',
                top: '-70px',
                left: '-30px',
            },
            smileyPosIpad: {
                pos: 'relative',
                top: '-200px',
                left: '-200px',
            },
            textPos: {
                pos: 'absolute',
                top: '40%',
                left: '-120%',
            },
            textPosMob: {
                pos: 'absolute',
                top: '100%',
                left: '-30%',
            },
            textPosIpad: {
                pos: 'absolute',
                top: '55%',
                left: '-60%',
            },
        },
        {
            img1: smile1,
            img2: smile2,
            arrow: arrow3,
            title: 'Le soleil (la plupart du temps) pour les tomates',
            text: "Nous avons la chance d'avoir des conditions climatiques optimales (soleil 300 jours par an, la mer à moins de 10 km et l'air frais de la montagne Maiella qui préserve notre vallée). Cupello se trouve sur ces coordonnées : latitude 42° 2'37.54\" N , longitude 14°40'58.85\" E",
            imgBlockPos: {
                pos: 'relative',
                top: '20%',
                left: '15%', 
            },
            imgBlockPosMob: {
                pos: 'relative',
                top: '20%',
                left: '25%', 
            },
            imgBlockPosIpad: {
                pos: 'absolute',
                top: '30%',
                left: '45%', 
            },
            arrowPos: {
                pos: '',
                top: '',
                left: '',
            },
            arrowPosMob: {
                pos: '',
                top: '',
                left: '',
            },
            arrowPosIpad: {
                pos: '',
                top: '',
                left: '',
            },
            smileyPos: {
                pos: 'relative',
                top: '0px',
                left: '',
            },
            smileyPosMob: {
                pos: 'relative',
                top: '0px',
                left: '',
            },
            smileyPosIpad: {
                pos: 'relative',
                top: '0px',
                left: '',
            },
            textPos: {
                pos: 'absolute',
                top: '-30%',
                left: '120%',
            },
            textPosMob: {
                pos: 'absolute',
                top: '130%',
                left: '-150%',
            },
            textPosIpad: {
                pos: 'absolute',
                top: '130%',
                left: '-40%',
            },
        },
    ]
};

const process = (state = initialState, action = {}) => {
    switch (action.type){ 
        default:
            return state;
    }
}

export default process;