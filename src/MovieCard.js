// MovieCard.js
import React from 'react';
import './MovieCard.css'; // Import the CSS file

const MovieCard = ({ movie, onDelete  }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p className="rating">Rating: {movie.rating}</p>
      <button onClick={() => { onDelete(); window.location.reload(); }} style={{ backgroundColor: 'blue', color: 'white' }}>Delete</button>


    </div>
  );
};

export default MovieCard;

