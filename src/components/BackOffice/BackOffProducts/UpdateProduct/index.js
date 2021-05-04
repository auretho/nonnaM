import './style.scss';
import { Button, Form, Input, TextArea, Label} from 'semantic-ui-react'

const UpdateProduct = ({handleChange, product, updateprod}) => {
  
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    handleChange({ productSelected: {...product,[name]: value }})
  }

  const handleUploadChange = (evt) => {
    handleChange({ productSelected: {...product, image: evt.target.files[0] }})
  }

  const handleProductUpdate = (evt) => {
    evt.preventDefault();
    updateprod()  
    window.alert('Le nouveau produit a bien été mis à jour!')

  }

    return (
      <Form className="updateproducts" id="updateProds" onSubmit={handleProductUpdate}>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            name="name"
            label='Nom complet'
            placeholder='Nom du produit'
            value={product.name}
            onChange={handleInputChange}
          />

          <Form.Field
            control={Input}
            type="file"
            name="image"
            label="URL de l'image"
            placeholder='URL'
            onChange={handleUploadChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            name="quantity"
            type="number"
            label='Quantité'
            placeholder='Quantité existante'
            value={product.quantity}
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
        </Form.Group>
        <Form.Field
          control={TextArea}
          name="description"
          label='Description du produit'
          placeholder='Description du produit'
          value={product.description}
          onChange={handleInputChange}

        />
        <Form.Field
            control={Input}
            type="number"
            step="0.01"
            name="price"
            label='Prix'
            placeholder='Prix'
            value={product.price}
            onChange={handleInputChange}
        />
        <Button type='submit' color="teal">Mettre à jour le produit</Button>

      </Form>
    )
}

export default UpdateProduct;