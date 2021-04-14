import './style.scss';
import {NavHashLink} from 'react-router-hash-link';
import ficheArtichaut from './fiches/Artichauts.pdf';
import ficheTomate from './fiches/Tomates.pdf';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const RecipeCards = () => (
    <div className="recipeCards">
        <div className="recipeCards-container">
            <NavHashLink to="/#nos-produits" className="recipeCards-back">
                <ArrowBackIcon/>
                Retour aux produits
            </NavHashLink>
            
            <ul className="recipeCards-list">
                <a href={ficheArtichaut} target="_blank" className="recipeCards-link">
                    <li className="recipeCards-item">Les artichauts <ExitToAppIcon/></li>
                </a>
                <a href={ficheTomate} target="_blank"className="recipeCards-link">
                    <li className="recipeCards-item">Les sauces tomates <ExitToAppIcon/></li>
                </a>
                <a href="" target="_blank" className="recipeCards-link">
                    <li className="recipeCards-item">Les truffes <ExitToAppIcon/></li>
                </a>
                <a href="" target="_blank" className="recipeCards-link">
                    <li className="recipeCards-item">Les bonnes falades <ExitToAppIcon/></li>
                </a>
            </ul>
        </div>
    </div>
)

export default RecipeCards;