import axios from 'axios';
import { useParams, Redirect } from "react-router";
import { ADD_PRODUCT_TO_DB } from '../actions/backoffice';
import { FIND_ALL_PRODUCTS, findAllProductsSuccess, findAllProductsError, 
         FIND_ONE_PRODUCT, findOneProductSuccess, findOneProductError,
         UPDATE_ONE_PRODUCT, updateOneProductSuccess, updateOneProductError, DELETE_ONE_PRODUCT, SIGNUP_SUBMIT, LOGIN_SUBMIT, loginSuccess, LOGOUT_SUBMIT, UPDATE_STOCK, updateStockSuccess, FIND_ALL_LEGALS, UPDATE_LEGALS, findAllLegalsSuccess, FIND_ALL_RECIPES, findAllrecipesSuccess, UPDATE_RECIPES, updateRecipeSuccess, ADD_NEW_PHOTO, FIND_ALL_PHOTOS, UPDATE_PHOTO, updatePhotoSuccess, findAllPhotosSuccess, } from '../actions/user';

const backofficeMdlw = (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;
    
    const token = localStorage.getItem('token');
    const ide = store.getState().backoffice.productSelected._id;

    switch (action.type){
      // SIGNUP & LOGIN ===========================
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

        // PRODUCTS SECTION ===========================
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
          // console.log(res.data);
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
      
        // STOCK SECTION ===========================
        case UPDATE_STOCK:
          axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'put',
            url:  `http://localhost:3001/backoffice/products/updateStock`,
            data: store.getState().backoffice.stock,
          })
          .then((res) => {
            dispatch(updateStockSuccess());
          })
          .catch((err) => {
            console.error(err);
          })
        break;
        
        // RECIPES SECTION ===========================
        case FIND_ALL_RECIPES:
          axios({
            method: 'get',
            url:  `http://localhost:3001/backoffice/recipe/findAllRecipes`,
          })
          .then((res) => {
            console.log(res.data);
            dispatch(findAllrecipesSuccess(res.data));
          })
          .catch((err) => {
            console.error(err);
          })
        break;

        case UPDATE_RECIPES:
          axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'put',
            url:  `http://localhost:3001/backoffice/recipe/updateRecipes`,
            data: store.getState().backoffice.recipeToUpdt,
          })
          .then((res) => {
            console.log(res.data);
            dispatch(updateRecipeSuccess());
          })
          .catch((err) => {
            console.error(err);
          })
        break;

        // PHOTOS SECTION ===========================
        case ADD_NEW_PHOTO:
          const photosForm = document.querySelector("#addPhotos")
          const photosFormData = new FormData(photosForm);

          axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'post',
            url:  `http://localhost:3001/backoffice/photo/addNewPhoto`,
            data: photosFormData,
            })
            .then(res => {
              console.log(res.status);
            })
          break;

        case FIND_ALL_PHOTOS:
          axios({
            method: 'get',
            url:  `http://localhost:3001/backoffice/photo/findAllPhotos`,
          })
          .then((res) => {
            console.log(res.data);
            dispatch(findAllPhotosSuccess(res.data))
          })
          .catch((err) => {
            console.error(err);
          })
        break;

        case UPDATE_PHOTO:
          const UpdPhotoFormData = new FormData();
          UpdPhotoFormData.set('num', store.getState().backoffice.photoToUpdt._id)
          UpdPhotoFormData.set('text', store.getState().backoffice.photoToUpdt.text)
          UpdPhotoFormData.set('image', store.getState().backoffice.photoToUpdt.image)

          axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'put',
            url:  `http://localhost:3001/backoffice/photo/updatePhoto`,
            data: UpdPhotoFormData,
          })
          .then((res) => {
            console.log(res.data);
            dispatch(updatePhotoSuccess());
          })
          .catch((err) => {
            console.error(err);
          })
        break;
                
        // LEGALS SECTION ===========================
        case FIND_ALL_LEGALS:
          axios({
            method: 'get',
            url:  `http://localhost:3001/backoffice/legal/findAllLegals`,
          })
          .then((res) => {
            const legalData = res.data.find(res => res);
            dispatch(findAllLegalsSuccess(legalData));
          })
          .catch((err) => {
            console.error(err);
          })
        break;

        case UPDATE_LEGALS:
          axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'put',
            url:  `http://localhost:3001/backoffice/legal/updateLegals`,
            data: store.getState().backoffice.legals,
          })
          .then((res) => {
            // console.log(res.data);
          })
          .catch((err) => {
            console.error(err);
          })
        break;

        default:
            break;
    }
}

export default backofficeMdlw;