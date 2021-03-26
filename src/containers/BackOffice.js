import { connect } from 'react-redux';
import BackOffice from '../components/BackOffice';
import { editStock, onChange } from '../actions/backoffice';

const mapStateToProps = (state) => ({
    stock: state.backoffice.stock,
    products: state.backoffice.products,

});
  
const mapDispatchToProps = (dispatch) => ({
    handleStockEdit: (newStock) => {
        dispatch(editStock(newStock))
    },

    handleChange: (payload) => {
        dispatch(onChange(payload))
    },
});

export default connect( mapStateToProps, mapDispatchToProps )(BackOffice)