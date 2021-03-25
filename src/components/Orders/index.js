import React, {useState} from 'react';
import { v1 as uuidv1 } from 'uuid';
import './style.scss';

const Orders = ({form, handleChange, handleSubmit, addNewProduct}) => {

    const productList = []; 

    if(form){
        form.id = uuidv1();
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
    }

    const handleItemSelection = (evt) => {
        evt.preventDefault();
        if(evt.target.classList.contains('selected')){
            evt.target.classList.remove('selected');

            const prodToRemove = productList.indexOf(evt.target.value);
            if (prodToRemove > -1) {
                productList.splice(prodToRemove, 1);
            }
        } 
        else {
            evt.target.classList.add('selected');
            productList.push(evt.target.value);
        }
        console.log(productList);
    }

    return(
    <div className="order">
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
                          required/>
            </div>
            <div className="order-form-div">
                Prénom<input type="text" 
                          name="firstname" 
                          className="order-form-input" 
                          placeholder="Prénom" 
                          value={form.firstname}
                          onChange={handleInputChange} 
                          required/>
            </div>
            <div className="order-form-div">
                Email<input type="email" 
                          name="email" 
                          className="order-form-input" 
                          placeholder="Email" 
                          value={form.email}
                          onChange={handleInputChange} 
                          required/>
            </div>

            {/* SELECTION DES PRODUITS */}
            <div className="full-item-list">
                <div className="item-container">
                    <input type="checkbox" 
                        //    checked={checked ? "" : "checked"}
                        //    onChange={handleUnchecked} 
                           onClick={handleItemSelection} value="tomates1"/>
                    <label htmlFor="tomates1">Tomates 1</label>
                </div>
                <div className="item-container">
                    <input type="checkbox" 
                        //    checked={checked ? checked : ""}
                        //    onChange={handleUnchecked} 
                           onClick={handleItemSelection} value="tomates2"/>
                    <label htmlFor="tomates2">Tomates 2</label>
                </div>
                <div className="item-container">
                    <input type="checkbox" 
                        //    checked={checked ? checked : ""}
                        //    onChange={handleUnchecked}
                           onClick={handleItemSelection} value="tomates3"/>
                    <label htmlFor="tomates3">Tomates 3</label>
                </div>
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
                          required></textarea>
            </div>
            <h2 className="errorMsg">
                Merci de bien vouloir remplir tous les champs demandés!
            </h2>
            <button type="submit" className="order-form-button">
                Valider ma commande
            </button>
        </form>
    </div>
)}

export default Orders;