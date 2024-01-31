import { useEffect, useState } from "react";
const GenericRecipe = (): JSX.Element => {
  let [singleRecipe, setSingleRecipe]: any = useState({});
  let id: string = window.location.href.slice(
    window.location.href.indexOf("recipe/") + 7
  );
  useEffect(() => {
    let jsonObject: any = localStorage.getItem(id);
    let recipe = JSON.parse(jsonObject);
    setSingleRecipe(recipe);
  }, []);

  return (
    <article className="genericRecipe">
      <div className="ft-recipe">
        <section className="ft-recipe__thumb">
          <span className="close-modal">
            <i className="fa fa-clock-o" aria-hidden="false"></i>
          </span>
          <img src={singleRecipe.Picture} alt={singleRecipe.Name} />
        </section>
        <div className="ft-recipe__content">
          <div className="content__header">
            <section className="row-wrapper">
              <h2 className="recipe-title">{singleRecipe.Name}</h2>
              <div className="user-rating"></div>
            </section>
            <ul className="recipe-details">
              <li className="recipe-details-item time">
                <i className="ion ion-ios-clock-outline"></i>
                <span className="value">{singleRecipe.TimeToMake}</span>
                <span className="title">Minutes</span>
              </li>
              <li className="recipe-details-item ingredients">
                <i className="ion ion-ios-book-outline"></i>
                <span className="value">5</span>
                <span className="title">Ingredients</span>
              </li>
              <li className="recipe-details-item servings">
                <i className="ion ion-ios-person-outline"></i>
                <span className="value">4-6</span>
                <span className="title">Serving</span>
              </li>
            </ul>
          </div>
          <p className="description">
            Theres no better way to celebrate May being National Strawberry
            Month than by sharing a sweet treat with your pup!!! Strawberries...
          </p>
        </div>
      </div>
    </article>
  );
};

export default GenericRecipe;

// 0522509239
