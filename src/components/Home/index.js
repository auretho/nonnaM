import React, {useEffect} from'react';
import Header from './Header';
import Main from './Main';
import About from '../../containers/About';
import Products from '../../containers/Products';
import Process from '../../containers/Process';
import Comments from '../../containers/Comments';
import Contact from '../../containers/Contact';


import './style.scss';

const Home = () => {

    useEffect(() => {
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

        const handleScrollNav = () => {
            const scrollNavBar = () => {            
                const scrollY = window.scrollY;  

                const allLinks = document.querySelectorAll('nav>div>ul>a');
                allLinks.forEach(link => {
                    let section = document.querySelector(link.hash);
                    // ========================== vvPOUR L'ORDER FORMvv ==================================
                    if(section === null){
                        return;
                    }
                    // ========================== ^^POUR L'ORDER FORM^^ ==================================

                    if (section.offsetTop <= scrollY && link.hash === "#accueil"){
                        link.classList.add("active");
                    } else {
                        link.classList.remove('active');
                    }
                    
                    if (section.offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }

                })

            };
            window.addEventListener('scroll', scrollNavBar);
        };
    
        handleHeaderScroll();
        handleScrollNav();
    }, [])
    
    return(
    <div className="home"  >
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