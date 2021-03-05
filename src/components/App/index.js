import { Route } from 'react-router-dom';
import Nav from '../../containers/Navbar';
import Home from '../Home';

import './style.scss';

function App() {
  return (
    <div className="app">
      <Nav />
        <Route path="/">
          <Home />
        </Route>
    </div>
  );
}

export default App;
