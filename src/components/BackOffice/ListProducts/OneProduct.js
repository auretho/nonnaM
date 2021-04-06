import {Link} from 'react-router-dom';
import './style.scss';

const OneProduct = ({findOneProduct, productSelected, deleteProduct}) => {
    if(productSelected === ""){
        findOneProduct();
    }

    const handleDelete = () => {
        deleteProduct()
    }

    return(
    <div className="oneproduct">
        <div className="oneproduct-container">
            <img src={productSelected.image} alt="produit sélectionné" className="oneproduct-image"/>
            <h1 className="oneproduct-title">{productSelected.name}</h1>
            <p className="oneproduct-description">{productSelected.description}</p>
            <h2 className="oneproduct-price">Prix: {productSelected.price}€</h2>

            <Link to={`/backoffice/produit/modif/${productSelected._id}`}>
                <button className="oneproduct-button">Modifier</button>
            </Link>
            <Link to="/backoffice/liste-produits">
                <button className="oneproduct-button" onClick={handleDelete}>Supprimer</button>
            </Link>
        </div>
    </div>
)}

export default OneProduct;