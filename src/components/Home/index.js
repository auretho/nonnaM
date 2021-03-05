import React from'react';
import Header from './Header';
import Main from './Main';
import About from '../../containers/About';
import Products from '../../containers/Products';
import Process from '../../containers/Process';
import Comments from '../../containers/Comments';
import Contact from './Contact';


import './style.scss';

const Home = () => {
    const handleScrollTop = () => {
        const hauteur = () => {
            const target = document.querySelectorAll('.pageSection');
            const links = document.querySelectorAll('nav a');
            const scrollY = window.scrollY;  
            
            console.log(window.location.pathname);
    
            target.forEach(section => {
                if(section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY){
                    links.forEach(link => {
                        // console.log(links);
                        // console.log(section);
                        // link.classList.add('active');
                    })
                    section.classList.add('active');
                }
                
                else{
                    section.classList.remove('active');
                }
            })
        };
        window.addEventListener('scroll', hauteur);
    };

    handleScrollTop();


    React.useEffect(() => {
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
        };
        handleHeaderScroll();
    }, [])
    
    return(
    <div className="home" id="home" onScroll={handleScrollTop}>
        <Header />
        <Main />
        <About />
        <Products />
        <Process />
        <Comments />
        <Contact />
    </div>
)}

export default Home;