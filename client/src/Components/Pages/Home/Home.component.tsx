import { Link } from "react-router-dom";
const Home = (): JSX.Element => {
  return (
    <div className="Home">
      <Link to={"/gym"} className="HomeLink">
        <section className="categories">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h1>Gym</h1>
        </section>
      </Link>
      <Link to={"/food"} className="HomeLink">
        <section className="categories">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h1>Food</h1>
        </section>
      </Link>
      <Link to={"/report"} className="HomeLink">
        <section className="categories">
          <img
            src="https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVwb3J0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h1>Report</h1>
        </section>
      </Link>
      <Link to={"/recipe"} className="HomeLink">
        <section className="categories">
          <img
            src="https://images.unsplash.com/photo-1575153409612-907131447a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h1>Recipe</h1>
        </section>
      </Link>
    </div>
  );
};

export default Home;
