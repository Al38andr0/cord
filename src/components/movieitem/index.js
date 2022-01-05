import React from "react";

export const MovieItem = (props) => {

  const {movie} = props;


  return (
    <div className="movie-item-wrapper">
      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`} alt={movie.title}/>
      <div className="movie-item-info">
        <div className="movie-item-header">
          <h2>{movie.title}</h2>
          <span>{movie.vote_average}</span>
        </div>
        <p className="movie-item-genres ">
          {movie.genres.map(g => <span key={g.id} className="highlighted">{g.label}</span>)}
        </p>
        <p>{movie.overview}</p>
        <p className="highlighted">{movie.release_date}</p>
      </div>
    </div>
  )
}