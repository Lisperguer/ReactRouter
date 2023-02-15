import { Link, useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1> ProductDetailPage</h1>
      <p> {params.productId}</p>
      <p>
        <Link
          to=".."
          relative="path">
          Back
        </Link>
      </p>
    </>
  );
};
