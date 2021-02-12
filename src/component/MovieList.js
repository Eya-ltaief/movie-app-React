import React from "react";
import MovieCard from "./MovieCard";
import StarRatingComponent from 'react-star-rating-component';

function MovieList({ movies }) {
    return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}>
      {movies.map((el) => (
          <MovieCard key={el.id} movie={el} />
        ))}
    </div>
  );
};

export default MovieList;  
