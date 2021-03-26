import './style.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const BackOffice = ({products, handleChange}) => {

    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        const result = products.find(product => (product.name === name)); 

        handleChange({
            products: products.map(product => {
            if (product.name === result.name) {
                product.stock = value;
                return product
            }
            return product;
        })})
    }

    return(
    <div className="backOffice">
        <div className="backOffice-container">
            <h1 className="backOffice-title">
                Liste de tous les produits disponibles:
            </h1>
            {
            products.map((product, key) => (
                <div className="backOffice-row" key={key}>
                    <h2>{product.fullname}</h2>
                    <h3 className="row-stock">
                        Stock restant: 
                    </h3>
                        <input type="number"
                               className="stock" 
                               name={product.name}
                               value={product.stock} 
                               onChange={handleInputChange}/>
                    <h3>{product.stock}</h3>        
                    <div className="backOffice-row-icons">
                        <EditIcon 
                            className="backOffice-row-icon" 
                            id="edit"
                            style={{fontSize: '40'}}
                        />
                        <DeleteIcon 
                        className="backOffice-row-icon" 
                        id="delete"
                        style={{fontSize: '40'}}
                        />
                    </div>
                </div>
            ))
            }
        </div>
    </div>
)}

export default BackOffice;