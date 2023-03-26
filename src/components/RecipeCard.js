import { Link } from "react-router-dom";

export default function RecipeCard({title, img, time, slug}){
    return(
        <article className="recipe-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>Estimert tid: <span>{time}</span></p>
            <Link to={slug} className="link"></Link>
        </article>
    )
}