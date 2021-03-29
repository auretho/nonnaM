import { connect } from 'react-redux';
import Orders from '../components/Orders';
import { onChange, onSubmit, addProduct } from '../actions/user';

const mapStateToProps = (state) => ({
    inputDetails: state.orders.inputDetails,
    form: state.orders.form,
    total: state.orders.total,
    redirection: state.orders.redirection,
    delivery: state.orders.delivery,
    prodList: state.products.products,

});
  
const mapDispatchToProps = (dispatch) => ({
    handleChange: (payload) => {
        dispatch(onChange(payload))
    },

    handleSubmit: () => {
        dispatch(onSubmit())
    },

    addNewProduct: (payload) => {
        dispatch(addProduct(payload))
    },
});

export default connect( mapStateToProps, mapDispatchToProps )(Orders)