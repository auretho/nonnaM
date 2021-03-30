import React from 'react';
import './style.scss';

const ProcessIpad = ({location}) => {
    const handleClick = (evt) => { 
        const textElement = evt.target.nextSibling;
        if (textElement.classList.contains('hidden')){
            evt.target.nextSibling.classList.remove('hidden');
            // evt.target.parentElement.style.filter = "drop-shadow(0 0 5px black)";
        } else{
            evt.target.nextSibling.classList.add('hidden');
            // evt.target.parentElement.style.filter = "";
        }
    }

    return(
    location.map((element,i) => (
    <div 
        className="process-img-ipad" 
        key={i}
        style={{
            position: `${element.imgBlockPosIpad.pos}`,
            top: `${element.imgBlockPosIpad.top}`,
            left: `${element.imgBlockPosIpad.left}`,
    }}>
        <div className="process-imageDiv" >
            <img 
                src={element.arrow} 
                alt="" 
                className="process-arrow" 
                style={{
                    position: `${element.arrowPosIpad.pos}`,
                    top: `${element.arrowPosIpad.top}`,
                    left: `${element.arrowPosIpad.left}`,
                }}
            />
            <img 
                className="process-smile" 
                src={element.img1} 
                alt=""
                // hoverSrc={element.img2}
                onClick={handleClick} 
                style={{
                    position: `${element.smileyPosIpad.pos}`,
                    top: `${element.smileyPosIpad.top}`,
                    left: `${element.smileyPosIpad.left}`,
                }}
            />
            <div 
                className="process-text hidden"
                style={{
                    position: `${element.textPosIpad.pos}`,
                    top: `${element.textPosIpad.top}`,
                    left: `${element.textPosIpad.left}`,
                }}
            >
                <h1>{element.title}:</h1> 
                <p>{element.text}</p>
            </div>
        </div>
    </div>
    ))
)}

export default ProcessIpad;