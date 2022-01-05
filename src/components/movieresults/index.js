import React from "react";

import { MovieList } from "../movielist";

export const MovieResults = props => {

  const { totalCount, results, genres, loading, page, totalPages } = props;

  if(loading) {
    return <div>LOADING</div>
  } else {
    return (
      <div id="movie-result-wrapper">
        {
          totalCount > 0 &&
          <p id="movie-counter">
            {totalCount} movies | Page {page} of {totalPages}
            {/*I would insert the pagination in here*/}
          </p>
        }
        <MovieList
          movies={results || []}
          genres={genres || []}
        />
      </div>
    )
  }
}