import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav';
import Home from '../Home';
// import Products from '../../containers/Products';
import About from '../../containers/About';

import './style.scss';

function App() {
  return (
    <div className="app">
      <Nav />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          
        </Switch>
    </div>
  );
}

export default App;
