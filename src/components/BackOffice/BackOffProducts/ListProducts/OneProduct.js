import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
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

            <div>
                <Link to={`/backoffice/produit/modif/${productSelected._id}`}>
                    <Button className="oneproduct-button" color="yellow">Modifier</Button>
                </Link>
                <Button className="oneproduct-button" onClick={handleDelete} color="red">Supprimer</Button>
            </div>
        </div>
    </div>
)}

export default OneProduct;