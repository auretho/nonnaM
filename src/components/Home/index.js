import React from'react';
import Header from './Header';
import Main from './Main';
import About from '../../containers/About';
import Products from '../../containers/Products';
import Process from './Process';
import Comments from '../../containers/Comments';
import Contact from './Contact';


import './style.scss';

const Home = () => {

    const handleHeaderScroll = () => {
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
            <Header handleHeaderScroll={handleHeaderScroll} />
            <Main />
            <About />
            <Products />
            <Process />
            <Comments />
            <Contact />
    </div>
)}

export default Home;