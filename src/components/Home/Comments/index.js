import React from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../../assets/recetas.png';

import './style.scss';

const Comments = ({comments}) => {
        
    return(
    <section className="pageSection" id="comments">
        <Parallax bgImage={bg} strength={250} className="comments-section" >
            <div className="comments" >
                <h2 className="comments-title">Idées recette: les nôtres... et les vôtres!</h2>
                <div className="comments-blocks">
                
                {
                comments.map((comment, id) => (
                    <div className="oneBlock" key={id}>
                        <h1 className="oneBlock-name">{comment.name}</h1>
                        <p className="oneBlock-comment">{comment.text} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, enim.</p>
                    </div>
                ))
                }
                </div>
            </div>
        </Parallax>
    </section>
)}

export default Comments;