import React from 'react';
import './style.scss';

const ProcessMobile = ({location}) => {
    const handleClick = (evt) => { 
        const textElement = evt.target.nextSibling;
        if (textElement.classList.contains('hidden')){
            evt.target.nextSibling.classList.remove('hidden');
            evt.target.parentElement.style.filter = "drop-shadow(0 0 5px black)";
        } else{
            evt.target.nextSibling.classList.add('hidden');
            evt.target.parentElement.style.filter = "";
        }
    }

    return(
    location.map((element,i) => (
    <div 
        className="process-img-mobile" 
        key={i}
        style={{
            position: `${element.imgBlockPosMob.pos}`,
            top: `${element.imgBlockPosMob.top}`,
            left: `${element.imgBlockPosMob.left}`,
    }}>
        <div className="process-imageDiv" >
            <img 
                src={element.arrow} 
                alt="" 
                className="process-arrow" 
                style={{
                    position: `${element.arrowPosMob.pos}`,
                    top: `${element.arrowPosMob.top}`,
                    left: `${element.arrowPosMob.left}`,
                }}
            />
            <img 
                className="process-smile" 
                src={element.img1} 
                // hoverSrc={element.img2}
                onClick={handleClick} 
                style={{
                    position: `${element.smileyPosMob.pos}`,
                    top: `${element.smileyPosMob.top}`,
                    left: `${element.smileyPosMob.left}`,
                }}
            />
            <div 
                className="process-text hidden"
                style={{
                    position: `${element.textPosMob.pos}`,
                    top: `${element.textPosMob.top}`,
                    left: `${element.textPosMob.left}`,
                }}
            >
                <h1>{element.title}:</h1> 
                <p>{element.text}</p>
            </div>
        </div>
    </div>
    ))
)}

export default ProcessMobile;