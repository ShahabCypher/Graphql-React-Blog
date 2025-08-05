import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            component="h1"
            variant="h5"
            fontWeight="bold"
            flex={1}
            sx={{ userSelect: "none" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              React Graphql Blog
            </Link>
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <BookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
