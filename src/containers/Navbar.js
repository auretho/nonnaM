import { connect } from 'react-redux';
import NavBar from '../components/Nav';

const mapStateToProps = (state) => ({
    navlinks: state.user.navlinks,
});
  
const mapDispatchToProps = null;

export default connect( mapStateToProps, mapDispatchToProps )(NavBar)