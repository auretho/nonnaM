import React from 'react';
import HoverImage from "react-hover-image";
import './style.scss';


const Products = ({location}) => {

    const handleHover = (evt) => { 
        evt.target.nextSibling.nextSibling.classList.remove('hidden');
        evt.target.parentElement.style.filter = "drop-shadow(0 0 5px black)";
    }

    const handleHoverOut = (evt) => {
        evt.target.nextSibling.nextSibling.classList.add('hidden'); 
        evt.target.parentElement.style.filter = '';
    }

    return(
    <div className="process" id="origine-des-produits">
        {
        location.map((element, i) => (
            <div 
                className="process-img" 
                key={i}
                style={{
                    position: `${element.imgBlockPos.pos}`,
                    top: `${element.imgBlockPos.top}`,
                    left: `${element.imgBlockPos.left}`,
            }}>
                <div 
                    className="process-imageDiv" 
                >
                    
                    <img 
                        src={element.arrow} 
                        alt="" 
                        className="process-arrow" 
                        onMouseOver={handleHover} 
                        onMouseLeave={handleHoverOut} 
                        style={{
                            position: `${element.arrowPos.pos}`,
                            top: `${element.arrowPos.top}`,
                            left: `${element.arrowPos.left}`,
                        }}
                    />
                    <HoverImage 
                        className="process-smile" 
                        src={element.img1} 
                        hoverSrc={element.img2} 
                        style={{
                            position: `${element.smileyPos.pos}`,
                            top: `${element.smileyPos.top}`,
                            left: `${element.smileyPos.left}`,

                        }}
                    />
                    <div 
                        className="process-text hidden"
                        style={{
                            position: `${element.textPos.pos}`,
                            top: `${element.textPos.top}`,
                            left: `${element.textPos.left}`,
                        }}
                    >
                        <h1>{element.title}:</h1> 
                        <p>{element.text}</p>
                    </div>
                </div>
            </div>
        ))    
        }
    </div>
)}

export default Products;