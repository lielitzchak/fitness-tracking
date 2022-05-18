import { useEffect, useState } from "react";
import { getRecipeById } from "../../../service/Recipe-service";

const GenericRecipe = (): JSX.Element => {
  const [singleRecipe, setSingleRecipe]: any = useState({});
  let id: string = window.location.href.slice(
    window.location.href.indexOf("recipe/") + 7
  );
  // console.log(id);
  useEffect(() => {
    getRecipeById(id)
      .then((res: any) => {
        console.log(res);
        setSingleRecipe(res);
        console.log(singleRecipe);
      })
      .catch((err: any) => {
        console.log(err);
      });
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
          <div className="content__footer">
            {/* <a href="#">write here the recipe</a> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default GenericRecipe;

// 0522509239
