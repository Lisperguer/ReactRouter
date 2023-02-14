import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to <Link to="/products">list of products </Link>
      </p>
    </>
  );
};
