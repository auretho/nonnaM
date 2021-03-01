import React from'react';
import Header from './Header';
import Main from './Main';
import Comments from '../../containers/Comments';
import Process from '../../containers/Process';

import './style.scss';

const Home = () => {

    const handleHomeScroll = () => {
        const translate = document.querySelectorAll('.translate');
        const handleScroll = () => {
            const scroll = window.pageYOffset;
            
            translate.forEach( element => {
                const speed = element.dataset.speed;
                element.style.transform = `translateY(${scroll * speed}px)`;
            })
        }
        window.addEventListener('scroll', handleScroll);
    }
    
    return(
    <div className="home">
            <Header handleHomeScroll={handleHomeScroll}/>
            <Main handleHomeScroll={handleHomeScroll}/>
            <Comments handleHomeScroll={handleHomeScroll}/>
            <Process handleHomeScroll={handleHomeScroll}/>
    </div>
)}

export default Home;