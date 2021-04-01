import './style.scss';
import React, { Component } from 'react'
import { Button, Form, Input, Select, TextArea} from 'semantic-ui-react'

const options = [
  { key: 't', text: 'Tomates', value: 'tomates' },
  { key: 'a', text: 'Artichauts', value: 'artichauts' },
  { key: 'o', text: 'Huile d\'olive', value: 'olive' },
]

const AddProducts = () => {

  const handleProductSubmit = () => {
    
  }

    return (
      <Form className="addproducts">
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Nom complet'
            placeholder='Nom du produit'
          />
          <Form.Field
            control={Select}
            label='Catégorie de produit'
            options={options}
            placeholder='Catégorie de produit'
          />
           <Form.Field
            control={Input}
            label="URL de l'image"
            placeholder='URL'
          />
        </Form.Group>
        <Form.Group inline>
          <Form.Field
            control={Input}
            type="number"
            label='Quantité'
            placeholder='Quantité existante'
        />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Description du produit'
          placeholder='Description du produit'
        />
        <Form.Field
            control={Input}
            type="number"
            label='Prix'
            placeholder='Prix'
        />
        <Form.Field control={Button} type="submit" onSubmit={handleProductSubmit} >
            Créer le nouveau produit
        </Form.Field>
      </Form>
    )
}

// export default FormExampleFieldControl

export default AddProducts;