import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || //prettier-ignore
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && `row_posterLarge`}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                    />    
            ) //prettier-ignore
        )}
      </div>
    </div>
  );
};

export default Row;
