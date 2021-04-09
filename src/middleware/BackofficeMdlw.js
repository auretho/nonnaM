import axios from 'axios';
import { useParams, Redirect } from "react-router";
import { ADD_PRODUCT_TO_DB } from '../actions/backoffice';
import { FIND_ALL_PRODUCTS, findAllProductsSuccess, findAllProductsError, 
         FIND_ONE_PRODUCT, findOneProductSuccess, findOneProductError,
         UPDATE_ONE_PRODUCT, updateOneProductSuccess, updateOneProductError, DELETE_ONE_PRODUCT, SIGNUP_SUBMIT, LOGIN_SUBMIT, loginSuccess, LOGOUT_SUBMIT} from '../actions/user';

const backofficeMdlw = (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;
    
    const token = localStorage.getItem('token');
    const ide = store.getState().backoffice.productSelected._id;

    switch (action.type){
        case SIGNUP_SUBMIT:
          axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'post',
            url: `http://localhost:3001/backoffice/user/signup`,
            data: {
              email: store.getState().backoffice.login.email,
              password: store.getState().backoffice.login.password,
            }
          })
          .then(res => {
            console.log(res.data);
            store.getState().backoffice.login.email = '';
            store.getState().backoffice.login.password = '';
          })
        break;

        case LOGIN_SUBMIT:
        const errorMsg = document.querySelector('.error-login-message');
        const admin = document.querySelector('.login-container');

        axios({
          headers: { Authorization: `Bearer ${token}`},
          method: 'post',
          url: `http://localhost:3001/backoffice/user/login`,
          data: {
            email: store.getState().backoffice.login.email,
            password: store.getState().backoffice.login.password,
          }
        })
        .then(res => {
          localStorage.setItem('token', res.data.token);
          errorMsg.classList.add('hidden');
          admin.classList.add('hidden')
          dispatch(loginSuccess());
        })
        .catch(() => {
            errorMsg.classList.remove('hidden');
        })
        break;

        case LOGOUT_SUBMIT:
          axios({
            // headers: { Authorization: `Bearer ${token}`},
            method: 'post',
            url: `http://localhost:3001/backoffice/user/logout`,
          })
          .then(() => {
            localStorage.clear();
          })
          .catch(() => {
          })
        break;

        case ADD_PRODUCT_TO_DB:
          const htmlform = document.querySelector("#addProds")
          const formData = new FormData(htmlform);

          axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'post',
            url:  `http://localhost:3001/backoffice/products/addNewProduct`,
            data: formData,
            })
            .then(res => {
              console.log(res.status);
              if(res.status === 201){
                window.location = "/backoffice/liste-produits"
              }
            })
          
          break;

        case FIND_ALL_PRODUCTS:
          axios({
            method: 'get',
            url:  `http://localhost:3001/backoffice/products/findAllProducts`,
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
          headers: { Authorization: `Bearer ${token}`},
          method: 'get',
          url:  `http://localhost:3001/backoffice/products/findProduct/${id}`,
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
          const UpdFormData = new FormData();
          UpdFormData.set('image', store.getState().backoffice.productSelected.image)
          UpdFormData.set('name', store.getState().backoffice.productSelected.name)
          UpdFormData.set('shortName', store.getState().backoffice.productSelected.shortName)
          UpdFormData.set('quantity', store.getState().backoffice.productSelected.quantity)
          UpdFormData.set('description', store.getState().backoffice.productSelected.description)
          UpdFormData.set('price', store.getState().backoffice.productSelected.price)
          
          axios({
          headers: { Authorization: `Bearer ${token}`},
          method: 'put',
          url:  `http://localhost:3001/backoffice/products/updateProduct/${ide}`,
          data: UpdFormData,
        })
        .then((res) => {
          console.log(res.data);
          if(res.status === 200){
            window.location = "/backoffice/produits"
          }
          dispatch(updateOneProductSuccess(res.data));
        })
        .catch((err) => {
          console.error(err);
          dispatch(updateOneProductError());
        })
        break;
        
        case DELETE_ONE_PRODUCT:
        axios({
          headers: { Authorization: `Bearer ${token}`},
          method: 'delete',
          url:  `http://localhost:3001/backoffice/products/deleteProduct/${ide}`,
        })
        .then(res => {
          if(res.status === 200){
            window.location = "/backoffice/produits"
          }
        })
        break;

        default:
            break;
    }
}

export default backofficeMdlw;