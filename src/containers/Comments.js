import { connect } from 'react-redux';
import Comments from '../components/Home/Comments';

const mapStateToProps = (state) => ({
    comments: state.user.comments,
});
  
const mapDispatchToProps = null;

export default connect( mapStateToProps, mapDispatchToProps )(Comments)