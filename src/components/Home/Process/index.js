import React from 'react';
import { Parallax } from 'react-parallax';

import champs from '../../../assets/champs.png'; 
// import cupello from '../../../assets/cupello.png'; 

import brouette from '../../../assets/brouette.png'; 
// import panier from '../../../assets/panier.png';
// import salade from '../../../assets/salade.png';
// import artichaut from '../../../assets/artichaut.png';
// import tomate from '../../../assets/tomate.png';
// import drop from '../../../assets/goutte.png';
// import drop2 from '../../../assets/goutte2.png';
// import pot from '../../../assets/pot.png';
// import pot2 from '../../../assets/pot2.png';

import './style.scss';

const Process = ({handleHomeScroll}) => {
    handleHomeScroll();

    const rendered = (percentage) => {
        // console.log(percentage);
        return(
        <div>
            <img src={brouette} alt="" 
                 style={{ 
                    height: '500px', 
                    position: 'absolute',
                    top: '50%',
                    left: '50%', 
                    transform: `scale(${percentage * .5})`, 
                    // opacity: `${percentage * .7}`
                 }}
                 className="process-frontImage"
            />
        </div>
    )}

    return(
    <section className="process-section">
        <Parallax bgImage={champs} style={{ height: '100vh'}} strength={300} renderLayer={rendered} className="process">
            <div style={{height: '100vh', position: 'relative'}} className="process-div" >

                <h1 className="process-header">Voici comme nous faisons pour vous donner les meilleurs légumes:</h1>
                
            </div>
        </Parallax>

        {/* <div style={{ height: '15vh', background: 'linear-gradient(to bottom, pink, transparent)', position: 'relative', top: '-150px'}}></div> */}
    </section>
)}

export default Process;



// CODE TEST A GARDER
/* <div className="wrapper process-one" >

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
                </div> */
                /* <div className="wrapper process-two">
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
                </div> */