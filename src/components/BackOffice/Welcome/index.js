import { Link } from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import './style.scss';

const Welcome = () => (
    <div className="welcome" id="welcome" >
        <Link to="/backoffice/produits">
            <Button className="welcome-buttons" size="huge"color="orange">Produits</Button>
        </Link> 
        <Link to="/backoffice/stock">
            <Button className="welcome-buttons" size="huge"color="yellow">Stock</Button>
        </Link>          
        <Link to="/backoffice/photos">
            <Button className="welcome-buttons" size="huge" color="olive">Photos</Button>
        </Link>  
        <Link to="/backoffice/legals">
            <Button className="welcome-buttons" size="huge" color="teal">Legals</Button>
        </Link> 
    </div>
)

export default Welcome;