import './style.scss';
import React, { Component } from 'react'
import { Button, Form, Input, TextArea} from 'semantic-ui-react'

const AddProducts = ({handleChange, handleAddNewProduct, newProduct}) => {
  
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    handleChange({ newProduct: {...newProduct,[name]: value }})
  }

  const handleProductSubmit = (evt) => {
    evt.preventDefault();
    handleAddNewProduct(newProduct);
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
            <option value='tomates'>Tomates</option>
            <option value='artichauts'>Artichauts</option>
            <option value='olive'>Huile d'olive</option>

          </Form.Field>
           <Form.Field
            control={Input}
            name="image"
            label="URL de l'image"
            placeholder='URL'
            onChange={handleInputChange}
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