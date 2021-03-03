import React from 'react';
import HoverImage from "react-hover-image";

import arrow from '../../../assets/right-drawn-arrow.png';
import smile1 from '../../../assets/smile1.png';
import smile2 from '../../../assets/smile2.png';
import scribble from '../../../assets/scribble.png';


import './style.scss';


const Products = () => {
    
    // A SUPPRIMER SI UTILISATION DE HOVER
    // const handleClick = () => {
    //     const text = document.querySelector('.process-text');
    //     if (text.className === "process-text hidden"){
    //         text.className = "process-text";
    //     } else{
    //         text.className = "process-text hidden";
    //     }
    // }

    const handleHover = () => {
        const arrow = document.querySelector('.process-arrow');
        const text = document.querySelector('.process-text');
        
        text.className = "process-text";
        arrow.style = "filter: drop-shadow(0 0 5px black)";
    }

    const handleHoverOut = () => {
        const arrow = document.querySelector('.process-arrow');
        const text = document.querySelector('.process-text');
        
        text.className = "process-text hidden";
        arrow.style.filter = null;
    }

    const handleHover2 = () => {
        const arrow = document.querySelector('.process-arrow2');
        const text = document.querySelector('.process-text2');
        
        text.className = "process-text2";
        arrow.style = "filter: drop-shadow(0 0 5px black)";
    }

    const handleHoverOut2 = () => {
        const arrow = document.querySelector('.process-arrow2');
        const text = document.querySelector('.process-text2');
        
        text.className = "process-text2 hidden";
        arrow.style.filter = null;
    }

    return(
    <div className="process" id="process">

        {/* IMAGE ONE =============================================*/}
        <div className="image img-one">
            <img src={arrow} alt="" className="process-arrow" />
            <div onMouseOver={handleHover} onMouseLeave={handleHoverOut}>
                <HoverImage src={smile1} hoverSrc={smile2} /*onClick={handleClick}*/ className="process-smile"/>
            </div>
            
            <p className="process-text hidden">
                <h1>LES ARTICHAUTS:</h1> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam commodi voluptatum enim repellat vero.
            </p>
        </div>

        {/* IMAGE TWO =============================================*/}
        <div className="image img-two">
            <img src={scribble} alt="" className="process-arrow2" />
            <div onMouseOver={handleHover2} onMouseLeave={handleHoverOut2}>
                <HoverImage src={smile1} hoverSrc={smile2} /*onClick={handleClick}*/ className="process-smile2"/>
            </div>
            
            <p className="process-text2 hidden">
                <h1>L'HUILE D'OLIVE:</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam commodi voluptatum enim repellat vero.
            </p>
        </div>

    </div>
)}

export default Products;


