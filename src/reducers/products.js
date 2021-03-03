import potTomate from '../assets/pot.png';
import potArtichaut from '../assets/pot2.png';
import oil from '../assets/oil.png';


const initialState = {
    img: 
    [
        {
          image: potTomate,
          shortName: 'tomates',
          name: "Salsa picante",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel." 
        },
        {
          image: potArtichaut,
          shortName: 'artichauts',
          name: "Coeurs d'artichauts",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel."  
        },
        {
            image: oil,
            shortName: 'huile',
            name: "Huile d'olive",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel."  
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