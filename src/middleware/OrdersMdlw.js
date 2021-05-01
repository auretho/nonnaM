import axios from 'axios';
import { ON_SUBMIT } from '../actions/user';

const OrderMdlw = (store) => (next) => (action) => {
    next(action);
    // const { dispatch } = store;
    const baseURL = process.env.NODE_ENV === "production" ? "/" : "http://localhost:3001/";

    switch (action.type){
        case ON_SUBMIT:
            axios({
                method: 'post',
                url: `${baseURL}backoffice/order/sendOrder`,
                data: {
                    id: store.getState().orders.form.id,
                    email:store.getState().orders.form.email,
                    text: store.getState().orders.form.message,
                    firstname: store.getState().orders.form.firstname,
                    lastname: store.getState().orders.form.lastname,
                    phone: store.getState().orders.form.phone,
                    total: store.getState().orders.total,
                    delivery: store.getState().orders.delivery,
                    products: store.getState().orders.selectedProducts,
                },
            })
            .then( res => {
                console.log(res.data);
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