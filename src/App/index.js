import Nav from '../Nav';
import Header from '../Header';
import Main from '../Main';
import Comments from '../Comments';
import Footer from '../Footer';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
