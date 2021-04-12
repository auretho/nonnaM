import {Button} from 'semantic-ui-react';
import './style.scss';

const Stock = ({products, handleChange, updateStock, stock}) => {

    const handleInputChange = (evt) => {
        let {name, value, id} = evt.target;
        const message = document.querySelectorAll('.stock-message');
        const msgArray = [];
        const res = msgArray.slice.call(message);
        const result = products.find(product => (product.name === id));
        
        handleChange({
            stock: result,
            products: products.map(product => {
            if (product.name === result.name) {
                product[name] = value;
                return product
            }

            const msgFinal = res.find(element => element.attributes.name.value === product.name)
            if (msgFinal){
                msgFinal.classList.remove('hidden');
            }
            return product;
        })});
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
            {/* <h2 className="hidden stock-message" >Il faut valider le changement!</h2> */}
            <div className="stock-full-wrapper">
                <div className="stock-header-titles">
                    <div className="stock-header-item">NOM</div>
                    <div className="stock-header-item">STOCK ACTUEL</div>
                    <div className="stock-header-item">PRIX UNITAIRE HT</div>
                    <div className="stock-header-item">PRIX UNITAIRE TTC</div>
                    <div className="stock-header-item">METTRE A JOUR</div>
                </div>
                <div className="stock-items-list">
                {
                products.map((product, key) => (
                    <form onSubmit={handleSubmitStock} key={key} className="stock-row">
                        <div className="stock-item">
                        <h2 >{product.name}</h2>
                        <h2 className="hidden stock-message" name={product.name}>Il faut valider le changement!</h2>
                        </div>
                        <div className="stock-item">
                            <input type="number"
                                className="stock-input" 
                                id={product.name}
                                name="quantity"
                                value={product.quantity} 
                                onChange={handleInputChange}/>
                            

                        </div>
                        
                        <div className="stock-item">
                            €<input type="number"
                                className="stock-input" 
                                id={product.name}
                                name="puht"
                                value={product.puht} 
                                onChange={handleInputChange}/>
                        </div> 
                        <div className="stock-item">
                            €<input type="number"
                                className="stock-input" 
                                id={product.name}
                                name="puttc"
                                value={product.puttc} 
                                onChange={handleInputChange}/>
                        </div>
                        <div className="stock-item">
                            <Button type="submit" className="stock-submit" color="teal">Mettre à jour</Button>
                        </div>
                    </form>
                ))
                }
                </div>
            </div>
        </div>
    </div>
)}

export default Stock;