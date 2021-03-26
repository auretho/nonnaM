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
                    id: store.getState().orders.form.id,
                    email:store.getState().orders.form.email,
                    subject: store.getState().orders.form.subject,
                    text: store.getState().orders.form.message,
                    firstname: store.getState().orders.form.firstname,
                    lastname: store.getState().orders.form.lastname,
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