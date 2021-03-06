import tomate from '../assets/tomate.png';
import artichaut from '../assets/artichaut.png';
import olive from '../assets/olive.png';
import truffe from '../assets/truffe.png';



const initialState = {
    img: 
    [
        {
          image: tomate,
          shortName: 'tomates',
          name: "Salsa picante",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel." 
        },
        {
          image: artichaut,
          shortName: 'artichauts',
          name: "Coeurs d'artichauts",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel."  
        },
        {
            image: olive,
            shortName: 'huile',
            name: "Huile d'olive",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel."  
        },
        {
            image: truffe,
            shortName: 'truffe',
            name: "Truffe blanche",
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