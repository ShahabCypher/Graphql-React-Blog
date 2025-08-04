import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            React Graphql Blog
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
