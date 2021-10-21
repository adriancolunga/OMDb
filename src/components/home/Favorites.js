// ***** MATERIAL UI *****
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Grid, Card, CardMedia } from "@mui/material";
// ***** MATERIAL UI *****

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_FAVS, DEL_FAV } from "../../reducers/actions/userActions";

export default function Favorites() {
  const user = useSelector(state=> state.users.loggedIn)
  const favs = useSelector((state) => state.users.allFavs);
  const [aux, setAux] = useState(true)
  const dispatch = useDispatch();

  const handleDelFav = async (id) => {
   await dispatch(DEL_FAV(id));
    setAux(!aux)
  };

  useEffect(() => {
    dispatch(GET_FAVS(user.id));
  }, [aux]);

  //display: 'flex', justifyContent: 'space-between'
  return (
    <>
      {/* <Container> */}
      <Grid container /* spacing={2} */>
        {" "}
        {/* poner en 15 ejemplo grilla */}
        {favs
          ? favs.map(({ imdbID, Title, Poster }) => (
              <Grid item xs={8} sm={4} key={imdbID}>
                <Card
                  sx={{
                    width: 600,
                    height: 250,
                    bgcolor: "lightgray",
                    marginTop: 10,
                    borderRadius: 10,
                    marginLeft: 5,
                  }}
                >
                  <CardMedia
                    sx={{
                      margin: 3,
                      flexDirection: "row",
                      alignItems: " center",
                      display: "flex",
                      position: "relative",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={Poster}
                      sx={{ width: 200, height: 200, marginRight: 10, objectFit: 'cover' }}
                    />
                    <Typography variant="h5" align="center">
                      {Title}
                    </Typography>
                    <CardMedia sx={{ display: "flex", marginTop: 20 }}>
                      <DeleteOutlineIcon
                        onClick={() => handleDelFav(imdbID)}
                        style={{ cursor: "pointer", fontSize: 30 }}
                      />
                    </CardMedia>
                  </CardMedia>
                </Card>
              </Grid>
            ))
          : (
            <Typography variant='h5'>
              No favs added
            </Typography>
          )}
      </Grid>
      {/* </Container> */}
    </>
  );
}
