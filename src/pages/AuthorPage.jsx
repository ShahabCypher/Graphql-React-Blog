import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { Avatar, Container, Grid, Typography } from "@mui/material";

import CardEL from "../components/posts/CardEL";
import { GET_AUTHOR_INFO } from "../graphql/queries";

const AuthorPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Something went wrong...</h4>;

  const {
    author: { name, field, avatar, description, posts },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          size={{ xs: 12 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 }} mt={6}>
        <Typography component="h3" variant="h5" fontWeight={700}>
          {name} posts
        </Typography>
        <Grid container spacing={2} mt={2}>
          {posts.map((post) => (
            <Grid key={post.id} size={{ sx: 12, sm: 6, md: 4 }}>
              <CardEL {...post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
