import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LOGOUT_REQUEST } from "../../reducers/actions/userActions";

// ***** MATERIAL UI *****
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// const buttons = [

//   <Button key="one" style={{color: 'white', borderColor: 'white'}} >SIGN IN</Button>,
//   <Button key="two"style={{color: 'white', borderColor: 'white'}}>SIGN UP</Button>,

// ];

export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.users.loggedIn);

  const [age, setAge] = useState("");

  console.log("USUARIO", user);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(LOGOUT_REQUEST());
    history.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              OMBb
            </Link>
          </Typography>

          {!user ? (
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
            >
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  key="one"
                  style={{ color: "white", borderColor: "white" }}
                >
                  SIGN IN
                </Button>
                ,
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button
                  key="two"
                  style={{ color: "white", borderColor: "white" }}
                >
                  SIGN UP
                </Button>
                ,
              </Link>
            </ButtonGroup>
          ) : (
            // <Toolbar>
            //   <Link to="/login" style={{ textDecoration: "none" }}>
            //     <Button style={{ fontSize: 25, color: "#fff" }}>SIGN IN</Button>
            //   </Link>
            //   <Link to="/register" style={{ textDecoration: "none" }}>
            //     <Button style={{ fontSize: 25, color: "red" }}>SIGN UP</Button>
            //   </Link>
            // </Toolbar>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                {user.username}
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            // <Toolbar>
            //   <Link
            //     to="/logout"
            //     style={{ textDecoration: "none" }}
            //     onClick={handleLogOut}
            //   >
            //     <Button style={{ fontSize: 25, color: "#fff" }}>
            //       SIGN OUT
            //     </Button>
            //   </Link>
            // </Toolbar>
          )}

          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 1, mr: 1 }}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>

    // <span>Bienvenid@ {user.length > 1 ? user[0].username : user.username}</span>

    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar
    //     position="static"
    //     style={{
    //       backgroundColor: "rgba(0, 0, 0, 0.87)",
    //       paddingBottom: 40,
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //     <Toolbar style={{ textDecoration: "none", fontSize: 30 }}>
    //       <Link to="/" style={{ textDecoration: "none" }}>
    //         OMDb
    //       </Link>
    //     </Toolbar>
    //     {user.id ? `Welcome ${user.username}` : null}
    //     <Toolbar >
    //       <Link to="/login" style={{ textDecoration: "none" }}>
    //         <Button style={{fontSize: 25}}>SIGN IN</Button>
    //       </Link>
    //       <Link to="/register" style={{ textDecoration: "none" }}>
    //         <Button style={{fontSize: 25, color: 'red'}}>SIGN UP</Button>
    //       </Link>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}

// <div>
//   <nav className="navbar navbar-dark bg-dark">
//     <Link className="navbar-brand" to="/">
//       OMDB Proyect
//     </Link>
//     {user ?  <div className="container">
//       <ul className="nav justify-content-center">
//         <li className="nav-item">
//           <Link className="nav-link active" to="/logout" onClick={handleLogOut}>
//             LOGOUT
//           </Link>
//         </li>
//       </ul>
//       <span className='navbar-brand'>
//       <h4>
//         <span>Bienvenid@ {user.length > 1 ? user[0].username : user.username}</span>
//         </h4>
//         </span>
//     </div> : <div className="container">
//       <ul className="nav justify-content-center">
//         <li className="nav-item">
//           <Link className="nav-link active" to="/login">
//             LOGIN
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/register">
//             REGISTER
//           </Link>
//         </li>
//       </ul>
//     </div>}
//   </nav>
// </div>
