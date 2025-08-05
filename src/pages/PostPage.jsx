import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import sanitizeHtml from "sanitize-html";

import Loader from "../components/Loader";
import CommentForm from "../components/comment/CommentForm";
import Comments from "../components/comment/Comments";
import { GET_POST_INFO } from "../graphql/queries";

const PostPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h4>Something went wrong...</h4>;

  const { post } = data;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          size={{ xs: 12 }}
          mt={9}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {post.title}
          </Typography>
          <Link to={-1} style={{ paddingLeft: "40px" }}>
            <ArrowBackRounded color="primary" />
          </Link>
        </Grid>
        <Grid size={{ xs: 12 }} mt={6}>
          <img
            src={post.coverPhoto.url}
            alt={post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid size={{ xs: 12 }} mt={7} display="flex" alignItems="center">
          <Avatar
            src={post.author.avatar.url}
            sx={{ width: "80px", height: "80px", marginRight: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post.content.html),
            }}
          ></div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <CommentForm slug={slug} />
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Comments slug={slug} />
      </Grid>
    </Container>
  );
};

export default PostPage;
