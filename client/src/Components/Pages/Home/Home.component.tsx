import { Link } from "react-router-dom";
const Home = (): JSX.Element => {
  return (
    <div className="HomeComponent">
      <section className="Home-section">
        <article className="aboutMe">
          <div className="myPhoto">
            <img src="https://did.li/IBSlC" alt="" />
          </div>
        </article>
        <article className="text-on-app">
          <h4>Hi, I'm Liel Itzchak</h4>
          <h1>
            Our website offers a wide range of services to help you achieve your
            goal of having a great body
          </h1>
          <p>
            After getting a bachelors in nutrition and fitness training I
            started working with people all around and changing their lives
            forever.
          </p>
          <button className="buttons">
            <Link to={"/profile"}>go to your profile</Link>
          </button>
        </article>
      </section>
      <section className="onApp">
        <article className="putOnApp">
          <div>
            <h3>100+</h3> <p>Sportswear</p>
          </div>
          <div>
            <h3>7+</h3> <p> years of experience in gym</p>
          </div>
          <div>
            <h3>1K </h3> <p>followers on instagram</p>
          </div>
        </article>
      </section>
      <article className="text">
        <h1>The journey to a healthier body starts right now</h1>
        <button className="buttons">
          <Link to="/">online program</Link>
        </button>
      </article>
      <section className="categories">
        <section>
          <Link to={"/training-program"} className="HomeLink">
            <img src="https://did.li/BHAlC" alt="Gym Report" />
            <h4>Gym Report</h4>
            <p>
              Changing your lifestyle with a fast paced life may seem hard or
              impossible, but with small steps each week you can achieve your
              dream physique and live a healthier life. you can fine here ll
              what you need about your program in a gym.
            </p>
          </Link>
        </section>
        <section>
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
        <section>
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
        <section>
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
