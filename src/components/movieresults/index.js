import React, { Profiler } from "react";

import { MovieList } from "../movielist";
import {Loader} from "../loader";

export const MovieResults = props => {

  const profilerCallback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    const obj = [
      {
        label: 'Profiler ID',
        value: id
      },
      {
        label: 'Phase',
        value: phase
      },
      {
        label: 'Actual Time',
        value: actualTime
      },
      {
        label: 'Base Time',
        value: baseTime
      },
      {
        label: 'Start Time',
        value: startTime
      },
      {
        label: 'Commit Time',
        value: commitTime
      }
    ]
    console.table(obj)
  }

  const { totalCount, results, genres, loading, page, totalPages } = props;

  if(loading) {
    return (
      <div className="loader-wrapper">
        <Loader/>
        <p>Loading</p>
      </div>
    )
  } else {
    if (totalCount === 0) {
      return <h3>No films found for this search</h3>
    } else {
      return (
        <div id="movie-result-wrapper">
          {
            totalCount > 0 &&
            <p id="movie-counter">
              {totalCount.toLocaleString()} movies | Page {page.toLocaleString()} of {totalPages.toLocaleString()}
              {/*I would insert the pagination in here*/}
            </p>
          }
          <Profiler
            id="movie-list-profiler"
            onRender={profilerCallback}
          >
            <MovieList
              movies={results || []}
              genres={genres || []}
            />
          </Profiler>
        </div>
      )
    }
  }
}