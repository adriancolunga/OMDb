import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_FAV, GET_FAVS, DEL_FAV } from "../../reducers/actions/userActions";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";
import { Error } from "@material-ui/icons";
import useStyles from "../layout/movieCardStyle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MovieCard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.loggedIn);
  const movies = useSelector((state) => state.movies.movies);
  const favorites = useSelector((state) => state.users.allFavs);

  console.log('LAS MOVIES', movies)

  const favID = favorites.map(({ imdbID }) => imdbID);

  const handleAddFav = async (movie) => {
    await dispatch(ADD_FAV(movie));
    dispatch(GET_FAVS());
  };

  const handleDelFav = async (id) => {
    await dispatch(DEL_FAV(id));
    dispatch(GET_FAVS());
  };

  useEffect(() => {
    dispatch(GET_FAVS());
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
   
      <Grid container spacing={4}>
        {movies ? movies.map((movie, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={movie.Poster}
                    title="Image title"
                  />
                  <CardContent className={classes.cardConten}>
                    <Typography variant="h5" gutterBottom>
                      {movie.Title}
                    </Typography>
                    <Typography>{movie.Year}</Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "space-between" }}>
                    <Link
                      to={`/movie/${movie.imdbID}`}
                      style={{ textDecoration: "none" }}
                    >
                      Details
                    </Link>
                    {favID.includes(movie.imdbID) ? (
                      <FavoriteIcon
                        onClick={() => handleDelFav(movie.imdbID)}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        onClick={() => handleAddFav(movie)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
  </Container>









    // <Container className={classes.cardGrid} maxWidth="md">
    //   {movies.Response === "False" ? (
    //     <Container className={classes.errorSearch}>
    //       <Error fontSize="large" />
    //       <Typography variant="h5" className={classes.noMatch}>
    //         No Match
    //       </Typography>
    //     </Container>
    //   ) : (
    //     <Grid container spacing={4}>
    //       {movies.Response === "True"
    //         ? movies/* .Search */.map((movie, i) => (
    //             <Grid item xs={12} sm={4} key={i}>
    //               <Card className={classes.card}>
    //                 <CardMedia
    //                   className={classes.cardMedia}
    //                   image={movie.Poster}
    //                   title="Image title"
    //                 />
    //                 <CardContent className={classes.cardConten}>
    //                   <Typography variant="h5" gutterBottom>
    //                     {movie.Title}
    //                   </Typography>
    //                   <Typography>{movie.Year}</Typography>
    //                 </CardContent>
    //                 <CardActions style={{ justifyContent: "space-between" }}>
    //                   <Link
    //                     to={`/movie/${movie.imdbID}`}
    //                     style={{ textDecoration: "none" }}
    //                   >
    //                     Details
    //                   </Link>
    //                   {favID.includes(movie.imdbID) ? (
    //                     <FavoriteIcon
    //                       onClick={() => handleDelFav(movie.imdbID)}
    //                       style={{ cursor: "pointer" }}
    //                     />
    //                   ) : (
    //                     <FavoriteBorderIcon
    //                       onClick={() => handleAddFav(movie)}
    //                       style={{ cursor: "pointer" }}
    //                     />
    //                   )}
    //                   {/* {addFav ? (
    //                     <FavoriteIcon
    //                       onClick={() => handleDelFav(movie.imdbID)}
    //                       style={{ cursor: "pointer" }}
    //                     />
    //                   ) : (
    //                     <FavoriteBorderIcon
    //                       onClick={() => handleAddFav(movie)}
    //                       style={{ cursor: "pointer" }}
    //                     />
    //                   )} */}
    //                 </CardActions>
    //               </Card>
    //             </Grid>
    //           ))
    //         : null}
    //     </Grid>
    //   )}
    // </Container>
  );
};

{
  /* <div className="col-md-3 mt-5">
  <div className="card card-body bg-dark text-center h-100">
    <img className="w-100 mb-2" src={Poster} alt="Movie Cover" />
    <h5 className="text-light card-title">
      {Title} - {Year}
    </h5>
    <Link className="btn btn-primary" to={`/movie/${imdbID}`}>
      Movie Details
      <i className="fas fa-chevron-rigth" />
    </Link>

    <button className={`btn ${isFavorite ? 'btn-success' : 'btn-primary'}` } onClick={handleSubmit} >
      Add favorite
      <i className="fas fa-chevron-rigth" />
    </button>
  </div>
</div> */
}
