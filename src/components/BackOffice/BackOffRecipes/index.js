import {useEffect} from 'react';
import { Button, Form, Input, TextArea} from 'semantic-ui-react'
import './style.scss';

const BackOffRecipes = ({findAllrecipes, recipes, handleChange, updateRecipes}) => {
    useEffect(() => {
        findAllrecipes();
    }, [])

    const handleRecipeChange = (evt) => {
        const {name, value, id} = evt.target;

        handleChange({ recipes: recipes.map(el => {
            if(el._id === id){
                el[name] = value;
                return el
            }
            return el
        })}) 
    }

    const handleRecipeSubmit = (evt) => {
        const {name, value, id} = evt.target; 
        evt.preventDefault();
        recipes.find(el => {
            if(el._id === id){
                handleChange({ recipeToUpdt: el})
            }
        });
        updateRecipes();
        window.alert('Changements effectués!');
    }


    return(
    <div className="backoffice-recipes">
        <div className="backoffice-recipes-wrapper">
        {
            recipes.map((recipe, id) => (
                <Form className="backoffice-recipes-form" onSubmit={handleRecipeSubmit} id={recipe._id} key={id}>
                    <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        name="firstname"
                        id={recipe._id}
                        label='Prénom'
                        placeholder='Prénom'
                        value={recipe.firstname}
                        onChange={handleRecipeChange}
                    />
                    <Form.Field
                        control={TextArea}
                        rows="6"
                        name="text"
                        id={recipe._id}
                        label='Texte avant'
                        placeholder='Commentaire'
                        value={recipe.text}
                        onChange={handleRecipeChange}
                    />
                    <Form.Field
                        control={TextArea}
                        rows="6"
                        name="recipe"
                        id={recipe._id}
                        label='Texte arrière'
                        placeholder='Texte arrière'
                        value={recipe.recipe}
                        onChange={handleRecipeChange}
                    />
                    </Form.Group>

                    <Button type='submit' color="teal" className="backoffice-recipes-button">Mettre à jour la recette n°{id + 1}</Button>
                </Form>
            ))
        }
        </div>
    </div>
)}

export default BackOffRecipes;