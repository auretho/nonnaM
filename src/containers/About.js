import { connect } from 'react-redux';
import About from '../components/Home/About';
import {findAllPhotos} from '../actions/user';

const mapStateToProps = (state) => ({
    allPhotos: state.backoffice.allPhotos,
});
  
const mapDispatchToProps = (dispatch) => ({
    findAllPhotos: () => {
        dispatch(findAllPhotos());
    },
});

export default connect( mapStateToProps, mapDispatchToProps )(About)