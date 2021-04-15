import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Input} from 'semantic-ui-react';
import './style.scss';

const ListProducts = ({findAllProducts, products, handleChange, filteredProd}) => {
  useEffect(() => {
    findAllProducts();
  },[])

  const filteredProducts = products.filter(element => element.name.toLowerCase().includes(filteredProd.toLowerCase()));

  const handleFilterChange = (evt) => {
    const {value} = evt.target;
    handleChange({filteredProd: value})
}
    return (
      <div className="list-products" >

        <Input className="product-search"
               icon='search' 
               type="text" 
               placeholder="Produits..." 
               value={filteredProd}
               onChange={handleFilterChange}/>
               
        <div className="product-wrapper">
          {filteredProducts.map((product, key) => (
            <Link to={`/backoffice/produit/${product._id}`} key={key}>
            <div className="product-container" >
              <img src={product.image} alt="aperçu du produit" className="product-image"/>
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
      </div>
    )
}

export default ListProducts;