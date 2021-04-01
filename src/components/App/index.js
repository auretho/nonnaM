import { Switch, Route } from 'react-router-dom';
import Nav from '../../containers/Navbar';
import Home from '../Home';
import Orders from '../../containers/Orders';
import BackOffice from '../../containers/BackOffice';
import Addproducts from '../BackOffice/AddProducts';
import Stock from '../BackOffice/Stock';
import Error from '../Error';
import './style.scss';

function App({redirection, rebootRedirection}) {
  if(redirection){
    setTimeout(() => {
      rebootRedirection(redirection)
    }, 8000);
  }
  

  return (
    <div className="app" id="bienvenue" >
      <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/commandes" component={Orders}/>
          <Route path="/backoffice" component={BackOffice}/>
          <Route component={Error} />
        </Switch>
    </div>
  );
}

export default App;
