import {useEffect} from 'react';
import { TextArea, Button } from 'semantic-ui-react';
import './style.scss';

const BackOffLegals = ({findAllLegals, legals, handleChange, updateLegals}) => {
    useEffect(() => {
        findAllLegals();
    }, [])

    const handleLegalChange = (evt) => {
        const {name, value} = evt.target;
        handleChange({ legals: {...legals, [name]:value}  })
    }

    const handleLegalSubmit = (evt) => {
        evt.preventDefault();
        updateLegals();
    }

    return(
    <div className="backoffice-legals">
        <div className="backoffice-legals-wrapper">
            <form onSubmit={handleLegalSubmit} className="backoffice-legals-form">
                <h1 className="backoffice-legals-form-title">Mentions légales</h1>
                <TextArea name="legals"
                        className="backoffice-legals-container"
                        value={legals.legals}
                        onChange={handleLegalChange}/>
                <Button type="submit" color="yellow">Modifier</Button>
            </form>
            
            <form onSubmit={handleLegalSubmit} className="backoffice-legals-form">
                <h1 className="backoffice-legals-form-title">Conditions Générales de Vente (CGV)</h1>
                <TextArea name="cgv"              
                        className="backoffice-legals-container"
                        value={legals.cgv}
                        onChange={handleLegalChange}/>
                <Button type="submit" color="yellow">Modifier</Button>
            </form>

            <form onSubmit={handleLegalSubmit} className="backoffice-legals-form">
            <h1 className="backoffice-legals-form-title">Conditions Générales d'Utilisation (CGU)</h1>
            <TextArea name="cgu" 
                    className="backoffice-legals-container"
                    value={legals.cgu}
                    onChange={handleLegalChange}/>
            <Button type="submit" color="yellow">Modifier</Button>
        </form>
        </div>
    </div>
)}

export default BackOffLegals;