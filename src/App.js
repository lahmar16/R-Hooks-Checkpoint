// App.js
import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './task';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The Dark Knight',
      description: '“The Dark Knight” is not a simplistic tale of good and evil“The Dark Knight” is not a simplistic tale of good and evil',
      posterURL: '1.jpg',
      rating: 4.7,
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over several years.',
      posterURL: '2.jpg',
      rating: 4.9,
    },
    {
      title: 'Very Bad Trip',
      description: 'Trois jeunes hommes cherchent un ami qui a disparu au cours dans une super fête à Las Vegas. Le trio doit tenter de se souvenir de toutes les mauvaises décisions prises la veille afin de retrouver leur ami et le ramener à temps pour son mariage prévu à Los Angeles',
      posterURL: '3.jpg',
      rating: 3.8,
    },
    // Add more movies here
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

 

 


  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilter({ ...filter, [filterType]: value });
  };

  const handleNewMovieChange = (field, value) => {
    setNewMovie({ ...newMovie, [field]: value });
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const ratingMatch = filter.rating === '' || movie.rating >= parseFloat(filter.rating);
    return titleMatch && ratingMatch;
  });

  const addMovie = () => {
    setMovies([...movies, { ...newMovie }]);
    // Clear the input fields after adding a new movie
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };
 
  


  return (
    <div className="App">
      <h1>My Movie App</h1>
      <div className="filter-and-button">
        <Filter handleFilterChange={handleFilterChange} />
        <div className="add-movie-form">
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) => handleNewMovieChange('title', e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) => handleNewMovieChange('description', e.target.value)}
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) => handleNewMovieChange('posterURL', e.target.value)}
          />
          <input
            type="text"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) => handleNewMovieChange('rating', e.target.value)}
          />
          <button onClick={addMovie}>Add New Movie</button>
        </div>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );


}

export default App;
