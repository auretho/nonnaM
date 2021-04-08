import React from 'react';
import { Button, Form, Input, TextArea} from 'semantic-ui-react'
import logo from '../../../../assets/coeur-solo.png';
import './style.scss';

const AddProducts = ({handleChange, handleAddNewProduct, newProduct}) => {

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    handleChange({ newProduct: {...newProduct,[name]: value }})
  }

  const handleUploadChange = (evt) => {
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
      <Form className="addproducts" id="addProds" onSubmit={handleProductSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            name="name"
            label='Nom complet'
            placeholder='Nom du produit'
            onChange={handleInputChange}
            required
          />
          <Form.Field
            control={Input}
            type="file"
            name="image"
            label="URL de l'image"
            placeholder='URL'
            onChange={handleUploadChange}
            required
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            name="quantity"
            type="number"
            label='Quantité'
            placeholder='Quantité existante'
            onChange={handleInputChange}
        />
          <Form.Field
            control='select'
            name="shortName"
            label='Catégorie de produit'
            placeholder='Catégorie de produit'
            onChange={handleInputChange}
            required
          >
            <option value=''>Choisir</option>
            <option value='tomates'>Tomates</option>
            <option value='artichauts'>Artichauts</option>
            <option value='olive'>Huile d'olive</option>
            <option value='truffe'>Truffes</option>
            <option value='jambon'>Charcuterie</option>
          </Form.Field>
        </Form.Group>
        <Form.Field
          control={TextArea}
          name="description"
          label='Description du produit'
          placeholder='Description du produit'
          onChange={handleInputChange}
          required
        />
        <Form.Field
            control={Input}
            type="number"
            step="0.01"
            name="price"
            label='Prix'
            placeholder='Prix'
            onChange={handleInputChange}
            required
        />
        <Button type='submit' color="teal">Créer le nouveau produit</Button>
      </Form>
    )
}

export default AddProducts;