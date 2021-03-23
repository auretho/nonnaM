import { connect } from 'react-redux';
import Orders from '../components/Orders';
import { onSubmit } from '../actions/user';

const mapStateToProps = (state) => ({
    details: state.orders.details,
})  ;
  
const mapDispatchToProps = (dispatch) => ({
    handleSubmit: () => {
        dispatch(onSubmit())
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(Orders)