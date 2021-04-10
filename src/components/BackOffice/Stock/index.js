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
            {
            products.map((product, key) => (
                <form onSubmit={handleSubmitStock} key={key} className="stock-row" >
                    <h2>{product.name}</h2>
                    <div>
                        <input type="number"
                            className="stock-input" 
                            name={product.name}
                            value={product.quantity} 
                            onChange={handleInputChange}/>
                        <button type="submit">Mettre à jour</button>
                    </div>
                    
                    <div className="stock-stock-div">
                        <h3 className="stock-stock-title">
                            Stock restant: 
                        </h3>    
                        <h3>{product.quantity}</h3> 
                    </div> 
                </form>
            ))
            }
        </div>
    </div>
)}

export default Stock;