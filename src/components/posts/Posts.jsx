import { useQuery } from "@apollo/client";

import { GET_BLOGS_INFO } from "../../graphql/queries";

const Posts = () => {
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h4>Loading...</h4>;

  if (error) return <h4>Something went wrong</h4>;

  return <div></div>;
};

export default Posts;
