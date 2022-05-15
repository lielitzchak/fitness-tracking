import { Link } from "react-router-dom";
const Home = (): JSX.Element => {
  return (
    <div className="Home">
      <Link to={"/gym"} className="HomeLink">
        <section className="categories">
          <img src="https://did.li/BHAlC" alt="Gym" />
          <h1>Gym</h1>
        </section>
      </Link>
      <Link to={"/food"} className="HomeLink">
        <section className="categories">
          <img src="https://did.li/GqpTY" alt="Food" />
          <h1>Food</h1>
        </section>
      </Link>
      <Link to={"/report"} className="HomeLink">
        <section className="categories">
          <img src="https://did.li/XBRw5" alt="report" />
          <h1>Report</h1>
        </section>
      </Link>
      <Link to={"/recipes"} className="HomeLink">
        <section className="categories">
          <img src="https://did.li/4kG5q" alt="recipes" />
          <h1>Recipes</h1>
        </section>
      </Link>
    </div>
  );
};

export default Home;
