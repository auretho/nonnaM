import { connect } from 'react-redux';
import Products from '../components/Home/Products';
import { findAllProducts } from '../actions/user';

const mapStateToProps = (state) => ({
    img: state.products.img,
    products: state.backoffice.products,
});
  
const mapDispatchToProps = (dispatch) => ({
    findAllProducts: () => {
        dispatch(findAllProducts());
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(Products)