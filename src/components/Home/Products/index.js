import React, { useEffect } from 'react';
import { Parallax, Background } from 'react-parallax';
import {Button} from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';
import Modal from '../../../containers/Modal';
import champs from '../../../assets/champs2.png';
import './style.scss';


const Products = ({img, findAllProducts}) => {
    useEffect(() => {
        findAllProducts();
    },[]);
    
    let mobile = false;

    if (window.innerWidth < 488) {
        mobile = true;
    }

    const rendered = (percentage) => {
        const renderElement = document.querySelector('.product-parallax');

        if(renderElement && window.innerWidth <= 488){
            renderElement.classList.add('mobile');
        }
    
        const transformStyle = {transform: `scale(${percentage * .8})`};
        return(
        <div className="product-images" >
            <h1 className="product-text">Que voulez-vous commander aujourd'hui?</h1>
            {/* <HashLink to="/commandes/#order">
                <Button
                    content="Passer directement au formulaire de commande"
                    labelPosition='right'
                    icon='long arrow alternate right'
                    className="order-button-main"
                />
            </HashLink> */}
            <div className="product-items">
                {
                img.map((element, i) => (
                    <div className="product-block" key={i} id={element.shortName}>
                        <Modal item={element.shortName} triggerItem={
                            <img className="product-image"
                                src={element.image} alt="type de produit" 
                                style={transformStyle}   
                            />
                        }/>

                        <Modal item={element.shortName} triggerItem={
                            <h1 className="product-image-title" 
                                style={transformStyle}
                                >
                                {element.name}
                            </h1>
                        }/>
                    </div>
                ))
                }
            </div>
        </div>
    )}

    return(
    <section className="product" id="nos-produits">
        <Parallax className="product-parallax"  strength={300} renderLayer={rendered}>
            <Background>
                <img src={champs} alt="champs" className="product-parallax-bgimg"/>
            </Background>
        </Parallax>

        {/* ==================MOBILE ONLY ============================ */}
        <div className={mobile ? "product-images-mobile" : "product-images-mobile mobile"} >
            <h1 className="product-text">Que voulez-vous commander aujourd'hui?</h1>
            <div className="product-items">
                {
                img.map((element, i) => (
                    <div className="product-block" key={i} id={element.shortName}>
                        <Modal item={element.shortName} triggerItem={
                            <img className="product-image"
                                src={element.image} alt="type de produit" 
                                // style={transformStyle}   
                            />
                        }/>

                        <Modal item={element.shortName} triggerItem={
                            <h1 className="product-image-title" 
                                // style={transformStyle}
                            >
                                {element.name}
                            </h1>
                        }/>
                    </div>
                ))
                }
            </div>
        </div>

    </section>
)}

export default Products;
