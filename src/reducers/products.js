import tomate from '../assets/tomate2.png';
import artichaut from '../assets/artichaut2.png';
import olive from '../assets/olive2.png';
import truffe from '../assets/truffe.png';
import jambon from '../assets/jambon.png';
// import { FIND_ALL_PRODUCTS } from '../actions/user';

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
            name: "Huile d'olive",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: 8,
        },
        {
            image: truffe,
            shortName: 'truffe',
            name: "Truffes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: 11.20,
        },
        {
            image: jambon,
            shortName: 'jambon',
            name: "Jambon",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: 13.50,
        },

    ],
    products: [
        [
            {
                image: tomate,
                shortName: 'tomates',
                name: "Sauce tomate normale",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.", 
                price: 12,
                count: "",
            },
            {
                image: tomate,
                shortName: 'tomates',
                name: "Sauce tomate au basilic",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.", 
                price: 14.50,
                count: "",
            },
            {
                image: tomate,
                shortName: 'tomates',
                name: "Sauce tomate aux aubergines",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.", 
                price: 2.30,
                count: "",
            },
        ],
        [
            {
                image: artichaut,
                shortName: 'artichauts',
                name: "Coeurs d'artichauts",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: 23.50,
                count: "",
            },
            {
                image: artichaut,
                shortName: 'artichauts',
                name: "Coeurs d'artichauts (gros pot)",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: 10,
                count: "",
            },
        ],
        [
            {
                image: olive,
                shortName: 'huile',
                name: "Huile d'olive",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: 8,
                count: "",
            },
            {
                image: olive,
                shortName: 'huile',
                name: "Huile d'olive aux truffes",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: 23,
                count: "",
            },
        ],
        [
            {
                image: truffe,
                shortName: 'truffe',
                name: "Truffes blanches",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: 11.20,
                count: "",
            },
            {
                image: truffe,
                shortName: 'truffe',
                name: "Truffes noires",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: 20,
                count: "",
            },
        ],
        [
            {
                image: jambon,
                shortName: 'jambon',
                name: "Jambon blanc",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: 2,
                count: "",
            },
            {
                image: jambon,
                shortName: 'jambon',
                name: "Jambon fumé",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: 13.50,
                count: "",
            },
        ],
    ]
    
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