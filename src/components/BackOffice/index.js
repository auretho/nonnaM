import { Switch, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import AddProducts from './AddProducts';
import Stock from './Stock';
import './style.scss';

const BackOffice = ({products, handleChange}) => {
    return(    
    <div className="backOffice">
      <Link to="/backoffice" style={{zIndex: '10'}}>
        <button>Backoffice</button>
      </Link>

        <Switch>
          <Route exact path="/backoffice" component={Welcome} />
          <Route exact path="/backoffice/ajout-produits" component={AddProducts}/>
          <Route exact path="/backoffice/stock">
            <Stock products={products} handleChange={handleChange}/>
          </Route> 
        </Switch>          
    </div>
)}

export default BackOffice;