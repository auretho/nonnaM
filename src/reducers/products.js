import tomate from '../assets/tomate2.png';
import artichaut from '../assets/artichaut2.png';
import olive from '../assets/olive2.png';
import truffe from '../assets/truffe.png';
import jambon from '../assets/jambon.png';

const initialState = {
    img:
    [
        {
            image: tomate,
            shortName: 'tomates',
            name: "Sauces tomate",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.", 
            price: 12,
        },
        {
            image: artichaut,
            shortName: 'artichauts',
            name: "Coeurs d'artichauts",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: 23.50,
        },
        {
            image: olive,
            shortName: 'olive',
            name: "Huile d'olive extra vierge",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: 8,
        },
        {
            image: truffe,
            shortName: 'truffe',
            name: "Huile et sauces à la truffe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: 11.20,
        },
        {
            image: jambon,
            shortName: 'jambon',
            name: "Nos autres produits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: 13.50,
        },

    ],    
};

const products = (state = initialState, action = {}) => {
    switch (action.type){ 
    // case FIND_ALL_PRODUCTS:
    //     return{
    //         ...state,
    //     };
        default:
            return state;
    }

}

export default products;