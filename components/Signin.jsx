import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

export default function Signin() {
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSuccess = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    handleSuccess("success");
  };

  return (
    <Box>
      <TextField
        sx={{ my: 2 }}
        id="outlined-basic"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        color="secondary"
        variant="outlined"
        autoFocus
        required
      />
      <TextField
        sx={{ mb: 2 }}
        id="outlined-basic"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        color="secondary"
        variant="outlined"
        required
      />
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        fullWidth
        color="secondary"
        onClick={() => handleSubmit}
      >
        SignIn
      </Button>
    </Box>
  );
}
