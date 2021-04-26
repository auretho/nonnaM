import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router-dom'
import './style.scss';

const Orders = ({inputDetails, prodList, form, total, redirection, delivery, handleOrderChange, handleSubmit, addNewProduct}) => {
    console.log(prodList);
    const history = useHistory();
    const numberArr = [];

    if(form){
        form.id = uuidv1();
    }
    if (redirection){
       setTimeout(() => {
           history.push('/#bienvenue')
       },5000);
    }    

    const ListNumbers = () => {
        for (let i = 1; i <= 100; i++) {
            numberArr.push(i)
        }
    };

    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
            inputDetails.find(el => {
            if(el.name === name){
                handleOrderChange({[name]: el.value = value});
            }
            else if (name === 'message'){
                handleOrderChange({[name]: el.value = value})
            }
        })
    }

    const handleCountChange = (evt) => {
        const target = evt.target.value;
        console.log(target); 
        prodList.find(el => {
            if(el.name === evt.target.name){
                if(el.orderCount < target) {
                addNewProduct({total: total + ((target - el.orderCount) * el.price)});
                addNewProduct(el.orderCount = target);
                } 
                else{
                    addNewProduct({total: total - ((el.orderCount - target) * el.price)});
                    addNewProduct(el.orderCount = target);
                }
            } 
        });
    }

    const handleRadioSelect = (evt) => {
        if(delivery === undefined){
            if(evt.target.id === "avec"){
                addNewProduct({delivery: true, total: total + 1})
            } else{
                addNewProduct({delivery: false})
            }
        }
        else {
            if(evt.target.id === "avec"){
                addNewProduct({delivery: true, total: total + 1})
            } else{
                addNewProduct({delivery: false, total: total - 1})
            }
        }
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const selectedProducts = [];
        prodList.find(element => {
            if (element.orderCount != ""){
                selectedProducts.push(element)
            }  
        })
        addNewProduct({selectedProducts: selectedProducts })
        handleSubmit();
        setTimeout(() => {
            prodList.map(element => {
                element.orderCount = ''
            })       
        },5000);
    }

    ListNumbers();

    return(
    <div className="order" id="order">
        {
        redirection ? 
            <h1 className="order-submitted-message">
                Merci pour votre message, nous vous répondrons au plus vite! <br/>A presto! 
            </h1>
        
        : 
        <form id={form.id} action="" className="order-form" onSubmit={handleFormSubmit}>
            <h1 className="order-form-title">
                Formulaire de commande
            </h1>
                {
                inputDetails.map((element, key) => (
                    <div className="order-form-div" key={key}>
                    {element.title}
                    <input type={element.type} 
                           name={element.name}
                           className="order-form-input" 
                           placeholder={element.placeholder} 
                           value={form.value}
                        //    pattern={element.pattern}
                           onChange={handleInputChange} 
                    />
                    </div>
                ))
                }         
            {/* SELECTION DES PRODUITS */}
            <div className="full-item-list">
                {
                    prodList.map((product, key) => (
                        <div className="item-container" key={key}>
                            <label htmlFor={product.name} className="item-label">
                                {product.name}
                            </label>
                            <select name={product.name} id="" onChange={handleCountChange}>
                                <option value="">Choisir</option>
                                {
                                    numberArr.map((el, key) => {
                                        return(
                                        <option value={el} key={key}>{el}</option>
                                    )})
                                }
                            </select>
                            <h2 className="item-price">{product.price}€</h2>
                        </div>
                        )
                    )
                    }
            </div>

            <div className="order-delivery">
                <p className="order-delivery-text">
                    Dans le cas d'une demande de livraison, d'éventuels frais seraient à prévoir. Dans ce cas, merci de bien vouloir nous préciser le lieu de livraison.
                </p>
                {/* <div className="order-radio-container">
                    <input type="radio" id="avec" name="delivery" value={delivery} onChange={handleRadioSelect}/>
                    <label htmlFor="avec" className="order-radio">Avec livraison (+1€)</label>
                </div>
                <div className="order-radio-container">
                    <input type="radio" id="sans"  name="delivery" value={delivery} onChange={handleRadioSelect}/>
                    <label htmlFor="sans" className="order-radio">Sans livraison</label>
                </div> */}
            </div>
            <h2 className="item-total">TOTAL TTC: {total.toFixed(2)}€</h2>
            <div className="order-form-div">
                Message<textarea 
                          name="message" 
                          rows="10"
                          className="order-form-input" 
                          id="msgArea"
                          placeholder="Merci d'indiquer les produits et quantités souhaités." 
                        //   value={form.message}
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