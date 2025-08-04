import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardEL = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 3 }}>
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
        title={
          <Typography component="p" variant="p" color="text.secondary">
            {author.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        {/* <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%" }}> */}
        <Button
          variant="outlined"
          size="small"
          sx={{ width: "100%", borderRadius: 2 }}
        >
          Read More
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
};

export default CardEL;
