import { Switch, Route } from 'react-router-dom';
import Nav from '../../containers/Navbar';
import Home from '../Home';
import Orders from '../Orders';
import Error from '../Error';

import './style.scss';

function App() {
  return (
    <div className="app" id="bienvenue" >
      <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/commandes" component={Orders}/>
          <Route component={Error} />
        </Switch>
    </div>
  );
}

export default App;
