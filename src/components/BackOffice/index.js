import {useEffect} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import AddProducts from './Products/AddProducts';
import ListProducts from './Products/ListProducts';
import OneProduct from '../../containers/OneProduct';
import UpdateProduct from './Products/UpdateProduct';
import Stock from './Stock';
import './style.scss';

const BackOffice = ({products, handleChange, newProduct, handleAddNewProduct, findAllProducts, productSelected, updateOneProduct, deleteOneProduct}) => {


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
            <ListProducts findAllProducts={findAllProducts} 
                          products={products} 
                          productselected={productSelected}/>
          </Route>

          <Route exact path="/backoffice/produit/:id" render={({match}) => (
            <OneProduct id={match.params.id} 
                        deleteProduct={deleteOneProduct}
                        />
          )}>
          </Route>

          <Route exact path="/backoffice/ajout-produits">
            <AddProducts handleChange={handleChange} 
                         newProduct={newProduct} 
                         handleAddNewProduct={handleAddNewProduct}/>
          </Route> 

          <Route exact path="/backoffice/produit/modif/:id" render={({match}) => (
            <UpdateProduct id={match.params.id} 
                           handleChange={handleChange}
                           product={productSelected}
                           updateprod={updateOneProduct}
            />
          )}>
          </Route>

          <Route exact path="/backoffice/stock">
            <Stock products={products} 
                   handleInputChange={handleStockChange}/>
          </Route> 


        </Switch>          
    </div>
)}

export default BackOffice;