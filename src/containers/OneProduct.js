import { connect } from 'react-redux';
import OneProduct from '../components/BackOffice/ListProducts/OneProduct';
import { onChange } from '../actions/backoffice';
import {findOneProduct} from '../actions/user';

const mapStateToProps = (state) => ({
    stock: state.backoffice.stock,
    products: state.backoffice.products,
    newProduct: state.backoffice.newProduct,
    productSelected: state.backoffice.productSelected,
});
  
const mapDispatchToProps = (dispatch) => ({
    handleChange: (payload) => {
        dispatch(onChange(payload))
    },

    findOneProduct: () => {
        dispatch(findOneProduct());
    },
});

export default connect( mapStateToProps, mapDispatchToProps )(OneProduct)