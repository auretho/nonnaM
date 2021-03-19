import React from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../../assets/recetas.png';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import './style.scss';

const Comments = ({comments}) => {

    const handleClickToBack= (evt) => {
        const target = evt.currentTarget;
        setTimeout(() => {
            target.style.transform="rotateY(180deg)"
            target.previousSibling.style.transform="rotateY(0)"
        }, 10);
    }

    const handleClickToFront = (evt) => {
        const target = evt.currentTarget;
        setTimeout(() => {
            target.nextSibling.style.transform="rotateY(0)"
            target.style.transform="rotateY(180deg)"
        }, 10);
    }
        
    return(
    <section className="comments" id="recettes">
        <Parallax bgImage={bg} strength={250} className="comments-section" >
            <div>
                <h2 className="comments-title">Idées de recettes: les nôtres... et les vôtres!</h2>
                <div className="comments-blocks">
                
                {
                comments.map((comment, id) => (
                    <div className="wrapper" key={id}>
                        <div className="oneBlock back" onClick={handleClickToFront}>
                            <h1 className="oneBlock-name">{comment.name}</h1>
                            <p className="oneBlock-comment">
                                *Recette secrète de la Nonna*
                            </p>
                        </div>
                        <div className="oneBlock front" onClick={handleClickToBack}>
                            <h1 className="oneBlock-name">{comment.name}</h1>
                            <p className="oneBlock-comment">{comment.text} 
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, enim.
                            </p>
                            <KeyboardReturnIcon className="oneBlock-icon" />
                        </div>
                    </div>
                ))
                }
                </div>
            </div>
        </Parallax>
    </section>
)}

export default Comments;