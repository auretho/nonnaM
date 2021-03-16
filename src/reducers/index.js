import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import process from './process';
import recipes from './recipes';




export default combineReducers({
    user,
    products,
    process,
    recipes,
});
