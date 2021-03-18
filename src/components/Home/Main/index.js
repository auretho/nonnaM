import React from'react';
import { Parallax } from 'react-parallax';

import bg from '../../../assets/champs.jpg';
import papa from '../../../assets/papa.jpg';
import nonna from '../../../assets/nonna-lu.jpg';
import mamma from '../../../assets/mamma2.png';

import './style.scss';

const Main = () => {
    
    return(
    <section id="notre-histoire">
    <Parallax bgImage={bg}  className="main" strength={300}>
        
        <div className="main-blocks-container" >
            <div className="main-blocks-pictures">
                <div className="main-presentation-block">
                    <img src={papa} alt="presentation de l'equipe" className="main-presentation-picture"/>
                </div>
                <div className="main-presentation-block">
                    <img src={nonna} alt="presentation de l'equipe" className="main-presentation-picture"/>
                </div>
                <div className="main-presentation-block">
                    <img src={mamma} alt="presentation de l'equipe" className="main-presentation-picture mamma"/>
                </div>
            </div>

            <div src="" alt="presentation de l'equipe" className="main-blocks-text text-block">
                <p className="main-presentation-description">
                C'est une histoire simple, comme il y en tant d'autres. Une histoire de famille, de partage et d'amour d'une terre. 
                </p>
                <p className="main-presentation-description">
                Et pour sublimer cette terre, il y a une femme, Nonna Maria, une cuisinière passionnée, qui a donné vie à ses récoltes.
                </p>
                <p className="main-presentation-description">
                Et c'est ainsi, au détour d'une lasagne aux artichauts entre amis, d'un plat de pâtes sauce tomate maison, d'un "aperitivo" qu'est née l'envie de vous faire partager ces produits de la belle région d'Abruzzo et plus précisément de la ville de Cupello.
                </p>
                <p className="main-presentation-description">
                Les produits d'une vie, les "<span >ricette speciale</span>" de Nonna, c'est cela que nous avons décidé de vous faire partager sur ce site. 
                </p>
                <p className="main-presentation-description">
                A presto ... 
                ​</p>
            </div>
        </div>
    </Parallax>
    </section>
)}

export default Main;