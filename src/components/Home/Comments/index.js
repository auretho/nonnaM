import React, {useEffect} from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../../assets/recetas.png';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import './style.scss';

const Comments = ({recipes, findAllrecipes}) => {
    useEffect(() => {
        findAllrecipes();
    }, [])

    const handleClickToBack= (evt) => {
        const target = evt.currentTarget;
        setTimeout(() => {
            target.style.transform="rotateY(180deg)"
            target.previousSibling.style.transform="rotateY(0)"
        }, 10);
    }

    const handleClickToFront = (evt) => {
        const target = evt.currentTarget;
        setTimeout(() => {
            target.nextSibling.style.transform="rotateY(0)"
            target.style.transform="rotateY(180deg)"
        }, 10);
    }
        
    return(
    <section className="comments" id="recettes">
        <Parallax bgImage={bg} strength={250} className="comments-section" >
            <div>
                <h2 className="comments-title">Idées de recettes: les nôtres... et les vôtres!</h2>

                <div className="comments-blocks">               
                {
                recipes && recipes.map((recipe, id) => (
                    <div className="wrapper" key={id}>
                        <div className="oneBlock back" onClick={handleClickToFront}>
                            <h1 className="oneBlock-name">{recipe.firstname}</h1>
                            <p className="oneBlock-comment">{recipe.recipe}</p>
                        </div>
                        <div className="oneBlock front" onClick={handleClickToBack}>
                            <h1 className="oneBlock-name">{recipe.firstname}</h1>
                            <p className="oneBlock-comment">{recipe.text}</p>
                            <KeyboardReturnIcon className="oneBlock-icon" />
                        </div>
                    </div>
                ))
                }
                </div>
            </div>
        </Parallax>
    </section>
)}

export default Comments;