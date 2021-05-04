import { connect } from 'react-redux';
import Orders from '../components/Orders';
import { onOrderChange, onSubmit, addProduct } from '../actions/user';

const mapStateToProps = (state) => ({
    inputDetails: state.orders.inputDetails,
    form: state.orders.form,
    total: state.orders.total,
    redirection: state.orders.redirection,
    prodList: state.backoffice.products,

});
  
const mapDispatchToProps = (dispatch) => ({
    handleOrderChange: (payload) => {
        dispatch(onOrderChange(payload))
    },

    handleSubmit: () => {
        dispatch(onSubmit())
    },

    addNewProduct: (payload) => {
        dispatch(addProduct(payload))
    },
});

export default connect( mapStateToProps, mapDispatchToProps )(Orders)