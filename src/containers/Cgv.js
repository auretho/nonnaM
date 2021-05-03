import { connect } from 'react-redux';
import Cgv from '../components/Home/Contact/Cgv';

const mapStateToProps = (state) => ({
    legals: state.backoffice.legals,
});
  
const mapDispatchToProps = (dispatch) => ({

});

export default connect( mapStateToProps, mapDispatchToProps )(Cgv)