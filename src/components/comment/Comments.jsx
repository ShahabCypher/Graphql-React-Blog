import { useQuery } from "@apollo/client";

import Loader from "../Loader";
import { GET_POST_COMMENTS } from "../../graphql/queries";

const Comments = ({ slug }) => {
  const { loading, error, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  return <div>Comments</div>;
};

export default Comments;
