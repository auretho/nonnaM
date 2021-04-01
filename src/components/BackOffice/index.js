import { Switch, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import AddProducts from './AddProducts';
import ListProducts from './ListProducts';
import Stock from './Stock';
import './style.scss';

const BackOffice = ({products, handleChange, newProduct, handleAddNewProduct, findAllProducts}) => {

  const handleStockChange = (evt) => {
    const {name, value} = evt.target;
    const result = products.find(product => (product.name === name)); 

    handleChange({
        products: products.map(product => {
        if (product.name === result.name) {
            product.stock = value;
            return product
        }
        return product;
    })})

}


    return(    
    <div className="backOffice">
      <Link to="/backoffice" style={{zIndex: '10'}}>
        <button>Backoffice</button>
      </Link>

        <Switch>
          <Route exact path="/backoffice" component={Welcome} />
          <Route exact path="/backoffice/liste-produits">
            <ListProducts findAllProducts={findAllProducts} products={products}/>
          </Route>
          <Route exact path="/backoffice/ajout-produits">
            <AddProducts handleChange={handleChange} newProduct={newProduct} handleAddNewProduct={handleAddNewProduct}/>
          </Route> 
          <Route exact path="/backoffice/stock">
            <Stock products={products} handleInputChange={handleStockChange}/>
          </Route> 
        </Switch>          
    </div>
)}

export default BackOffice;