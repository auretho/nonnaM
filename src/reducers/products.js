import potTomate from '../assets/pot.png';
import potArtichaut from '../assets/pot2.png';
import oil from '../assets/oil.png';


const initialState = {
    img: 
    [
        {
          name: potTomate,
          shortName: 'tomates',
          text: "Salsa picante"  
        },
        {
          name: potArtichaut,
          shortName: 'artichauts',
          text: "Coeurs d'artichauts"  
        },
        {
            name: oil,
            shortName: 'huile',
            text: "Huile d'olive"  
          },
    ]
};

const products = (state = initialState, action = {}) => {
    switch (action.type){ 
        default:
            return state;
    }
}

export default products;