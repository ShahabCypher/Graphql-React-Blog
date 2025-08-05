import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

import Loader from "../Loader";
import AuthorCard from "./AuthorCard";
import { GET_AUTHORS_INFO } from "../../graphql/queries";

const Authors = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;

  if (error) return <h4>Something went wrong</h4>;

  const { authors } = data;

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 3 }}
    >
      {authors.map((author, index) => (
        <AuthorCard
          key={author.id}
          {...author}
          last={index === authors.length - 1}
        />
      ))}
    </Grid>
  );
};

export default Authors;
