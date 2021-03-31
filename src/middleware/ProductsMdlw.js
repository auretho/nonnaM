import axios from 'axios';
import { FIND_ALL_PRODUCTS } from '../actions/user';

const ProductsMdlw = (store) => (next) => (action) => {
    next(action);
    // const { dispatch } = store;

    switch (action.type){
        case FIND_ALL_PRODUCTS:
          axios({
            method: 'get',
            url:  `http://localhost:3001/findAllProducts`,
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

        default:
            break;
    }
}

export default ProductsMdlw;