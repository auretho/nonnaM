import { Link } from 'react-router-dom';
import './style.scss';

const Welcome = () => (
    <div className="welcome" id="welcome" >
        <Link to="/backoffice/liste-produits" style={{zIndex: '10'}}>
            <button className="welcome-buttons">Liste des produits</button>
        </Link> 
        <Link to="/backoffice/ajout-produits" style={{zIndex: '10'}}>
            <button className="welcome-buttons">Ajout de produits</button>
        </Link>          
        <Link to="/backoffice/stock" style={{zIndex: '10'}}>
            <button className="welcome-buttons">Gestion des stocks</button>
        </Link>  
    </div>
)

export default Welcome;