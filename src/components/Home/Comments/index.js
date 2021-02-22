import React from 'react';
import './style.scss';

const Comments = ({comments}) => (
    <section className="comments">
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
    </section>
)

export default Comments;