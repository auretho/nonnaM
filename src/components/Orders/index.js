import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom'
import './style.scss';

const Orders = ({prodList, form, redirection, handleChange, handleSubmit, addNewProduct}) => {
    
    const history = useHistory();

    if(form){
        form.id = uuidv1();
    }
    if (redirection){
       setTimeout(() => {
           history.push('/#bienvenue')
       },5000);
    }    

    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        handleChange({
            [name] : value,
        })
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        handleSubmit();
        setTimeout(() => {
            prodList.forEach(product => product.map(element => {
                element.count = ''
            }))       
        },5000);
        
    }

    const handleCountChange = (evt) => {
        // const prodToUpdate = products.filter((product) => evt.target.name === product.name)
        // addNewProduct(prodToUpdate[0].count = evt.target.value);
        // console.log(evt.target.name);
        prodList.map(element => element.find(el => {
            if(el.name === evt.target.name){
                addNewProduct(el.count = evt.target.value);
            } 
        }));
    }

    return(
    <div className="order">
        {
        redirection ? 
            <h1 className="order-submitted-message">Merci pour votre message, nous vous répondrons au plus vite! <br/>A presto! </h1>
        
        : 
        <form id={form.id} action="" className="order-form" onSubmit={handleFormSubmit}>
            <h1 className="order-form-title">
                Formulaire de commande
            </h1>
            <div className="order-form-div">
                Nom<input type="text" 
                          name="lastname" 
                          className="order-form-input" 
                          placeholder="Nom de famille" 
                          value={form.lastname}
                          onChange={handleInputChange} 
                          />
            </div>
            <div className="order-form-div">
                Prénom<input type="text" 
                          name="firstname" 
                          className="order-form-input" 
                          placeholder="Prénom" 
                          value={form.firstname}
                          onChange={handleInputChange} 
                          />
            </div>
            <div className="order-form-div">
                Email<input type="email" 
                          name="email" 
                          className="order-form-input" 
                          placeholder="Email" 
                          value={form.email}
                          onChange={handleInputChange} 
                          />
            </div>

            {/* SELECTION DES PRODUITS */}
            <div className="full-item-list">
                {
                    prodList.map((element) => (
                        element.map((product, key) => {
                            // console.log(product);
                            return(
                            <div className="item-container" key={key}>
                                <label htmlFor={product.name} className="item-label">
                                    {product.name}
                                </label>
                                <select name={product.name} id="" onChange={handleCountChange}>
                                    <option value="">Choisir</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            )
                        })
                    ))
                    }
            </div>


            <div className="order-form-div">
                Message<textarea 
                          name="message" 
                          rows="10"
                          className="order-form-input" 
                          id="msgArea"
                          placeholder="Merci d'indiquer les produits et quantités souhaités." 
                          value={form.message}
                          onChange={handleInputChange} 
                          ></textarea>
            </div>
            <h2 className="errorMsg">
                Merci de bien vouloir remplir tous les champs demandés!
            </h2>
            <button type="submit" className="order-form-button">
                Valider ma commande
            </button>
        </form>
        }
    </div>
)}

export default Orders;