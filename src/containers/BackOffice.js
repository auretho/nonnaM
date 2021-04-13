import { connect } from 'react-redux';
import BackOffice from '../components/BackOffice';
import { editStock, onChange, addProductToDb } from '../actions/backoffice';
import {findAllProducts, findOneProduct, updateOneProduct, deleteOneProduct, updateStock, findAllLegals, updateLegals, findAllrecipes, addNewPhoto, updateRecipes, findAllPhotos, updatePhoto } from '../actions/user';

const mapStateToProps = (state) => ({
    stock: state.backoffice.stock,
    filteredProd: state.backoffice.filteredProd,
    products: state.backoffice.products,
    newProduct: state.backoffice.newProduct,
    productSelected: state.backoffice.productSelected,
    activeMenuItem: state.backoffice.activeMenuItem,
    legals: state.backoffice.legals,
    recipes: state.backoffice.recipes,
    allPhotos: state.backoffice.allPhotos,
    photoToUpdt: state.backoffice.photoToUpdt,
});
  
const mapDispatchToProps = (dispatch) => ({
    handleStockEdit: (newStock) => {
        dispatch(editStock(newStock))
    },

    handleChange: (payload) => {
        dispatch(onChange(payload))
    },

    handleAddNewProduct: (payload) => {
        dispatch(addProductToDb(payload))
    },

    findAllProducts: () => {
        dispatch(findAllProducts());
    },

    findOneProduct: () => {
        dispatch(findOneProduct());
    },

    updateOneProduct: () => {
        dispatch(updateOneProduct());
    },

    updateStock: () => {
        dispatch(updateStock());
    },

    deleteOneProduct: () => {
        dispatch(deleteOneProduct());
    },

    findAllLegals: () => {
        dispatch(findAllLegals());
    },

    updateLegals: () => {
        dispatch(updateLegals());
    },

    findAllrecipes: () => {
        dispatch(findAllrecipes());
    },

    updateRecipes: () => {
        dispatch(updateRecipes());
    },

    addNewPhoto: (payload) => {
        dispatch(addNewPhoto(payload));
    },

    findAllPhotos: () => {
        dispatch(findAllPhotos());
    },

    updatePhoto: () => {
        dispatch(updatePhoto());
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(BackOffice)