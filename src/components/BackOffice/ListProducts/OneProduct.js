import './style.scss';

const OneProduct = ({findOneProduct, productSelected}) => {
    if(productSelected === ""){
        findOneProduct();
    }

    return(
    <div className="oneproduct">
        <div className="oneproduct-container">
            <img src={productSelected.image} alt="produit sélectionné" className="oneproduct-image"/>
            <h1 className="oneproduct-title">{productSelected.name}</h1>
            <p className="oneproduct-description">{productSelected.description}</p>
            <h2 className="oneproduct-price">Prix: {productSelected.price}€</h2>

            <button className="oneproduct-button">Modifier</button>
            <button className="oneproduct-button">Supprimer</button>
        </div>
    </div>
)}

export default OneProduct;