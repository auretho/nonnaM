import axios from 'axios';
import { ON_SUBMIT } from '../actions/user';

const OrderMdlw = (store) => (next) => (action) => {
    next(action);
    // const { dispatch } = store;

    switch (action.type){
        case ON_SUBMIT:
            axios({
                method: 'post',
                url: 'http://localhost:3001/sendOrder',
                data: {
                    form: store.getState().orders.form,
                    // A VOIR OU/OU ?
                    lastname: store.getState().orders.form.lastname, 
                    firstname: store.getState().orders.form.firstname, 
                    email: store.getState().orders.form.email, 
                },
            })
            .then( res => {
                console.log(res.data, res.data.status);
            })
            .catch( err => {
                console.log(err);
            });
            break;

        default:
            break;
    }
}

export default OrderMdlw;