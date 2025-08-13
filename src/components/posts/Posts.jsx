import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useState } from "react";

import Loader from "../Loader";
import CardEL from "./CardEL";
import { GET_BLOGS_INFO } from "../../graphql/queries";

const Posts = () => {
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <Loader />;

  if (error) return <h4>Something went wrong</h4>;

  const filteredPosts = data.posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            display : "flex" ,
            width: "100%",
            maxWidth: "400px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            justifyContent:"left"
          }}
        />
      </div>
      <Grid container spacing={2}>
        {filteredPosts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <CardEL {...post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
