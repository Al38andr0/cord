import React, { useState, useEffect } from "react";
import * as fetcher from "../../fetcher";
import SearchFilters from "../../components/searchfilter";
import { MovieResults } from "../../components/movieresults";

export const Discover = () => {
  const [data, setData] = useState({
    loading: false,
    results: [],
    totalCount: 0,
    page: 1,
    totalPages: 1
  })
  const [input, setInputs] = useState({
    keyword: '',
    year: 0
  })
  const options = {
    genre: [
      {
        id: 12,
        label: "Adventure"
      },
      {
        id: 28,
        label: "Action"
      },
      {
        id: 16,
        label: "Animation"
      },
      {
        id: 35,
        label: "Comedy"
      },
      {
        id: 80,
        label: "Crime"
      },
      {
        id: 99,
        label: "Documentary"
      },
      {
        id: 18,
        label: "Drama"
      },
      {
        id: 10751,
        label: "Family"
      },
      {
        id: 14,
        label: "Fantasy"
      },
      {
        id: 36,
        label: "History"
      },
      {
        id: 27,
        label: "Horror"
      },
      {
        id: 10402,
        label: "Music"
      },
      {
        id: 9648,
        label: "Mystery"
      },
      {
        id: 10749,
        label: "Romance"
      },
      {
        id: 878,
        label: "Science Fiction"
      },
      {
        id: 10770,
        label: "TV Movie"
      },
      {
        id: 53,
        label: "Thriller"
      },
      {
        id: 10752,
        label: "War"
      },
      {
        id: 37,
        label: "Western"
      },
    ],
    rating: [
      { id: 7.5, name: 7.5 },
      { id: 8, name: 8 },
      { id: 8.5, name: 8.5 },
      { id: 9, name: 9 },
      { id: 9.5, name: 9.5 },
      { id: 10, name: 10 }
    ],
    language: [
      { id: 'GR', name: 'Greek' },
      { id: 'EN', name: 'English' },
      { id: 'RU', name: 'Russian' },
      { id: 'PO', name: 'Polish' }
    ]
  }


  useEffect(() => {
    data.loading = false
    fetcher.getMoviesByNameAndYear(null, null, 'EN').then(response => {
      setData({
        totalCount: response.total_results,
        results: response.results,
        loading: false,
        page: response.page,
        totalPages: response.total_pages
      })
    })
  }, [])

  return (
    <div id="discover-container">
      <div id="mobile-header">Discover</div>
      <MovieResults
        totalCount={data.totalCount}
        totalPages={data.totalPages}
        page={data.page}
        results={data.results}
        genres={options.genre}
        loading={data.loading}
      />
      <div id="movie-filters">
        <SearchFilters
          genres={options.genre}
          ratings={options.rating}
          languages={options.language}
        />
      </div>
    </div>
  )
}
