import axios from 'axios';

const ProductsMdlw = (store) => (next) => (action) => {
    next(action);
    // const { dispatch } = store;

    switch (action.type){
       
        default:
            break;
    }
}

export default ProductsMdlw;