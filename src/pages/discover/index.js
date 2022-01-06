import React, { useState, useEffect } from "react";
import * as fetcher from "../../fetcher";
import { SearchFilters } from "../../components/searchfilter";
import { MovieResults } from "../../components/movieresults";

export const Discover = () => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [keyword, setKeyword] = useState()
  const [year, setYear] = useState()
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
      { id: 7.5, label: 7.5 },
      { id: 8, label: 8 },
      { id: 8.5, label: 8.5 },
      { id: 9, label: 9 },
      { id: 9.5, label: 9.5 },
      { id: 10, label: 10 }
    ],
    language: [
      { id: 'GR', label: 'Greek' },
      { id: 'EN', label: 'English' },
      { id: 'RU', label: 'Russian' },
      { id: 'PO', label: 'Polish' }
    ]
  }

  useEffect(() => {
    setLoading(true)
    fetcher.getMoviesByKeywordAndYear(keyword, year, 'en-US').then(response => {
      setLoading(false)
      setResults(response.results)
      setTotalCount(response.total_results)
      setPage(response.page)
      setTotalPages(response.total_pages)
    })
  }, [keyword, year])

  return (
    <div id="discover-container">
      <div id="mobile-header">Discover</div>
      <MovieResults
        totalCount={totalCount}
        totalPages={totalPages}
        page={page}
        results={results}
        genres={options.genre}
        loading={loading}
      />
      <SearchFilters
        genres={options.genre}
        ratings={options.rating}
        languages={options.language}
        setKeyword={setKeyword}
        setYear={setYear}
      />
    </div>
  )
}
