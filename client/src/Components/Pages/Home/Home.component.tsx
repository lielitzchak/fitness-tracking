import { Link } from "react-router-dom";
const Home = (): JSX.Element => {
  return (
    <div className="Home">
      <section className="Home-section">
        <article className="aboutMe">
          <h2>liel itzchak</h2>
          <div className="imgDiv">
            <img src="https://did.li/qtvCN" alt="" />
          </div>
          <div className="buttons">
            <button className="btn1">forward</button>
            <button className="btn2">back</button>
          </div>
        </article>

        <article className="text-on-app">
          <h4>Hi i'm Liel Itzchak</h4>
          <h1>Your go to online fitness trainer and nutritionist.</h1>
          <p>
            After getting a bachelors in nutrition and fitness training I
            started working with people all around and changing their lives
            forever.
          </p>
          <button>online coaching</button>
        </article>
      </section>
      <section className="onApp">
        <article className="putOnApp">
          <div>
            <h3>1900+</h3> <p>happy clients</p>
          </div>
          <div>
            <h3>10+</h3> <p> years of experience</p>
          </div>
          <div>
            <h3>156K </h3> <p>followers on instagram</p>
          </div>
        </article>
      </section>
      <article className="text">
        <h1>The journey to a healthier body starts right now</h1>
        <button>online program</button>
      </article>
      <section className="categories">
        <section className="">
          <Link to={"/gym"} className="HomeLink">
            <img src="https://did.li/BHAlC" alt="Gym" />
            <h4>Gym</h4>
            <p>
              Changing your lifestyle with a fast paced life may seem hard or
              impossible, but with small steps each week you can achieve your
              dream physique and live a healthier life. you can fine here ll
              what you need about your program in a gym.
            </p>
          </Link>
        </section>

        <section className="">
          <Link to={"/food"} className="HomeLink">
            <img src="https://did.li/GqpTY" alt="Food" />
            <h4>Food</h4>
            <p>
              Changing your lifestyle with a fast paced life may seem hard or
              impossible, but with small steps each week you can achieve your
              dream physique and live a healthier life. all what you eat, you
              can find here
            </p>
          </Link>
        </section>

        <section className="">
          <Link to={"/report"} className="HomeLink">
            <img src="https://did.li/XBRw5" alt="report" />
            <h4>Report</h4>
            <p>
              Changing your lifestyle with a fast paced life may seem hard or
              impossible, but with small steps each week you can achieve your
              dream physique and live a healthier life. you can find here all
              your reports
            </p>
          </Link>
        </section>

        <section className="">
          <Link to={"/recipes"} className="HomeLink">
            <img src="https://did.li/4kG5q" alt="recipes" />
            <h4>Recipes</h4>
            <p>
              Changing your lifestyle with a fast paced life may seem hard or
              impossible, but with small steps each week you can achieve your
              dream physique and live a healthier life. you can find here all
              your recipes
            </p>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Home;
