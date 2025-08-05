import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        Sample Blog Project with GraphQL | By{" "}
        <a
          href="https://github.com/ShahabCypher"
          target="_blank"
          style={{ color: "inherit" }}
        >
          Cypher
        </a>
      </Typography>
    </footer>
  );
};

export default Footer;
