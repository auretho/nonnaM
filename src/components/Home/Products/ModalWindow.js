import React from 'react';
import { Header, Button, Image, Modal } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './style.scss';


const ModalWindow = ({triggerItem, products, item}) => {
    const [open, setOpen] = React.useState(false);
    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={triggerItem}
            className="modal-container"
            >
            {
            products.map((prod, key) => {
                if(prod.shortName === item){
                    return(
                    <Modal.Content image className="modal-content" key={key}>
                        <Image size='medium' src={prod.image} className="modal-image"/>
                        <Modal.Description>
                        <Header>{prod.name}</Header>
                        <p>{prod.description}</p>
                        <p className="price">Prix: {prod.price.toFixed(2)}€</p>
                        </Modal.Description>
                    </Modal.Content>
                    )
                }})
            }
            <Modal.Actions className="modal-footer">
                <h1 className="modal-footer-text">Pour toutes les infos détaillées sur nos produits, n'hésitez pas à aller consulter leurs fiches! <Link to="/fiches-recette">Par ici!</Link> </h1>
                <div className="buttons">
                    <HashLink to="/commandes/#order">
                        <Button
                        content="Super, je commande!"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        positive
                        className="order-button"
                        />
                    </HashLink>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Annuler
                    </Button>
                </div>
            </Modal.Actions>
        </Modal>
)}

export default ModalWindow;


