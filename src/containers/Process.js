import { connect } from 'react-redux';
import Process from '../components/Home/Process';

const mapStateToProps = (state) => ({
    location: state.process.location,
});
  
const mapDispatchToProps = null;

export default connect( mapStateToProps, mapDispatchToProps )(Process)