import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button, Form, Input, TextArea} from 'semantic-ui-react';
import './style.scss';

const Welcome = ({findAllPhotos, addNewPhoto, handleChange, photoToUpdt}) => {
    
    useEffect(() => {
        findAllPhotos()
    },[]);

    const handlePhotoChange = (evt) => {
        const {name, value} = evt.target;
        handleChange({ photoToUpdt: {...photoToUpdt,[name]:value} })
    }

    const handleUploadPhotoChange = (evt) => {
        handleChange({ photoToUpdt: {...photoToUpdt, image: evt.target.files[0] }})
    }

    const handleAddPhoto = (evt) => {
        evt.preventDefault();
        addNewPhoto();
    }

    return(
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
        <Link to="/backoffice/recipes">
            <Button className="welcome-buttons" size="huge" color="teal">Recettes</Button>
        </Link> 
        <Link to="/backoffice/legals">
            <Button className="welcome-buttons" size="huge" color="blue">Légal</Button>
        </Link> 

        <Form className="addproducts" id="addPhotos" onSubmit={handleAddPhoto}>
            <Form.Group widths='equal'>
            <Form.Field
                control={TextArea}
                name="text"
                label='Nom complet'
                placeholder='Nom du produit'
                onChange={handlePhotoChange}
            />
            <Form.Field
                control={Input}
                type="file"
                name="image"
                label="URL de l'image"
                placeholder='URL'
                onChange={handleUploadPhotoChange}
            />
            </Form.Group>
            <button type="submit">Ajouter</button>
        </Form>
    </div>
)}

export default Welcome;