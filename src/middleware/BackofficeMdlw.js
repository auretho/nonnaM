import axios from 'axios';
import { useParams } from "react-router";
import { ADD_PRODUCT_TO_DB } from '../actions/backoffice';
import { FIND_ALL_PRODUCTS, findAllProductsSuccess, findAllProductsError, 
         FIND_ONE_PRODUCT, findOneProductSuccess, findOneProductError,
         UPDATE_ONE_PRODUCT, updateOneProductSuccess, updateOneProductError } from '../actions/user';

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
                quantity: store.getState().backoffice.newProduct.quantity,
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

        case FIND_ONE_PRODUCT:
        const {id} = useParams();
        axios({
          method: 'get',
          url:  `http://localhost:3001/findProduct/${id}`,
        })
        .then((res) => {
          console.log(res.data);
          dispatch(findOneProductSuccess(res.data));
        })
        .catch((err) => {
          console.error(err);
          dispatch(findOneProductError());
        })
        break;

        case UPDATE_ONE_PRODUCT:
          let identification = store.getState().backoffice.productSelected._id;
        axios({
          method: 'put',
          url:  `http://localhost:3001/updateProduct/${identification}`,
          data: {
            _id: store.getState().backoffice.productSelected._id,
            image: store.getState().backoffice.productSelected.image,
            name: store.getState().backoffice.productSelected.name,
            shortName: store.getState().backoffice.productSelected.shortName,
            quantity: store.getState().backoffice.productSelected.quantity,
            description: store.getState().backoffice.productSelected.description,
            price: store.getState().backoffice.productSelected.price,

          }
        })
        .then((res) => {
          console.log(res.data);
          dispatch(updateOneProductSuccess(res.data));
        })
        .catch((err) => {
          console.error(err);
          dispatch(updateOneProductError());
        })
        break;
        default:
            break;
    }
}

export default backofficeMdlw;