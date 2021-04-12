import { connect } from 'react-redux';
import Contact from '../components/Home/Contact';
import { findAllLegals } from '../actions/user';

const mapStateToProps = (state) => ({
    legals: state.backoffice.legals,
});
  
const mapDispatchToProps = (dispatch) => ({

    findAllLegals: () => {
        dispatch(findAllLegals());
    },
});

export default connect( mapStateToProps, mapDispatchToProps )(Contact)