import React from "react";
import MovieCard from "./MovieCard";


function MovieList({ movies,searchText,searchRate}) {
    return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}>
      {movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchText.toLowerCase())
      ).filter((movie) =>
        movie.rating >= searchRate
      ).map((el) => (
          <MovieCard key={el.id} movie={el}
          />))}
    </div>
  );
};

export default MovieList;  
