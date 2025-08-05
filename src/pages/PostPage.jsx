import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import { GET_POST_INFO } from "../graphql/queries";

const PostPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h4>Something went wrong...</h4>;

  return <div>PostPage</div>;
};

export default PostPage;
