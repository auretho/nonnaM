import React from 'react';
import panier from './img/panier.png';
import tomate from './img/tomate.png';
import salade from './img/salade.png';
import artichaut from './img/artichaut.png';
import './style.scss';

const Process = () => (
    <div className="process">
        <div className="wrapper">
            <div className="left veggie-wrapper">
                <img src={tomate} alt="" className="process-img" id="left"/>
                <img src={artichaut} alt="" className="process-img" id="right"/>
                <img src={salade} alt="" className="process-img" id="left"/>
            </div>
            <div className="right veggie-wrapper">
                <img src={tomate} alt="" className="process-img" id="right"/>
                <img src={artichaut} alt="" className="process-img" id="left"/>
                <img src={salade} alt="" className="process-img" id="right"/>
            </div>
        </div>
            <div className="process-description">
                <h1 className="process-description-title">
                    Voici comment nous procédons pour vous donner les meilleurs légumes
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo mollitia doloribus voluptas possimus atque aliquid non delectus sequi voluptatem magni, nostrum at dicta. Rem dolorum autem a soluta facere.</p>
            </div>


        <img src={panier} alt="" className="process-img" id="basket"/>

    </div>
)

export default Process;