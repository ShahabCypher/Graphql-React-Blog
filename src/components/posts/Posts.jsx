import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

import Card from "./Card";
import { GET_BLOGS_INFO } from "../../graphql/queries";

const Posts = () => {
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h4>Loading...</h4>;

  if (error) return <h4>Something went wrong</h4>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
