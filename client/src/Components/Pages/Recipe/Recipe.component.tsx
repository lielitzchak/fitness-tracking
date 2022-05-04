import { useState, useEffect } from "react";
import { getRecipeById } from "../../../service/Recipe-service";

const Recipe = (props: any): JSX.Element => {
  console.log(props.id);
  const [recipe, setRecipe]: any = useState({});
  let currentId: String = document.location.search.substring(4);
  console.log(currentId);

  useEffect((): any => {
    try {
      return getRecipeById(`${props.id}`).then((response: Response) => {
        setRecipe(response);
        console.log(recipe);
      });
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div>
      Candy: false Name: "pizza" NutritionalValues: protein: 10, carbs: 10,
      fat:10, _id: '626fea693dea3ea0a00aee11' Picture: "https://did.li/W2WfT"
      TimeToMake: "30 minutes" createdAt: "2022-05-02T14:27:53.551Z" updatedAt:
      "2022-05-02T14:27:53.551Z" vegan: true __v: 0 _id:
    </div>
  );
};
export default Recipe;

// getData(BASIC_API, `/movies/movie/${currentId}`).then((movie) => {
//   main.innerHTML = `
//   <article class="singleMovie">
//     <section class="singleImg">
//       <div class="img-inner">
//           <div class="styleToImg">
//             <img class="imgTabs" src="${movie.data.image}" alt="">
//           </div>
//       </div>
//     </section>
//     <section class="text-container">
//           <h3>${movie.data.movieName}</h3>
//         <div>
//         <p><a href="${movie.data.linkToMovie}"><b> link To see the Movie</b></a></p>
//         <p><b>synopsis:</b> ${movie.data.synopsis}</p>
//         <p><b>rating:</b> ${movie.data.rating}</p>
//         <button id="${movie.data._id}" class="showDetailsId"> <a href="../html/tabs.html">back to all movies</a></button>
//       </div>
//     </section>
//   </article>`;
// });
