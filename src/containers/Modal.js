import { connect } from 'react-redux';
import Modal from '../components/Home/Products/ModalWindow';

const mapStateToProps = (state) => ({
    products: state.products.products,
});
  
const mapDispatchToProps = null;

export default connect( mapStateToProps, mapDispatchToProps )(Modal)