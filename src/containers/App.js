import { connect } from 'react-redux';
import App from '../components/App';
import { onRedirect } from '../actions/user';

const mapStateToProps = (state) => ({
    redirection: state.orders.redirection,
    logged: state.backoffice.logged,
});
  
const mapDispatchToProps = (dispatch) => ({
    rebootRedirection: (payload) => {
        dispatch(onRedirect(payload))
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(App)