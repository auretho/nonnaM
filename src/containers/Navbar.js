import { connect } from 'react-redux';
import NavBar from '../components/Nav';
import { onToggle } from '../actions/user';

const mapStateToProps = (state) => ({
    navlinks: state.user.navlinks,
    burgerOpened: state.user.burgerOpened,
});
  
const mapDispatchToProps = (dispatch) => ({
    handleBurger: () => {
        dispatch(onToggle())
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(NavBar)