import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Box } from "@mui/material";

import Loader from "../Loader";
import AuthorCard from "./AuthorCard";
import { GET_AUTHORS_INFO } from "../../graphql/queries";

const Authors = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <Loader />;
  if (error) return <h4>Something went wrong</h4>;

  const { authors } = data;

  // Authors Search
  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search bar */}
      <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Search authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
            width: "100%",
          }}
        />
      </Box>

      <Grid
        container
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
          borderRadius: 3,
          padding: 2,
        }}
      >
        {filteredAuthors.length > 0 ? (
          filteredAuthors.map((author, index) => (
            <AuthorCard
              key={author.id}
              {...author}
              last={index === filteredAuthors.length - 1}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>No authors found</p>
        )}
      </Grid>
    </>
  );
};

export default Authors;
