import { connect } from 'react-redux';
import App from '../components/App';
import {onToggle} from '../actions/user';

const mapStateToProps = (state) => ({
    redirection: state.orders.redirection,
});
  
const mapDispatchToProps = (dispatch) => ({
    rebootRedirection: (payload) => {
        dispatch(onToggle(payload))
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(App)