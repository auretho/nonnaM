import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './style.scss';

const BackOffProducts = () => (
    <div className="backoffice-products">
        <Link to="/backoffice/liste-produits" >
            <Button className="welcome-buttons" color="yellow" size="huge">
                Liste des produits
            </Button>
        </Link> 
        <Link to="/backoffice/ajout-produits" >
            <Button className="welcome-buttons" color="olive" size="huge">
                Ajout de produits
            </Button>
        </Link>          
        <Link to="/backoffice/stock" >
            <Button className="welcome-buttons" color="green" size="huge">
                Gestion des stocks
            </Button>
        </Link>  
    </div>
)

export default BackOffProducts;