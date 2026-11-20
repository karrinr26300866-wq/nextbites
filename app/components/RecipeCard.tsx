import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
  index: number;
};

export function RecipeCard({ recipe, index }: RecipeCardProps) {
  return (
    <article
      className="recipe-card"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div
        className={`recipe-art ${recipe.artClass}`}
        role="img"
        aria-label={recipe.artLabel}
      >
        <span aria-hidden="true">{recipe.art}</span>
        <span className="category-pill">{recipe.category}</span>
        <span className="save-mark" aria-hidden="true">
          +
        </span>
      </div>
      <div className="recipe-copy">
        <p className="recipe-cuisine">{recipe.cuisine}</p>
        <h3>{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta" aria-label="Recipe details">
          <span>
            <span aria-hidden="true">◷</span> {recipe.timeMinutes} min
          </span>
          <span className="meta-divider" aria-hidden="true">
            ·
          </span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}
