import { createStore, compose, applyMiddleware } from 'redux';
import OrdersMdlw from '../middleware/OrdersMdlw';
import ProductsMdlw from '../middleware/ProductsMdlw';
import reducers from '../reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        OrdersMdlw,
        ProductsMdlw,
    ),
);

const store = createStore(
    reducers, 
    enhancers,
);


export default store;