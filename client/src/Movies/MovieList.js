import React from 'react';
import {Link} from 'react-router-dom'

export default function MovieList ({ movies }) {
  if(!movies){
    return "loading..."
  }
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}



function MovieDetails( props ) {
  const { title, director, metascore } = props.movie;
  console.log(props)
  return (
    <Link to={`movies/${props.movie.id}`} style={{ textDecoration: 'none', color:'black' }}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
