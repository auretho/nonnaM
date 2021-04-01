import { Link } from 'react-router-dom';
import './style.scss';

const Welcome = () => (
    <div className="welcome" id="welcome" >
        <Link to="/backoffice/ajout-produits" style={{zIndex: '10'}}>
            <button className="welcome-buttons">Vers l'ajout de produits</button>
        </Link>          
        <Link to="/backoffice/stock" style={{zIndex: '10'}}>
            <button className="welcome-buttons">Vers la gestion des stocks</button>
        </Link>  
    </div>
)

export default Welcome;