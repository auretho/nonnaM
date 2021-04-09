import {Link} from 'react-router-dom';
import './style.scss';

const Stock = ({products, handleChange}) => {

    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        const result = products.find(product => (product.name === name)); 
        console.log(result);

        handleChange({
            products: products.map(product => {
            if (product.name === result.name) {
                product.quantity = value;
                return product
            }
            return product;
        })})
    }

    return(
    <div className="stock">
        <div className="stock-container">
            <h1 className="stock-title">
                Liste de tous les produits disponibles:
            </h1>
            {
            products.map((product, key) => (
                <div className="stock-row" key={key}>
                    <h2>{product.name}</h2>
                    <input type="number"
                            className="stock-input" 
                            name={product.name}
                            value={product.quantity} 
                            onChange={handleInputChange}/>
                    <div className="stock-stock-div">
                        <h3 className="stock-stock-title">
                            Stock restant: 
                        </h3>    
                        <h3>{product.quantity}</h3> 
                    </div> 
                </div>
            ))
            }
        </div>
    </div>
)}

export default Stock;