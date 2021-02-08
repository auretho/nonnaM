import Nav from '../Nav';
import Header from '../Header';
import Main from '../Main';
import Comments from '../Comments';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main />
      <Comments />
    </div>
  );
}

export default App;
