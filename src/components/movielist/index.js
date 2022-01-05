import React from "react";
import { MovieItem } from '../movieitem';

export const MovieList = props => {

  const { movies, genres } = props;

  return (
    <div id="movies-wrapper">
      {
        movies.map(
          m => {
            m.genres = []
            m.genre_ids.forEach(g => m.genres.push(genres.find(i => i.id === g)))
            return (
              <MovieItem
                key={m.id}
                movie={m}
              />
            )
          }
        )
      }
    </div>
  )
}