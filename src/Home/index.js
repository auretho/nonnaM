// import React from'react';
import Header from './Header';
import Main from './Main';
import Comments from './Comments';

import './style.scss';

const Home = () => (
    <div className="home">
        <Header />
        <Main />
        <Comments />
    </div>
)

export default Home;