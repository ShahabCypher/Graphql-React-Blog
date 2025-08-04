import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_AUTHOR_INFO } from "../graphql/queries";

const AuthorPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  return <div>AuthorPage</div>;
};

export default AuthorPage;
