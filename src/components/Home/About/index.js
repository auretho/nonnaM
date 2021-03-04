import React from 'react';
import './style.scss';

const About = ({cupello}) => {
  
    const handleClick = (evt) => {
        const img = document.querySelectorAll('.about-photo');
        img.forEach(element => {
            if(evt.target !== element){
                element.classList.remove('hidden');
                element.nextSibling.classList.add('hidden')
    
            } else{
                element.parentElement.style = "background-color: rgba(255, 255, 255, 0.7)";
                element.classList.add('hidden');
                element.nextSibling.classList.remove('hidden')
            }
        })
    }

    return(
    <div className="about" id="about">
        <div className="about-container" >
            {
            cupello.map((photo, index) => (
                <div className="about-photos" key={index} onClick={handleClick}>
                    <img className="about-photo" src={photo} alt="photos de cupello"/>
                    <p className="about-text hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit asperiores aliquam harum vero rem molestias.</p>
                </div>
            ))
            }
        </div>

    </div>
)}

export default About;