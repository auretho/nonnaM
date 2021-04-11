import {Button} from 'semantic-ui-react';
import './style.scss';

const Stock = ({products, handleChange, updateStock, stock}) => {

    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        const message = document.querySelector('.stock-message');
        const result = products.find(product => (product.name === name)); 
        
        handleChange({
            stock: result,
            products: products.map(product => {
            if (product.name === result.name) {
                product.quantity = value;
                return product
            }
            return product;
        })});

        message.classList.remove('hidden');
    }

    const handlePUHTChange = (evt) => {
        console.log(evt.target);

        const {name, value} = evt.target;
        const message = document.querySelector('.stock-message');
        const result = products.find(product => (product.name === name)); 
        
        handleChange({
            stock: result,
            products: products.map(product => {
            if (product.name === result.name) {
                product.puht = value;
                return product
            }
            return product;
        })});

        message.classList.remove('hidden');
    }

    const handleTTCChange = (evt) => {
        const {name, value} = evt.target;
        const message = document.querySelector('.stock-message');
        const result = products.find(product => (product.name === name)); 
        
        handleChange({
            stock: result,
            products: products.map(product => {
            if (product.name === result.name) {
                product.puttc = value;
                return product
            }
            return product;
        })});

        message.classList.remove('hidden');
    }

    const handleSubmitStock = (evt) => {
        const message = document.querySelector('.stock-message');
        evt.preventDefault();
        message.classList.add('hidden');
        updateStock();
    }

    return(
    <div className="stock">
        <div className="stock-container">
            <h1 className="stock-title">
                Liste de tous les produits disponibles:
            </h1>
            <h2 className="hidden stock-message" >Il faut valider le changement!</h2>
            <div className="stock-full-wrapper">
                <div className="stock-header-titles">
                    <div className="stock-header-item">NOM</div>
                    <div className="stock-header-item">STOCK ACTUEL</div>
                    <div className="stock-header-item">PRIX UNITAIRE HT</div>
                    <div className="stock-header-item">PRIX UNITAIRE TTC</div>
                    <div className="stock-item">METTRE A JOUR</div>
                </div>
                <div className="stock-items-list">
                {
                products.map((product, key) => (
                    <form onSubmit={handleSubmitStock} key={key} className="stock-row">
                        <h2>{product.name}</h2>
                        <div className="stock-item">
                            <input type="number"
                                className="stock-input" 
                                name={product.name}
                                value={product.quantity} 
                                onChange={handleInputChange}/>
                        </div>
                        
                        <div className="stock-item">
                            <input type="number"
                                className="stock-input" 
                                name={product.name}
                                value={product.puht} 
                                onChange={handlePUHTChange}/>€
                        </div> 
                        <div className="stock-item">
                            <input type="number"
                                className="stock-input" 
                                name={product.name}
                                value={product.puttc} 
                                onChange={handleTTCChange}/>€
                        </div>
                        <Button type="submit" className="stock-submit" color="teal">Mettre à jour</Button>
                    </form>
                ))
                }
                </div>
            </div>
        </div>
    </div>
)}

export default Stock;