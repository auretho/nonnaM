import React from 'react';
import { Parallax } from 'react-parallax';
import Modal from './ModalWindow.js';

import champs from '../../../assets/champs2.png';
import './style.scss';


const Products = ({img}) => {

    const rendered = (percentage) => {
        const transformStyle = {transform: `scale(${percentage * .5})`};
        return(
        <div className="product-images" >
            {
            img.map((element, i) => (
                <div className="product-block" key={i} id={element.shortName}>
                    <Modal item={element} triggerItem={
                        <img className="product-image"
                            src={element.image} alt="" 
                            style={transformStyle}   
                        />
                    }/>

                    <Modal item={element} triggerItem={
                        <h1 className="product-image-title" 
                            style={transformStyle}>
                            {element.name}
                        </h1>
                    }/>
                </div>
            ))
            }
        </div>
    )}

    return(
    <section className="product" id="nos-produits">
        <Parallax className="product-parallax" bgImage={champs} style={{ height: '100vh'}} strength={300} renderLayer={rendered} />
            {/* <h1 className="product-text">Et vous, quel produit vous intéresse?</h1> */}
    </section>
)}

export default Products;



// CODE TEST A GARDER
/* <div className="wrapper product-one" >

                    <p className="product-description" style={{ transition: 'opacity'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates veritatis aliquam quidem, perspiciatis quam assumenda saepe, minima voluptate possimus doloremque consequuntur earum omnis repellendus est, deleniti repudiandae. Magnam, maiores! Suscipit recusandae iste unde nisi accusantium distinctio. Ducimus dolor veniam, nemo eveniet amet quia. Consequuntur delectus adipisci enim totam minus?
                    </p>
                    
                    <img src={salade} alt="" className="product-veggie left"/>
                    <img src={tomate} alt="" className="product-veggie right"/>
                    <img src={artichaut} alt="" className="product-veggie left"/>
                    <img src={salade} alt="" className="product-veggie right"/>
                    <img src={tomate} alt="" className="product-veggie left"/>
                    <img src={artichaut} alt="" className="product-veggie right"/>
                    <img src={panier} alt="" className="product-basket"/>
                </div> */
                /* <div className="wrapper product-two">
                    <div className="drops">
                        <div className="red-drops">
                            <img src={drop} alt="" className="product-drop left-drop"/>
                            <img src={drop} alt="" className="product-drop left-drop"/>
                            <img src={drop} alt="" className="product-drop left-drop"/>
                            <img src={drop} alt="" className="product-drop left-drop"/>
                            <img src={drop} alt="" className="product-drop left-drop"/>
                        </div>

                        <div className="green-drops">
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                        </div>

                    </div>
                    
                    <div className="jars">
                        <img src={pot} alt="" className="product-jar"/>
                        <img src={pot2} alt="" className="product-jar"/>
                    </div>
                </div> */