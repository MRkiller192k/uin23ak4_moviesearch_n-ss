import RecipeCard from './RecipeCard';
//import recipes from '../resources/recipes';
import { Link } from 'react-router-dom';
import Search from './Search';
export default function Main({recipes, setSearch, getRecipes}){
    return (
      <>
      <Search setSearch={setSearch} getRecipes={getRecipes} />
      <section className='recipe-view'>
        <h2>Oppskrifter</h2>
          {recipes.map((recipe, index) => (
                  <RecipeCard key={index} title={recipe?.recipe?.label} img={recipe?.recipe?.image} time={recipe?.recipe?.totalTime} slug={recipe?.recipe?.label.replace(/\s/g, "-").toLowerCase()} /> 
             
          ))}
        </section>
      </>

      );
}