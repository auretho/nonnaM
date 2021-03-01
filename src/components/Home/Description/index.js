import React from'react';
import './style.scss';

const Description = () => {
    
    const translate = document.querySelectorAll('.translate');
    
    const handleScroll = () => {
        const scroll = window.pageYOffset;
        
        translate.forEach( element => {
            const speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll * speed}px)`;
        })
    }

    window.addEventListener('scroll', handleScroll);

    return(
        <div className="description translate" data-speed="0.4">
            <div className="description-block translate" data-speed="-0.4">
                <p className="description-text">
                C'est une histoire simple, comme il y en tant d'autres. Une histoire de famille, de partage et d'amour d'une terre. 
                </p>
                <p className="description-text">
                Et pour sublimer cette terre, il y a (bien sûr) une femme, Nonna Maria, une cuisinière passionnée, qui a donné  vie à ces récoltes.
                </p>
                <p className="description-text">
                Et c'est ainsi, au détour d'une lasagne aux artichauds entre amis, d'un plat de pâtes sauce tomates maison, d'un "aperitivo" qu'est née l'envie de vous faire partager ces produits de la belle région d'Abruzzo et plus précisément de la ville de Cupello.
                </p>
                <p className="description-text">
                Les produits d'une vie, les "<span>ricette speciale</span>" de Nonna, c'est cela que nous avons décidé de vous faire partager sur ce site. 
                </p>
                <p className="description-text">
                A presto ... 
                ​</p>
            </div>
        </div>
)}

export default Description;