import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h2> This is the Details page {id}</h2>;
};

export default Details;
