import { connect } from 'react-redux';
import Modal from '../components/Home/Products/ModalWindow';

const mapStateToProps = (state) => ({
    products: state.backoffice.products,
});
  
const mapDispatchToProps = null;

export default connect( mapStateToProps, mapDispatchToProps )(Modal)