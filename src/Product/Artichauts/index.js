import React from'react';
import artichauts from './img/artichauts.jpg';
import './style.scss';

const Artichauts = () => (
    <div className="products">
        <div className="product">
            <img src={artichauts} alt="sauce tomate" className="product-image"/>
            <div className="right">
                <p className="product-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus error culpa corrupti ducimus, aperiam ipsum omnis modi rerum porro provident ut a dolores ad. Quaerat veritatis quo voluptatum maxime.
                </p>
                <button className="product-button">
                    Commander
                </button>
            </div>
        </div>
    </div>
)

export default Artichauts;