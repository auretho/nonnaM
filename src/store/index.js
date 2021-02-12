import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
    ),
);

const store = createStore(
    reducers, 
    enhancers,
);


export default store;