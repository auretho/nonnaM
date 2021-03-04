import React from 'react';
import { Header, Button, Image, Modal } from 'semantic-ui-react'
import { NavHashLink } from 'react-router-hash-link';
import './style.scss';


const ModalWindow = ({triggerItem, item}) => {
    
    const [open, setOpen] = React.useState(false);
    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={triggerItem}
            >
            {/* <Modal.Header>Select a Photo</Modal.Header> */}

                <Modal.Content image>
                    <Image size='medium' src={item.image} />
                    <Modal.Description>
                    <Header>{item.name}</Header>
                    <p>{item.description}</p>
                    </Modal.Description>
                </Modal.Content>

            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                Annuler
                </Button>
                <NavHashLink smooth to="#contact">
                    <Button
                    content="Super, je commande!"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                    />
                </NavHashLink>
            </Modal.Actions>
        </Modal>
)}

export default ModalWindow;


