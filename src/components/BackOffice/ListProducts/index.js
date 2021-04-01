import {useEffect} from 'react';
import './style.scss';
import React, { Component } from 'react'

const ListProducts = ({findAllProducts, products}) => {

  useEffect(() => {
    findAllProducts();
  }, [])
  console.log(products);

    return (
      <div className="list-products">
        {products.map((product, key) => (
          <div className="product-container" key={key}>
            <img src={product.image} alt="aperçu du produit" className="product-image"/>
            <div>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-description">{product.description}</p>
              <h2 className="product-price">{product.price}€</h2>
            </div>
          </div>
        )) 
        }
      </div>
    )
}

export default ListProducts;