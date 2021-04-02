import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const ListProducts = ({findAllProducts, products}) => {
  useEffect(() => {
    findAllProducts();
  }, [])

    return (
      <div className="list-products" >
        {products.map((product, key) => (
          <Link to={`/backoffice/produit/${product._id}`} key={key}>
          <div className="product-container" >
            <img src={product.image ? product.image : "https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_1280.jpg"} alt="aperçu du produit" className="product-image"/>
            <div>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-description">{product.description}</p>
              <h2 className="product-price">{product.price}€</h2>
            </div>
          </div>
          </Link>
        )) 
        }
      </div>
    )
}

export default ListProducts;