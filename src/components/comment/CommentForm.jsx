import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SEND_COMMENT } from "../../graphql/mutations";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, error, data }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("Please fill all the fields", { position: "top-center" });
    }
  };

  if (data) {
    toast.success("Comment sent successfully, waiting for approval", {
      position: "top-center",
    });
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid size={{ xs: 12 }} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Send Comment
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }} m={2}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12 }} m={2}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12 }} m={2}>
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid size={{ xs: 12 }} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            Sending...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            Send
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
