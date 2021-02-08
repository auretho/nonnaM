import React from'react';
import salsa from './img/salsa.jpg';
import './style.scss';

const Tomato = () => (
    <div className="products">
        <div className="product">
            <img src={salsa} alt="sauce tomate" className="product-image"/>
            <div className="right">
                <p className="product-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus error culpa corrupti ducimus, aperiam ipsum omnis modi rerum porro provident ut a dolores ad. Quaerat veritatis quo voluptatum maxime.
                </p>
                <button className="product-button">
                    Commander
                </button>
            </div>
        </div>

        <div className="product">
            <img src={salsa} alt="sauce tomate" className="product-image"/>
            <div className="right">
                <p className="product-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus error culpa corrupti ducimus, aperiam ipsum omnis modi rerum porro provident ut a dolores ad. Quaerat veritatis quo voluptatum maxime.
                </p>
                <button className="product-button">
                    Commander
                </button>
            </div>
        </div>

        <div className="product">
            <img src={salsa} alt="sauce tomate" className="product-image"/>
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

export default Tomato;