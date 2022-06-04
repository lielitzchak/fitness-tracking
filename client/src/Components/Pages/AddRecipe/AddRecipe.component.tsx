import { useState } from "react";
import { PostRecipe } from "../../../service/Recipe-service";

const AddRecipe = (): JSX.Element => {
  const [recipe, setRecipe] = useState({});
  const [min, setMin] = useState("");
  const [messageFromServer, setMessageFromServer] = useState("");

  const changMinByValue = (event: any) => {
    event.preventDefault();
    event.target.value > 1 ? setMin("minutes") : setMin("minute");
    if (event.target.value === "") {
      setMin("");
    }
    console.log({ ...recipe, [event.target.name]: event.target.value });
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const saveValue = (event: any) => {
    event.preventDefault();
    event.target.value === "on"
      ? setRecipe({ ...recipe, [event.target.name]: true })
      : setRecipe({ ...recipe, [event.target.name]: false });
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
    console.log({ ...recipe, [event.target.name]: event.target.value });
  };

  const clickOnSave = (event: any) => {
    event.preventDefault();
    // setRecipe(recipe);
    PostRecipe(recipe)
      .then((response: any) => setMessageFromServer(response.message))
      .catch((err: any) => setMessageFromServer(err));
    console.log(recipe);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
            <h1>add new recipe</h1>
          <form>
            <div className="name">
              <div>
                <input
                  type="text"
                  name="Name"
                  placeholder="recipe name"
                  required
                  onChange={(event) => saveValue(event)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Summary"
                  placeholder="Summary"
                  required
                  onChange={(event) => saveValue(event)}
                />
              </div>
            </div>
            <div className="street">
              <input
                type="number"
                name="TimeToCook"
                placeholder="time to cook"
                onChange={(event) => changMinByValue(event)}
              />
            </div>
            <div className="address-info">
              <div>
                <input
                  type="checkbox"
                  name="vegan"
                  placeholder="vegan"
                  onChange={(event) => changMinByValue(event)}
                />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input type="text" name="state" />
              </div>
              <div>
                <label htmlFor="zip">Zip</label>
                <input type="text" name="zip" />
              </div>
            </div>

            <div className="btns">
              <button onClick={(event) => clickOnSave(event)}>save!</button>
            </div>
          </form>
        </div>
      </div>
      {messageFromServer}
    </>
  );
};

export default AddRecipe;

// שם המתכון
// תיאור המתכון

// אופן ההכנה

// רעיונות לשידרוג/טיפים

// ציוד נדרש

// סוג המנה

// קטגוריות (ניתן לבחור עד 3 סוגים)
//  אורז
//  אחר
//  בשביל הערך התזונתי
//  בשר
//  גבינות
//  גלידות ושרבטים
//  דגים
//  ירקות
//  כבושים
//  כריכים וסנדוויצ`ים
//  לחמים
//  מאפים
//  מוסים וקרמים
//  ממולאים
//  ממרחים ומטבלים
//  מרקים
//  משקאות
//  משקאות חמים
//  מתוקים
//  מתכוני ילדים
//  מתכונים לטבעוניים
//  ללא גלוטן
//  מתכונים לסוכרתיים
//  מתכונים לצמחוניים
//  סושי
//  סלטים
//  עוגות
//  עוגיות
//  עוף
//  פיצות
//  פירות
//  פירות ים
//  פסטה
//  פשטידות
//  קוקטיילים
//  רטבים
//  ריבות
//  שוקולד
//  שייקים
//  תבשילי קדרה
//  תזונה קטוגנית
//  תינוקות
