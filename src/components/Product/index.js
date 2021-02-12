import React from'react';
import { Switch, Route } from 'react-router-dom';
import Tomates from './Tomates';
import Artichauts from './Artichauts';
import './style.scss';

const Product = () => (
    <div className="products">
        <Switch>
            <Route path ="/produits/tomates">
                <Tomates />
            </Route>
            <Route path ="/produits/artichauts">
                <Artichauts />
            </Route>
        </Switch>
    </div>
)

export default Product;