import { connect } from 'react-redux';
import About from '../components/About';

const mapStateToProps = (state) => ({
    cupello: state.user.cupello,
});
  
const mapDispatchToProps = null;

export default connect( mapStateToProps, mapDispatchToProps )(About)