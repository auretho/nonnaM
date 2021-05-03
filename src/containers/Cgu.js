import { connect } from 'react-redux';
import Cgu from '../components/Home/Contact/Cgu';

const mapStateToProps = (state) => ({
    legals: state.backoffice.legals,
});
  
const mapDispatchToProps = (dispatch) => ({

});

export default connect( mapStateToProps, mapDispatchToProps )(Cgu)