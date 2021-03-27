import React from 'react';
import { Header, Button, Image, Modal } from 'semantic-ui-react'
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
            products.map((element) => (
                element.map((prod, key) => {
                if(prod.shortName === item){
                    return(
                    <Modal.Content image className="modal-content" key={key}>
                        <Image size='medium' src={prod.image} />
                        <Modal.Description>
                        <Header>{prod.name}</Header>
                        <p>{prod.description}</p>
                        <p className="price">Prix: {prod.price}</p>
                        </Modal.Description>
                    </Modal.Content>
                    )
                }})
            ))
            }
            <Modal.Actions className="modal-footer">
                <Button color='black' onClick={() => setOpen(false)}>
                Annuler
                </Button>
                <HashLink smooth to="/commandes">
                    <Button
                    content="Super, je commande!"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                    />
                </HashLink>
            </Modal.Actions>
        </Modal>
)}

export default ModalWindow;


