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
            price: "12€",
        },
        {
            image: artichaut,
            shortName: 'artichauts',
            name: "Coeurs d'artichauts",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: "23.50€",
        },
        {
            image: olive,
            shortName: 'huile',
            name: "Huile d'olive",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: "8€",
        },
        {
            image: truffe,
            shortName: 'truffe',
            name: "Truffes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: "11.20€",
        },
        {
            image: jambon,
            shortName: 'jambon',
            name: "Jambon",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
            price: "13.50€",
        },

    ],
    products: [
        [
            {
                image: tomate,
                shortName: 'tomates',
                name: "Sauces tomate",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.", 
                price: "12€",
            },
            {
                image: tomate,
                shortName: 'tomates',
                name: "Sauce tomate 1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.", 
                price: "14.50€",
            },
        ],
        [
            {
                image: artichaut,
                shortName: 'artichauts',
                name: "Coeurs d'artichauts",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: "23.50€",
            },
            {
                image: artichaut,
                shortName: 'artichauts',
                name: "Coeurs d'artichauts 1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: "10€",
            },
        ],
        [
            {
                image: olive,
                shortName: 'huile',
                name: "Huile d'olive",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: "8€",
            },
            {
                image: olive,
                shortName: 'huile',
                name: "Huile d'olive 1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: "23€",
            },
        ],
        [
            {
                image: truffe,
                shortName: 'truffe',
                name: "Truffes",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: "11.20€",
            },
            {
                image: truffe,
                shortName: 'truffe',
                name: "Truffes 1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: "20€",
            },
        ],
        [
            {
                image: jambon,
                shortName: 'jambon',
                name: "Jambon",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: "2€",
            },
            {
                image: jambon,
                shortName: 'jambon',
                name: "Jambon 1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro neque eos esse. Quae, tempore ipsum harum reprehenderit delectus vel.",  
                price: "13.50€",
            },
        ],
    ]
    
};

const products = (state = initialState, action = {}) => {
    switch (action.type){ 
        default:
            return state;
    }
}

export default products;