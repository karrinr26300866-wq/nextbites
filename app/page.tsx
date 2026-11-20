import { RecipeCard } from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              A little inspiration for your table
            </p>
            <h1 id="hero-title">
              Good food,
              <br />
              <span>good mood.</span>
            </h1>
            <p className="hero-description">
              Simple, feel-good recipes for whatever kind of day you&apos;re
              having. Let&apos;s find your next favorite.
            </p>
            <a className="primary-button" href="#recipes">
              Explore recipes <span aria-hidden="true">↓</span>
            </a>
            <div className="hero-note">
              <span className="note-sparkle" aria-hidden="true">
                ✳
              </span>
              <span>Real ingredients. Really good ideas.</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="A spread of fresh meal ideas">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-food hero-food-main" aria-hidden="true">
              🥗
            </div>
            <div className="hero-food hero-food-small food-one" aria-hidden="true">
              🍋
            </div>
            <div className="hero-food hero-food-small food-two" aria-hidden="true">
              🍅
            </div>
            <div className="hero-sticker">
              <span>made with</span>
              <strong>a little joy</strong>
              <span aria-hidden="true">✦</span>
            </div>
            <span className="hero-caption">Fresh ideas, served daily</span>
          </div>
          <span className="hero-decoration decoration-one" aria-hidden="true">
            ✳
          </span>
          <span className="hero-decoration decoration-two" aria-hidden="true">
            ·
          </span>
        </div>
      </section>

      <section className="recipes-section" id="recipes" aria-labelledby="recipes-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow">A good place to start</p>
            <h2 id="recipes-title">
              On the menu <span aria-hidden="true">↘</span>
            </h2>
          </div>
          <p className="section-description">
            A few of our current favorites, picked to make your day a little
            tastier.
          </p>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={index} />
          ))}
        </div>
        <p className="browse-note">
          <span aria-hidden="true">✳</span> More delicious ideas are on their way
        </p>
      </section>
    </main>
  );
}
