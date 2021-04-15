import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import process from './process';
import orders from './orders';
import backoffice from './backoffice';



export default combineReducers({
    user,
    products,
    process,
    orders,
    backoffice,
});
