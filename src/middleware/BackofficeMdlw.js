import axios from 'axios';
import { ADD_PRODUCT_TO_DB } from '../actions/backoffice';
import { FIND_ALL_PRODUCTS, findAllProductsSuccess, findAllProductsError } from '../actions/user';

const backofficeMdlw = (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;

    switch (action.type){
        case ADD_PRODUCT_TO_DB:
          axios({
            method: 'post',
            url:  `http://localhost:3001/addNewProduct`,
            data:{
                name: store.getState().backoffice.newProduct.name,
                shortName: store.getState().backoffice.newProduct.shortName,
                image: store.getState().backoffice.newProduct.image,
                description: store.getState().backoffice.newProduct.description,
                price: store.getState().backoffice.newProduct.price,
            }
          })
          .then((res) => {
            const serverResponse = res.data;
            console.log(serverResponse);
            // dispatch(fetchTravelDataSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            // dispatch(fetchTravelDataError());
          })
          break;

        case FIND_ALL_PRODUCTS:
          axios({
            method: 'get',
            url:  `http://localhost:3001/findAllProducts`,
          })
          .then((res) => {
            console.log(res.data);
            dispatch(findAllProductsSuccess(res.data));
          })
          .catch((err) => {
            console.error(err);
            dispatch(findAllProductsError());
          })
          break;

        default:
            break;
    }
}

export default backofficeMdlw;