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
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia officiis amet iusto enim placeat quisquam saepe corrupti hic consectetur repellat.',
            imgBlockPos: {
                pos: 'relative',
                top: '55%',
                left: '60%', 
            },
            arrowPos: {
                pos: '',
                top: '',
                left: '',
            },

            smileyPos: {
                pos: 'relative',
                top: '-150px',
                left: '',
            },
            textPos: {
                pos: 'absolute',
                top: '-80%',
                left: '110%',
            },
        },
        {
            img1: smile1,
            img2: smile2,
            arrow: arrow2,
            title: 'L\'huile d\'olive',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia officiis amet iusto enim placeat quisquam saepe corrupti hic consectetur repellat.',
            imgBlockPos: {
                pos: 'relative',
                top: '55%',
                left: '10%', 
            },
            arrowPos: {
                pos: 'relative',
                top: '-70px',
                left: '-60px',
            },
            smileyPos: {
                pos: 'relative',
                top: '-230px',
                left: '-150px',
            },
            textPos: {
                pos: 'absolute',
                top: '40%',
                left: '-120%',
            },
        },
        {
            img1: smile1,
            img2: smile2,
            arrow: arrow3,
            title: 'Le soleil pour les tomates',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia officiis amet iusto enim placeat quisquam saepe corrupti hic consectetur repellat.',
            imgBlockPos: {
                pos: 'relative',
                top: '20%',
                left: '5%', 
            },
            arrowPos: {
                pos: '',
                top: '',
                left: '',
            },

            smileyPos: {
                pos: 'relative',
                top: '0px',
                left: '',
            },
            textPos: {
                pos: 'absolute',
                top: '-30%',
                left: '120%',
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