import { connect } from 'react-redux';
import Legals from '../components/Home/Contact/Legals';

const mapStateToProps = (state) => ({
    legals: state.backoffice.legals,
});
  
const mapDispatchToProps = (dispatch) => ({

});

export default connect( mapStateToProps, mapDispatchToProps )(Legals)