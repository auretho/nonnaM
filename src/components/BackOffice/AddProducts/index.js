import React from 'react';
import axios from 'axios';
import { Button, Form, Input, TextArea} from 'semantic-ui-react'
import logo from '../../../assets/coeur-solo.png';
import './style.scss';

const AddProducts = ({handleChange, handleAddNewProduct, newProduct}) => {

  const [ uploadedFile, setUploadedFile ] = React.useState(null)

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    handleChange({ newProduct: {...newProduct,[name]: value }})
  }

  const handleUploadChange = (evt) => {
    // console.log(newProduct.image);
    // console.log(evt.target.files[0]);
    // setUploadedFile(evt.target.files[0])
    // console.log(uploadedFile);
    handleChange({ newProduct: {...newProduct, image: evt.target.files[0] }})
  }

  const handleProductSubmit = (evt) => {
    evt.preventDefault();
    if(!newProduct.image){
      handleChange({ newProduct: {...newProduct, image: logo }})
    }
    handleAddNewProduct();
  }



    return (
      <Form className="addproducts" onSubmit={handleProductSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            name="name"
            label='Nom complet'
            placeholder='Nom du produit'
            onChange={handleInputChange}
          />
          <Form.Field
            control='select'
            name="shortName"
            label='Catégorie de produit'
            placeholder='Catégorie de produit'
            onChange={handleInputChange}
          >
            <option value=''>Choisir</option>
            <option value='tomates'>Tomates</option>
            <option value='artichauts'>Artichauts</option>
            <option value='olive'>Huile d'olive</option>
            <option value='truffe'>Truffes</option>
            <option value='jambon'>Charcuterie</option>

          </Form.Field>
           {/* <Form.Field
            control={Input}
            name="image"
            label="URL de l'image"
            placeholder='URL'
            onChange={handleInputChange}
          /> */}
          <Form.Field
            control={Input}
            type="file"
            name="image"
            label="URL de l'image"
            placeholder='URL'
            onChange={handleUploadChange}
          />
        </Form.Group>
        <Form.Group inline>
          <Form.Field
            control={Input}
            name="quantity"
            type="number"
            label='Quantité'
            placeholder='Quantité existante'
            onChange={handleInputChange}

        />
        </Form.Group>
        <Form.Field
          control={TextArea}
          name="description"
          label='Description du produit'
          placeholder='Description du produit'
          onChange={handleInputChange}

        />
        <Form.Field
            control={Input}
            type="number"
            step="0.01"
            name="price"
            label='Prix'
            placeholder='Prix'
            onChange={handleInputChange}
        />
        <Button type='submit'>Créer le nouveau produit</Button>
      </Form>
    )
}

export default AddProducts;