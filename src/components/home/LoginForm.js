import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_REQUEST } from "../../reducers/actions/userActions";
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

import Snackbar from "@mui/material/Snackbar";

const theme = createTheme();

export default function RegisterForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [emailForm, setEmailForm] = useState("");
  const [pwForm, setPwForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(LOGIN_REQUEST({ emailForm, pwForm })).then((r) => {
      if (r.payload === undefined) alert("usuario y/o contraseña incorrecta");
      else return history.push("/");
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmailForm(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPwForm(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to="/register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

/* <div className="container">
<h3>LOGIN</h3>
<form onSubmit={handleSubmit}>
<div className="form-group">
  <label for="exampleInputEmail1">Username</label>
  <input
    type="text"
    className="form-control"
    id="exampleInputUser1"
    aria-describedby="userHelp"
    placeholder="Enter username"
    onChange={(e) => setUserForm(e.target.value)}   
  />
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input
    type="password"
    className="form-control"
    id="exampleInputPassword1"
    placeholder="Password"
    onChange={(e) => setPwForm(e.target.value)}
  />
</div>
<button type="submit" className="btn btn-primary mt-3">
  LOG IN
</button>
</form>
</div> */
