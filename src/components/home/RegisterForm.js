import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { REGISTER_REQUEST } from "../../reducers/actions/userActions";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function RegisterForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userForm, setUserForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [pwForm, setPwForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(REGISTER_REQUEST({ userForm, emailForm, pwForm })).then((r) => {
      if (r.payload[1]) return history.push("/");
      alert("usuario ya registrado");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="Username"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  autoFocus
                  onChange={(e)=> setUserForm(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=> setEmailForm(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=> setPwForm(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// <div className="container">
//   <h3>REGISTER</h3>
//   <form onSubmit={handleSubmit}>
//     <div className="form-group">
//       <label for="exampleInputUser">Username</label>
//       <input
//         type="text"
//         className="form-control"
//         id="exampleInputUser"
//         aria-describedby="userHelp"
//         placeholder="Enter username"
//         required
//         onChange={(e) => setUserForm(e.target.value)}
//       />
//     </div>
//     <div className="form-group">
//       <label for="exampleInputEmail1">Email</label>
//       <input
//         type="email"
//         className="form-control"
//         id="exampleInputEmail1"
//         placeholder="Email"
//         required
//         onChange={(e) => setEmailForm(e.target.value)}
//       />
//     </div>
//     <div className="form-group">
//       <label for="exampleInputPassword1">Password</label>
//       <input
//         type="password"
//         className="form-control"
//         id="exampleInputPassword1"
//         placeholder="Password"
//         required
//         onChange={(e) => setPwForm(e.target.value)}
//       />
//     </div>
//     <button type="submit" className="btn btn-primary mt-3">
//       Submit
//     </button>
//   </form>
// </div>
