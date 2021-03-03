import React from 'react';
import { Header, Button, Image, Modal } from 'semantic-ui-react'
import { Parallax } from 'react-parallax';

import './style.scss';
import champs from '../../../assets/champs.png';
import oil from '../../../assets/oil.png'; 


const Products = ({img}) => {

    const rendered = (percentage) => {
        const transformStyle = {transform: `scale(${percentage * .5})`};
        return(
        <div className="product-images" >
            {
            img.map((element, i) => (
                <div className="product-block" key={i} id={element.shortName}>
                    <img className="product-image"
                        src={element.name} alt="" 
                        style={transformStyle}   
                    />
                    <h1 className="product-image-title" 
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
    <section className="product" id="product">
        <Parallax className="product-parallax" bgImage={champs} style={{ height: '100vh'}} strength={300} renderLayer={rendered}>
            {/* <h1 className="product-text">Et vous, quel produit vous intéresse?</h1> */}
           
           
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

export default Products;



// CODE TEST A GARDER
/* <div className="wrapper product-one" >

                    <p className="product-description" style={{ transition: 'opacity'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates veritatis aliquam quidem, perspiciatis quam assumenda saepe, minima voluptate possimus doloremque consequuntur earum omnis repellendus est, deleniti repudiandae. Magnam, maiores! Suscipit recusandae iste unde nisi accusantium distinctio. Ducimus dolor veniam, nemo eveniet amet quia. Consequuntur delectus adipisci enim totam minus?
                    </p>
                    
                    <img src={salade} alt="" className="product-veggie left"/>
                    <img src={tomate} alt="" className="product-veggie right"/>
                    <img src={artichaut} alt="" className="product-veggie left"/>
                    <img src={salade} alt="" className="product-veggie right"/>
                    <img src={tomate} alt="" className="product-veggie left"/>
                    <img src={artichaut} alt="" className="product-veggie right"/>
                    <img src={panier} alt="" className="product-basket"/>
                </div> */
                /* <div className="wrapper product-two">
                    <div className="drops">
                        <div className="red-drops">
                            <img src={drop} alt="" className="product-drop left-drop"/>
                            <img src={drop} alt="" className="product-drop left-drop"/>
                            <img src={drop} alt="" className="product-drop left-drop"/>
                            <img src={drop} alt="" className="product-drop left-drop"/>
                            <img src={drop} alt="" className="product-drop left-drop"/>
                        </div>

                        <div className="green-drops">
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                            <img src={drop2} alt="" className="product-drop right-drop"/>
                        </div>

                    </div>
                    
                    <div className="jars">
                        <img src={pot} alt="" className="product-jar"/>
                        <img src={pot2} alt="" className="product-jar"/>
                    </div>
                </div> */