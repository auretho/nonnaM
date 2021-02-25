import React from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../../img/house.png';

import './style.scss';

const Comments = ({comments}) => (
    <section>
        <Parallax bgImage={bg} strength={250}>
            <div className="comments">
                <h2 className="comments-title">Parlez-nous de vous!</h2>
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
)

export default Comments;