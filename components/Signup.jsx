import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Signup() {
  return (
    <Box>
      <TextField
        sx={{ my: 2 }}
        id="outlined-basic"
        fullWidth
        label="Email"
        color="secondary"
        variant="outlined"
        required
        autoFocus
      />
      <TextField
        sx={{ mb: 2 }}
        id="outlined-basic"
        fullWidth
        label="Password"
        color="secondary"
        variant="outlined"
        required
      />
      <TextField
        sx={{ mb: 2 }}
        id="outlined-basic"
        fullWidth
        label="Confirm Password"
        color="secondary"
        variant="outlined"
        required
      />
      <Button sx={{ mt: 2 }} variant="contained" fullWidth color="secondary">
        Signup
      </Button>
    </Box>
  );
}
