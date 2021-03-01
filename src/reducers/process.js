import potTomate from '../assets/pot.png';
import potArtichaut from '../assets/pot2.png';
import oil from '../assets/oil2.png';


const initialState = {
    img: 
    [
        {
          name: potTomate,
          text: "Salsa picante"  
        },
        {
          name: potArtichaut,
          text: "Coeurs d'artichauts"  
        },
        {
            name: oil,
            text: "Huile d'olive"  
          },
    ]
};

const user = (state = initialState, action = {}) => {
    switch (action.type){ 
        default:
            return state;
    }
}

export default user;