import './style.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const BackOffice = ({products, handleChange}) => {

    const handleInputChange = key => evt => {
        let newArr = [...products]
        newArr[key].stock = evt.target.value; 
        console.log(newArr);
        // const prodToUpdate = products.filter((product) => evt.target.name === product.name)
        // console.log(prodToUpdate[0].stock = 5)
        // handleChange(prodToUpdate[0].stock = evt.target.value);
        // console.log(products);
        // handleChange(evt.target.value)
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
                        <input type="text"
                               className="stock" 
                               name={product.name}
                               value={product.stock} 
                               onChange={handleInputChange(key)}/>
                            
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