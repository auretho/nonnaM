import { connect } from 'react-redux';
import Process from '../components/Process';
import { getsSticky } from '../actions/process-actions';

const mapStateToProps = null;
  
const mapDispatchToProps = (dispatch) => ({
    handleSticky: () => {
        console.log('coucou');
        dispatch(getsSticky())
    }
});

export default connect( mapStateToProps, mapDispatchToProps )(Process)