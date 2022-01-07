import React from "react";
import './style.scss';

export const MovieItem = (props) => {

  const {movie} = props;


  return (
    <div className="movie-item-wrapper">
      <img
        className="desktop"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-item-info">
        <div className="movie-item-header">
          <h2>{movie.title}</h2>
          <span>{movie.vote_average}</span>
        </div>
        <p className="movie-item-genres ">
          {movie.genres.map(g => <span key={g.id} className="highlighted">{g.label}</span>)}
        </p>
        <img
          className="mobile"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
          alt={movie.title}
        />
        <p className="movie-item-overview">{movie.overview}</p>
        <p className="movie-item-release highlighted">Release date: {new Date(movie.release_date).toLocaleDateString()}</p>
      </div>
    </div>
  )
}