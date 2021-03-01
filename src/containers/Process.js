import { connect } from 'react-redux';
import Process from '../components/Home/Process';

const mapStateToProps = (state) => ({
    img: state.process.img,
});
  
const mapDispatchToProps = null;

export default connect( mapStateToProps, mapDispatchToProps )(Process)