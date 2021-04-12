import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import BackOffProducts from './BackOffProducts';
import Welcome from './Welcome';
import AddProducts from './BackOffProducts/AddProducts';
import ListProducts from './BackOffProducts/ListProducts';
import OneProduct from '../../containers/OneProduct';
import UpdateProduct from './BackOffProducts/UpdateProduct';
import Stock from './Stock';
import Legals from './BackOffLegals';
import './style.scss';

const BackOffice = ({products, handleChange, newProduct, handleAddNewProduct, findAllProducts, productSelected, updateOneProduct, deleteOneProduct, activeMenuItem, updateStock, stock, findAllLegals, legals, updateLegals}) => {


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
      <Menu handleChange={handleChange} activeMenuItem={activeMenuItem}/>

        <Switch>
          <Route exact path="/backoffice" component={Welcome} />

          <Route exact path="/backoffice/produits" component={BackOffProducts} />

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
                   handleChange={handleChange}
                   updateStock={updateStock}
                   stock={stock}/>
          </Route> 

          <Route exact path="/backoffice/legals">
            <Legals findAllLegals={findAllLegals} 
                    legals={legals}
                    handleChange={handleChange}
                    updateLegals={updateLegals}/>
          </Route>
        </Switch>          
    </div>
)}

export default BackOffice;