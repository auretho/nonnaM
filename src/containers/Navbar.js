import { connect } from 'react-redux';
import NavBar from '../components/Nav';
import { onToggle, onChange, signupSubmit, loginSubmit, logoutSubmit } from '../actions/user';

const mapStateToProps = (state) => ({
    navlinks: state.user.navlinks,
    burgerOpened: state.user.burgerOpened,
    login: state.backoffice.login,
    logged: state.backoffice.logged,
});
  
const mapDispatchToProps = (dispatch) => ({
    handleBurger: () => {
        dispatch(onToggle())
    },

    handleChange: (payload) => {
        dispatch(onChange(payload))
    },

    signupSubmit: () => {
        dispatch(signupSubmit())
    },

    loginSubmit: () => {
        dispatch(loginSubmit())
    },

    logoutSubmit: () => {
        dispatch(logoutSubmit())
    },
});

export default connect( mapStateToProps, mapDispatchToProps )(NavBar)