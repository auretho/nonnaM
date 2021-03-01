import React from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../../assets/house.png';

import './style.scss';

const Comments = ({comments, handleHomeScroll}) => {
    
    handleHomeScroll();
    
    return(
    <section>
        <Parallax bgImage={bg} strength={250} className="comments-section translate" data-speed="-0.1">
            <div className="comments" >
                <h2 className="comments-title">Qu'en pensez vous?!</h2>
                <div className="comments-blocks">
                
                {
                comments.map((comment, id) => (
                    <div className="oneBlock" key={id}>
                        <h1 className="oneBlock-name">{comment.name}</h1>
                        <p className="oneBlock-comment">{comment.text}</p>
                    </div>
                ))
                }
                </div>
            </div>
        </Parallax>
    </section>
)}

export default Comments;