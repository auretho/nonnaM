import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import process from './process';
import recipes from './recipes';
import backoffice from './backoffice';
import orders from './orders';


export default combineReducers({
    user,
    products,
    process,
    recipes,
    backoffice,
    orders,
});
