import { RestoreOutlined } from '@material-ui/icons';
import {useEffect, useState} from 'react';
import { Button, Form, Input, TextArea} from 'semantic-ui-react'
import './style.scss';

const BackOffPhotos = ({findAllPhotos, handleChange, updatePhoto, photoToUpdt, allPhotos}) => {
    
    useEffect(() => {
        findAllPhotos();
    }, [photoToUpdt === '']);

    const handleInputTextChange = (evt) => {
        const { name, value, id } = evt.target;
        const idRes = id.split('-')[1];
        const result = allPhotos.find(el => el._id === idRes);

        handleChange({
            photoToUpdt: result,
            allPhotos: allPhotos.map(photo => {
            if (photo._id === idRes) {
                photo[name] = value;
                return photo
            }
            return photo;
        })})
      }
    
      const handlePhotoUploadChange = (evt) => {
        const idRes = evt.target.id.split('-')[1];

        handleChange({ photoToUpdt: allPhotos.find(el => {
            if(el._id === idRes){
                el.image = evt.target.files[0]
                return el
            }
        })})
      }
    
      const handlePhotoUpdate = (evt) => {
        evt.preventDefault();
        updatePhoto();
        window.alert('Mise à jour effectuée!');
        // findAllPhotos();

      }

    return(
    <div className="backoffice-photos">
        <div className="backoffice-photos-container">
            {allPhotos.map((photo, key) => (
                <Form className="backoffice-photos-form" id="updatePhotos" key={key} onSubmit={handlePhotoUpdate}>
                    <Form.Field
                        control={TextArea}
                        name="text"
                        id={`text-${photo._id}`}
                        label='Nom complet'
                        placeholder="Commentaire au dos de l'image"
                        rows='4'
                        width="4"
                        className="backoffice-photos-textarea"
                        value={photo.text}
                        onChange={handleInputTextChange}
                    />
                    <Form.Field
                        control={Input}
                        type="file"
                        name="image"
                        id={`image-${photo._id}`}
                        label="URL de la photo"
                        className="backoffice-photos-url"
                        width="5"
                        onChange={handlePhotoUploadChange}
                    />
                    <div className="backoffice-photos-view">
                        Photo actuelle: 
                        <img src={photo.image} 
                                alt="aperçu" 
                                className="backoffice-photos-image" 
                                id={`view-${photo._id}`}/>
                    </div>
                    <div>
                        <Button type="submit" color="blue">Mettre à jour</Button>
                    </div>
                </Form>
            ))}
        </div>
    </div>
)}

export default BackOffPhotos;