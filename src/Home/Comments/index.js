import React from 'react';
import './style.scss';

const Comments = () => (
    <section className="comments">
        <h2 className="comments-title">Parlez-nous de vous!</h2>
        <div className="comments-blocks">
            <div className="oneBlock">
                <h1 className="oneBlock-name">Luca</h1>
                <p className="oneBlock-comment">"Waah! Ces produits sont tellement bons! A chaque bouchée, c'est un vrai bonheur! Grazie Nonna!"</p>
            </div>
            <div className="oneBlock">
                <h1 className="oneBlock-name">Delphine</h1>
                <p className="oneBlock-comment">"Waah! Ces produits sont tellement bons! A chaque bouchée, c'est un vrai bonheur! Grazie Nonna!"</p>
            </div>
            <div className="oneBlock">
                <h1 className="oneBlock-name">Adeline</h1>
                <p className="oneBlock-comment">"Waah! Ces produits sont tellement bons! A chaque bouchée, c'est un vrai bonheur! Grazie Nonna!"</p>
            </div>
        </div>
    </section>
)

export default Comments;