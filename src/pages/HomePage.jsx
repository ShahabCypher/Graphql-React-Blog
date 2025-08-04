import { Container, Grid, Typography } from "@mui/material";

import Authors from "../components/authors/Authors";
import Posts from "../components/posts/Posts";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid size={{ xs: 12, md: 3 }} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            Authors
          </Typography>
          <Authors />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            Posts
          </Typography>
          <Posts />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
