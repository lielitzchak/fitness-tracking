import { useState } from "react";
import { PostRecipe } from "../../../service/Recipe-service";

const AddRecipe = (): JSX.Element => {
  const [recipe, setRecipe] = useState({ Candy: false, vegan: false });
  const [messageFromServer, setMessageFromServer] = useState("");
  let [isChecked, setIsChecked]: any = useState(false);

  const saveValue = (event: any) => {
    event.preventDefault();
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
    console.log(recipe);
  };

  const handleOnChange = (event: any) => {
    // setIsChecked(!event.target.checked);
    console.log(event);
    // setRecipe({ ...recipe, [event.target.name]: isChecked });
    console.log(
      `isChecked: ${isChecked}`
      );
      // event.target.name: ${event.target.name}, recipe: ${recipe}`
  };
  const clickOnSave = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>add new recipe</h1>
          <form>
            <div className="name">
              <div>
                <label htmlFor="">recipe name</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="recipe name"
                  required
                  onChange={(event) => saveValue(event)}
                />
              </div>
              <div>
                <label htmlFor="">Summary</label>
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
              <label htmlFor="">Time To Cook</label>
              <input
                type="number"
                name="TimeToCook"
                placeholder="time to cook"
              />
            </div>
            <div className="address-info">
              <div>
                <label htmlFor="">Is vegan?</label>
                <input
                  type="checkbox"
                  name="vegan"
                  checked={recipe.vegan}
                  onChange={(event) => handleOnChange(event)}
                />
              </div>
              <div>
                <label htmlFor="">Is Candy?</label>
                <input
                  type="checkbox"
                  name="Candy"
                  checked={recipe.Candy}
                  onChange={(event) => handleOnChange(event)}
                />
              </div>
              {/* <div>
                <label htmlFor="">Is Milk?</label>
                <input
                  type="checkbox"
                  name="IsMilk"
                  checked={isChecked}
                  onChange={(event) => handleOnChange(event)}
                />
              </div> */}
              <div>
                <label htmlFor="">Picture</label>
                <input
                  type="url"
                  name="Picture"
                  onChange={(event) => saveValue(event)}
                />
              </div>
              <div>
                <label htmlFor="zip"> HowToMake</label>
                <input
                  type="text"
                  name="HowToMake"
                  onChange={(event) => saveValue(event)}
                />
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
