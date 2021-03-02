import React from 'react';
import { Header, Button, Image, Modal } from 'semantic-ui-react'
import { Parallax } from 'react-parallax';

import './style.scss';
import champs from '../../../assets/champs.png';
import oil from '../../../assets/oil.png'; 


const Process = ({img}) => {

    const rendered = (percentage) => {
        const transformStyle = {transform: `scale(${percentage * .5})`};
        return(
        <div className="process-images" id="produits">
            {
            img.map((element, i) => (
                <div className="process-block" key={i}>
                    <img className="process-image"
                        src={element.name} alt="" 
                        style={transformStyle}   
                    />
                    <h1 className="process-image-title" 
                        style={transformStyle}>
                        {element.text}
                    </h1>
                </div>
            ))
            }
        </div>
    )}

    const [open, setOpen] = React.useState(false);


    return(
    <section className="process">
        <Parallax className="process-parallax" bgImage={champs} style={{ height: '100vh'}} strength={300} renderLayer={rendered}>
            {/* <h1 className="process-text">Et vous, quel produit vous intéresse?</h1> */}
           
           
            <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Ouvrir un des produits</Button>}
    >
      {/* <Modal.Header>Select a Photo</Modal.Header> */}
      <Modal.Content image>
        <Image size='medium' src={oil} />
        <Modal.Description>
          <Header>Huile d'olive</Header>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis minus maiores architecto accusamus aperiam consectetur possimus quae praesentium ad ea!
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Annuler
        </Button>
        <Button
          content="Super, je commande!"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>


            
        </Parallax>

    </section>
)}

export default Process;



// CODE TEST A GARDER
/* <div className="wrapper process-one" >

                    <p className="process-description" style={{ transition: 'opacity'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates veritatis aliquam quidem, perspiciatis quam assumenda saepe, minima voluptate possimus doloremque consequuntur earum omnis repellendus est, deleniti repudiandae. Magnam, maiores! Suscipit recusandae iste unde nisi accusantium distinctio. Ducimus dolor veniam, nemo eveniet amet quia. Consequuntur delectus adipisci enim totam minus?
                    </p>
                    
                    <img src={salade} alt="" className="process-veggie left"/>
                    <img src={tomate} alt="" className="process-veggie right"/>
                    <img src={artichaut} alt="" className="process-veggie left"/>
                    <img src={salade} alt="" className="process-veggie right"/>
                    <img src={tomate} alt="" className="process-veggie left"/>
                    <img src={artichaut} alt="" className="process-veggie right"/>
                    <img src={panier} alt="" className="process-basket"/>
                </div> */
                /* <div className="wrapper process-two">
                    <div className="drops">
                        <div className="red-drops">
                            <img src={drop} alt="" className="process-drop left-drop"/>
                            <img src={drop} alt="" className="process-drop left-drop"/>
                            <img src={drop} alt="" className="process-drop left-drop"/>
                            <img src={drop} alt="" className="process-drop left-drop"/>
                            <img src={drop} alt="" className="process-drop left-drop"/>
                        </div>

                        <div className="green-drops">
                            <img src={drop2} alt="" className="process-drop right-drop"/>
                            <img src={drop2} alt="" className="process-drop right-drop"/>
                            <img src={drop2} alt="" className="process-drop right-drop"/>
                            <img src={drop2} alt="" className="process-drop right-drop"/>
                            <img src={drop2} alt="" className="process-drop right-drop"/>
                        </div>

                    </div>
                    
                    <div className="jars">
                        <img src={pot} alt="" className="process-jar"/>
                        <img src={pot2} alt="" className="process-jar"/>
                    </div>
                </div> */