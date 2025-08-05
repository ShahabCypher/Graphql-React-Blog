import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";

import { GET_POST_COMMENTS } from "../../graphql/queries";

const Comments = ({ slug }) => {
  const { loading, error, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return;

  const { comments } = data;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid size={{ xs: 12 }} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Comments
        </Typography>
        {comments.map((comment) => (
          <Grid
            key={comment.id}
            m={2}
            p={2}
            border="1px silver solid"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} ml={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Comments;
