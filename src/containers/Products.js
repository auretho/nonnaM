import { connect } from 'react-redux';
import Products from '../components/Home/Products';

const mapStateToProps = (state) => ({
    img: state.products.img,
});
  
const mapDispatchToProps = null;

export default connect( mapStateToProps, mapDispatchToProps )(Products)