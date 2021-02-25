import React from 'react';
import { Parallax } from 'react-parallax';
import BG from '../../img/house.png';

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

{/* TEST ====================== */}

    const rendered = (percentage) => {
        console.log(percentage);
        return(
        <div>
            <img src={tomate} alt="" style={{ height: '50', left: '50%', top: '50%', position: 'absolute', transform: `translate(-50%, -50%) scale(${percentage * 1})`, opacity: `${percentage * .7}`}}/>
        </div>
    )}
{/* TEST ====================== */}


    return(
    <section className="process" >

{/* TEST ====================== */}

        <Parallax style={{ height: '100vh', backgroundColor: 'rgb(214, 244, 195)'}} strength={200} renderLayer={rendered}>
            {/* <div style={{height: '100vh'}}>
                <img src={tomate} alt="" style={{ height: '200', left: '50%', top: '50%', position: 'absolute', transform: 'translate(-50%, -50%)'}}/>
            </div> */}


{/* TEST ====================== */}

        </Parallax>
        <h1 className="process-header">Voici comme nous faisons pour vous donner les meilleurs légumes:</h1>
        <div className="wrapper process-one" >

            <p className="process-description" style={{ transition: 'opacity'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates veritatis aliquam quidem, perspiciatis quam assumenda saepe, minima voluptate possimus doloremque consequuntur earum omnis repellendus est, deleniti repudiandae. Magnam, maiores! Suscipit recusandae iste unde nisi accusantium distinctio. Ducimus dolor veniam, nemo eveniet amet quia. Consequuntur delectus adipisci enim totam minus?
            </p>
            
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