import React, {useEffect, useState} from "react";
import service from './service';

const Movies = () => {
  const [movies, setMovies] = useState([]);
useEffect(() =>
  service.findAllMovies()
    .then(movies => setMovies(movies)), []);
const deleteMovie = (movie) =>
  service.deleteMovie(movie._id)
    .then(() => setMovies(
      movies.filter(m => m !== movie)));
  return(
    <div>
      <h2>Movies</h2>
      <ul className="list-group">
        {
          movies.map(movie =>
        <li key={movie._id}
            className="list-group-item">
          <button
            className="btn btn-danger"
            onClick={() => deleteMovie(movie)}>
            Delete
          </button>
          {movie.title}
        </li>
          )
        }
      </ul>
    </div>
  )
};

export default Movies;