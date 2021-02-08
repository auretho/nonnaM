import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import Home from '../Home';
import Product from '../Product';
import './style.scss';

function App() {
  return (
    <div className="app">
          <Nav />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/tomates">
          <Product />
        </Route>

      </Switch>
          <Footer />
    </div>
  );
}

export default App;
