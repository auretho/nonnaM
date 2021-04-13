import { connect } from 'react-redux';
import Comments from '../components/Home/Comments';
import { findAllrecipes } from '../actions/user';

const mapStateToProps = (state) => ({
    recipes: state.backoffice.recipes,
});
  
const mapDispatchToProps = (dispatch) => ({
    findAllrecipes: () => {
        dispatch(findAllrecipes());
    },
});

export default connect( mapStateToProps, mapDispatchToProps )(Comments)