import axios from 'axios';
import { ON_SUBMIT } from '../actions/user';

   export default (store) => (next) => (action) => {
    next(action);
    // const { dispatch } = store;

    switch (action.type){
      case ON_SUBMIT:
        // const token = localStorage.getItem('token');
            axios({
            //   headers: { Authorization: `Bearer ${token}`},
              method: 'post',
              url:  'http://localhost:3001/email',
              data: {
                lastname: store.getState().orders.lastname,
                firstname: store.getState().orders.firstname,
                email: store.getState().orders.email,

              },
            })            
            .then((res) => {
              const serverResponse = res.data;
              console.log(serverResponse.status);
            //   localStorage.setItem('token', serverResponse.token);

            //   dispatch(loginSuccess(serverResponse));
            })
            .catch((err) => {
              console.log(err);
            //   dispatch(loginError());
            });
          break;
        
      default:
        break;
    } 
  };
