import { Avatar, Divider, Grid, Typography } from "@mui/material";

const AuthorCard = ({ name, slug, avatar, last }) => {
  return (
    <>
      <Grid size={{ xs: 12 }} padding={2}>
        <a
          href={`/authors/${slug}`}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Avatar src={avatar.url} sx={{ marginLeft: 2, marginRight: 1 }} />
          <Typography component="p" variant="p" color="text.secondary">
            {name}
          </Typography>
        </a>
      </Grid>
      {!last && (
        <Grid size={{ xs: 12 }}>
          <Divider variant="middle" />
        </Grid>
      )}
    </>
  );
};

export default AuthorCard;
