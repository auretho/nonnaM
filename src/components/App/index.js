import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from '../../containers/Navbar';
import Home from '../Home';
import Legals from '../../containers/Legals';
import Orders from '../../containers/Orders';
import BackOffice from '../../containers/BackOffice';
import Error from '../Error';
import './style.scss';

function App({redirection, rebootRedirection, logged}) {

  if(redirection){
    setTimeout(() => {
      rebootRedirection(redirection)
    }, 8000);
  }
  

  return (
    <div className="app" id="bienvenue" >
      <Nav />
          {
            logged ? 
            <Redirect to="/backoffice"/>
            :
            <Redirect to="/#bienvenue" />
          }
        <Switch>

          <Route exact path="/" component={Home}/>
          <Route exact path="/mentions-legales" component={Legals} />
          <Route exact path="/commandes" component={Orders}/>
          <Route path="/backoffice" component={BackOffice}/>
          <Route component={Error} />
        </Switch>
    </div>
  );
}

export default App;
