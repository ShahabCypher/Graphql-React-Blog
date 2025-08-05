import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

import Loader from "../Loader";
import CardEL from "./CardEL";
import { GET_BLOGS_INFO } from "../../graphql/queries";

const Posts = () => {
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader />;

  if (error) return <h4>Something went wrong</h4>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
