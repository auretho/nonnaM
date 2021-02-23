import React from 'react';
import panier from './img/panier.png';
import salade from './img/salade.png';
import artichaut from './img/artichaut.png';
import tomate from './img/tomate.png';
import drop from './img/goutte.png';
import drop2 from './img/goutte2.png';

import pot from './img/pot.png';
import pot2 from './img/pot2.png';

import './style.scss';

const Process = ({handleSticky}) => {

    const handleStickyElement = (evt) => {
        const target = evt.target;
        console.log(target.scrollTop);
        console.log('ça marche!!')
       
        handleSticky();
    }


    return(
    <section className="process" onScroll={handleStickyElement}>
        <h1>Voici comme nous faisons pour vous donner de bons légumes</h1>
        <div className="wrapper process-one" >
            <img src={salade} alt="" className="process-veggie left"/>
            <img src={tomate} alt="" className="process-veggie right"/>
            <img src={artichaut} alt="" className="process-veggie left"/>
            <img src={salade} alt="" className="process-veggie right"/>
            <img src={tomate} alt="" className="process-veggie left"/>
            <img src={artichaut} alt="" className="process-veggie right"/>

            <img src={panier} alt="" className="process-basket"/>
        </div>
        <div className="wrapper process-two">
            <div className="drops">
                <div className="red-drops">
                    <img src={drop} alt="" className="process-drop left-drop"/>
                    <img src={drop} alt="" className="process-drop left-drop"/>
                    <img src={drop} alt="" className="process-drop left-drop"/>
                    <img src={drop} alt="" className="process-drop left-drop"/>
                    <img src={drop} alt="" className="process-drop left-drop"/>
                </div>

                <div className="green-drops">
                    <img src={drop2} alt="" className="process-drop right-drop"/>
                    <img src={drop2} alt="" className="process-drop right-drop"/>
                    <img src={drop2} alt="" className="process-drop right-drop"/>
                    <img src={drop2} alt="" className="process-drop right-drop"/>
                    <img src={drop2} alt="" className="process-drop right-drop"/>
                </div>

            </div>
            
            <div className="jars">
                <img src={pot} alt="" className="process-jar"/>
                <img src={pot2} alt="" className="process-jar"/>
            </div>



        </div>
        
    </section>
)}

export default Process;