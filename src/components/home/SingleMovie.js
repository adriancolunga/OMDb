import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAV, GET_FAVS, DEL_FAV } from "../../reducers/actions/userActions";
import { API_SINGLEMOVIE, LOADING } from "../../reducers/actions/searchActions";

import Loading from "../layout/Loading";

// ***** MATERIAL UI *****
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Button,
  Divider,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";

// ***** STYLES *****
import useStyles from "../layout/singleMovieCardStyle";

export const SingleMovie = ({ id }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const movie = useSelector((state) => state.movies.movie);
  const loading = useSelector((state) => state.movies.loading);
  const favorites = useSelector((state) => state.users.allFavs);
  const user = useSelector(state=> state.users.loggedIn)
  const [aux, setAux] = useState(true);

  const isFav = favorites.filter(({ imdbID }) => imdbID === id).length > 0;

  const {
    Poster,
    Genre,
    Released,
    Rated,
    imdbRating,
    Director,
    Writer,
    Actors,
    Plot,
  } = movie;

  const favHandler = async (e) => {
    e.persist();
    const value = e.target.innerHTML;
    if (value === "Remove from favorite") {
      await dispatch(DEL_FAV(id));
      setAux(!aux);
    } else {
      await dispatch(ADD_FAV(movie));
      setAux(!aux);
    }
  };

  useEffect(() => {
    dispatch(API_SINGLEMOVIE(id));
  }, []);

  useEffect(() => {
    dispatch(GET_FAVS(user.id));
  }, [aux]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className={classes.container}>
          <Card className={classes.img}>
            <CardMedia component="img" alt="poster" image={Poster} />
          </Card>
          <Card>
            <CardContent className={classes.info}>
              <Typography gutterBottom variant="h5" component="div">
                <strong>Genre:</strong> {Genre}
              </Typography>
              <Divider />
              <Typography gutterBottom variant="h5" component="div">
                <strong>Released:</strong> {Released}
              </Typography>
              <Divider />
              <Typography gutterBottom variant="h5" component="div">
                <strong>Rated:</strong> {Rated}
              </Typography>
              <Divider />
              <Typography gutterBottom variant="h5" component="div">
                <strong>imdbRating:</strong> {imdbRating}
              </Typography>
              <Divider />
              <Typography gutterBottom variant="h5" component="div">
                <strong>Director:</strong> {Director}
              </Typography>
              <Divider />
              <Typography gutterBottom variant="h5" component="div">
                <strong>Writer:</strong> {Writer}
              </Typography>
              <Divider />
              <Typography gutterBottom variant="h5" component="div">
                <strong>Actors:</strong> {Actors}
              </Typography>
              <Divider />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>About:</strong> {Plot}
                </Typography>
                <Divider />
              </CardContent>
            </CardContent>
          </Card>
        </Container>
      )}
      {loading ? null : (
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          marginTop={4}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Back</Button>
          </Link>

          <Button variant="outlined" onClick={(e) => favHandler(e)}>
            {isFav ? "Remove from favorite" : "Add to favorite"}
          </Button>
        </Stack>
      )}
    </>
  );
};
