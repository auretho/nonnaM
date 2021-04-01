import {Link} from 'react-router-dom';
import './style.scss';

const Stock = ({products, handleInputChange}) => {

    return(
    <div className="stock">
        <div className="stock-container">
            <h1 className="stock-title">
                Liste de tous les produits disponibles:
            </h1>
            {
            products.map((product, key) => (
                <div className="stock-row" key={key}>
                    <h2>{product.fullname}</h2>
                        <input type="number"
                               className="stock-input" 
                               name={product.name}
                               value={product.stock} 
                               onChange={handleInputChange}/>
                    <div className="stock-stock-div">
                        <h3 className="stock-stock-title">
                            Stock restant: 
                        </h3>    
                        <h3>{product.stock}</h3> 
                    </div> 
                </div>
            ))
            }
        </div>
    </div>
)}

export default Stock;