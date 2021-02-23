// import React from'react';
import Header from './Header';
import Main from './Main';
import Comments from '../../containers/Comments';
import Process from '../../containers/Process';

import './style.scss';

const Home = () => (
    <div className="home">
        <Header />
        <Main />
        <Comments />
        <Process />
    </div>
)

export default Home;