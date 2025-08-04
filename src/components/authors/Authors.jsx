import { useQuery } from "@apollo/client";

import { GET_AUTHORS_INFO } from "../../graphql/queries";

const Authors = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <h4>Loading...</h4>;

  if (error) return <h4>Something went wrong</h4>;

  return <div>Authors</div>;
};

export default Authors;
