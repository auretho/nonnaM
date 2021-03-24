import axios from 'axios';
import { ON_SUBMIT } from '../actions/user';

export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;

    switch (action.type){
        case ON_SUBMIT:
            axios({
                method: 'post',
                url: 'http://localhost:3001/sendOrder',
                data: {
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
            })

        default:
          break;
    }
}