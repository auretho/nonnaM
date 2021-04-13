import {Button, Input} from 'semantic-ui-react';
import './style.scss';

const Stock = ({products, handleChange, updateStock, stock, filteredProd}) => {
    const message = document.querySelectorAll('.stock-message');
    const messageArray = [].slice.call(message);
    const filteredProducts = products.filter(element => element.name.toLowerCase().includes(filteredProd.toLowerCase()));

    const handleInputChange = (evt) => {
        let {name, value, id} = evt.target;

        messageArray.map(el => {
            if(id === el.id){
                el.classList.remove('hidden')
            }
        });
        const result = products.find(product => (product._id === id));
        
        handleChange({
            stock: result,
            products: products.map(product => {
            if (product._id === result._id) {
                product[name] = value;
                return product
            }
            return product;
        })});
    }

    const handleSubmitStock = (evt) => {
        evt.preventDefault();
        messageArray.map(el => {
            if(evt.target.id === el.id){
                el.classList.add('hidden')
            }
            else{
                el.classList.add('hidden');
            }
        });
        updateStock();
        window.alert('Le produit a été mis à jour')
    }

    const handleFilterChange = (evt) => {
        const {value} = evt.target;
        handleChange({filteredProd: value})
    }

    return(
    <div className="stock">
        <div className="stock-container">
            <h1 className="stock-title">
                Liste de tous les produits disponibles:
            </h1>

            <Input className="stock-search"
                   icon='search' 
                   type="text" 
                   placeholder="Produits..." 
                   value={filteredProd}
                   onChange={handleFilterChange}/>


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
                filteredProducts.map((product, key) => (
                    <form onSubmit={handleSubmitStock} key={key} id={product._id} className="stock-row">
                        <div className="stock-item stock-item-first">
                            <input type="text"
                                className="stock-input stock-input-first" 
                                id={product._id}
                                name="name"
                                value={product.name} 
                                onChange={handleInputChange}/>
                            <h2 className="hidden stock-message" name={product.name} id={product._id}>
                                Il faut valider le changement!
                            </h2>
                        </div>
                        <div className="stock-item">
                            <input type="number"
                                className="stock-input" 
                                id={product._id}
                                name="quantity"
                                step="1"
                                value={product.quantity} 
                                onChange={handleInputChange}/>
                        </div>
                        
                        <div className="stock-item">
                            €<input type="number"
                                className="stock-input" 
                                id={product._id}
                                name="puht"
                                step="0.01"
                                value={product.puht} 
                                onChange={handleInputChange}/>
                        </div> 
                        <div className="stock-item">
                            €<input type="number"
                                className="stock-input" 
                                id={product._id}
                                name="puttc"
                                step="0.01"
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