import React from "react";
import { useSelector } from "react-redux";
import { SearchForm } from "./SearchForm";
// import { MoviesContainer } from "./MoviesContainer"
import { MovieCard } from "./MovieCard";
import Loading from "../layout/Loading";

export default function Landing() {
  const loading = useSelector((state) => state.movies.loading);

  return (
    <div className="container">
      <SearchForm />
      {loading ? <Loading /> : <MovieCard />}
    </div>
  );
}
