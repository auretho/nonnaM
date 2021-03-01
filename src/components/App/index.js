import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import Home from '../Home';
import Product from '../Product';
import About from '../../containers/About';
import Contact from '../Contact';

import './style.scss';

function App() {
  return (
    <div className="app">
      <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>

          <Route path="/produits">
            <Product />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
