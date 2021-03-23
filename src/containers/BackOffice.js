import { connect } from 'react-redux';
import BackOffice from '../components/BackOffice';
import {editStock} from '../actions/backoffice';

const mapStateToProps = (state) => ({
    stock: state.backoffice.stock,
});
  
const mapDispatchToProps = (dispatch) => ({
    handleStockEdit: (newStock) => {
        dispatch(editStock(newStock))
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(BackOffice)