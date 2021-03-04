import scribble from '../assets/scribble.png';
import arrow1 from '../assets/arrow1.png';
import smile1 from '../assets/smile1.png';
import smile2 from '../assets/smile2.png';


const initialState = {
   location:[
        {
            img1: smile1,
            img2: smile2,
            arrow: arrow1,
            imgBlockPos: {
                pos: 'relative',
                top: '55%',
                left: '60%', 
            },
            smileyPos: {
                pos: 'relative',
                top: '-150px'
            },
            textPos: {
                pos: 'absolute',
                top: '-80%',
                left: '-60%',
            }
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