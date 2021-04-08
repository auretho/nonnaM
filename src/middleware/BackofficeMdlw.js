import axios from 'axios';
import { useParams, Redirect } from "react-router";
import { ADD_PRODUCT_TO_DB } from '../actions/backoffice';
import { FIND_ALL_PRODUCTS, findAllProductsSuccess, findAllProductsError, 
         FIND_ONE_PRODUCT, findOneProductSuccess, findOneProductError,
         UPDATE_ONE_PRODUCT, updateOneProductSuccess, updateOneProductError, DELETE_ONE_PRODUCT, UPLOAD_IMAGE, uploadImageSuccess } from '../actions/user';

const backofficeMdlw = (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;

    switch (action.type){

        case ADD_PRODUCT_TO_DB:
          const htmlform = document.querySelector("#addProds")
          const formData = new FormData(htmlform);

          axios({
            method: 'post',
            url:  `http://localhost:3001/addNewProduct`,
            data: formData,
            })
            .then(res => {
              console.log(res.status);
              if(res.status === 201){
                window.location = "/backoffice"
              }
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
          let ide = store.getState().backoffice.productSelected._id;
          const UpdFormData = new FormData();
          UpdFormData.set('image', store.getState().backoffice.productSelected.image)
          UpdFormData.set('name', store.getState().backoffice.productSelected.name)
          UpdFormData.set('shortName', store.getState().backoffice.productSelected.shortName)
          UpdFormData.set('quantity', store.getState().backoffice.productSelected.quantity)
          UpdFormData.set('description', store.getState().backoffice.productSelected.description)
          UpdFormData.set('price', store.getState().backoffice.productSelected.price)


          axios({
          method: 'put',
          url:  `http://localhost:3001/updateProduct/${ide}`,
          data: UpdFormData,
          // data: {
          //   ...store.getState().backoffice.productSelected,
          //   image: UpdFormData,
          // }
        })
        .then((res) => {
          console.log(res.data);
          if(res.status === 200){
            window.location = "/backoffice"
          }
          dispatch(updateOneProductSuccess(res.data));
        })
        .catch((err) => {
          console.error(err);
          dispatch(updateOneProductError());
        })
        break;
        
        case DELETE_ONE_PRODUCT:
          let identification = store.getState().backoffice.productSelected._id;
        axios({
          method: 'delete',
          url:  `http://localhost:3001/deleteProduct/${identification}`,
        })
        .then(res => {
          if(res.status === 200){
            window.location = "/backoffice"
          }
        })
        break;

        default:
            break;
    }
}

export default backofficeMdlw;