import { connect } from 'react-redux';
import NavBar from '../components/Nav';
import { onToggle, onChange } from '../actions/user';

const mapStateToProps = (state) => ({
    navlinks: state.user.navlinks,
    burgerOpened: state.user.burgerOpened,
    login: state.backoffice.login,
});
  
const mapDispatchToProps = (dispatch) => ({
    handleBurger: () => {
        dispatch(onToggle())
    },

    handleChange: (payload) => {
        dispatch(onChange(payload))
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(NavBar)