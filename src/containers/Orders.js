import { connect } from 'react-redux';
import Orders from '../components/Orders';
import { onChange, onSubmit } from '../actions/user';

const mapStateToProps = (state) => ({
    form: state.orders.form,
});
  
const mapDispatchToProps = (dispatch) => ({
    handleChange: (payload) => {
        dispatch(onChange(payload))
    },

    handleSubmit: () => {
        dispatch(onSubmit())
    },
});

export default connect( mapStateToProps, mapDispatchToProps )(Orders)