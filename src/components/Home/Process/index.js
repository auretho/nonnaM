import React from 'react';
// import HoverImage from "react-hover-image";
import ProcessStandard from './ProcessStandard.js';
import ProcessMobile from './ProcessMobile.js';
import ProcessIpad from './ProcessIpad.js';

// import img1 from '../../../assets/smile1.png';
// import img2 from '../../../assets/smile2.png';
import './style.scss';


const Products = ({location}) => {

    return(
    <div className="process" id="origine-des-produits">
        <h1 className="process-title">D'où viennent tous nos produits?</h1>
        {
        window.innerWidth <= 488 ?
        <ProcessMobile location={location}/>
        :
        window.innerWidth <= 768 ?
        <ProcessIpad location={location}/>
        :
        <ProcessStandard location={location}/>
        }
    </div>
)}

export default Products;