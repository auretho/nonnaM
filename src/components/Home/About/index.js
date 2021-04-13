import React, {useEffect} from 'react';
import './style.scss';

const About = ({findAllPhotos, allPhotos}) => {

    useEffect(() => {
        findAllPhotos();
    }, [])

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
    <div className="about pageSection" id="photos">
        <div className="about-container" >
            {
            allPhotos.map((img, index) => (
                <div className="about-photos" key={index} onClick={handleClick}>
                    <img className="about-photo" src={img.image} alt="photos de cupello"/>
                    <p className="about-text hidden">{img.text}</p>
                </div>
            ))
            }
        </div>

    </div>
)}

export default About;