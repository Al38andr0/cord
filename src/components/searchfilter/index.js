import React from "react";
import { ExpandableFilter } from "../expandablefilter";
import { SearchBar } from "../searchbar";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export const SearchFilters = (props) => {
  const { genres, ratings, languages, setKeyword, setYear } = props;

  const searchFields = [
    {
      id: 1,
      imageSrc: SearchIcon,
      imageAlt: 'Search for movie',
      placeholder: 'Search for movie',
      unique: 'search-title',
      type: 'text',
      callback: setKeyword
    },
    {
      id: 2,
      imageSrc: CalendarIcon,
      imageAlt: 'Search year',
      placeholder: 'Year of release',
      unique: 'search-year',
      type: 'number',
      callback: setYear
    }
  ]
  const filterFields = [
    {
      id: 1,
      label: 'Select genre(s)',
      type: 'genre',
      collection: genres
    },
    {
      id: 2,
      label: 'Select min. vote',
      type: 'rating',
      collection: ratings.reverse()
    },
    {
      id: 3,
      label: 'Select language',
      type: 'language',
      collection: languages
    }
  ]
  return (
    <div id="filter-wrapper">
      <div
        id="form-container"
        className="filter-container"
      >
        {searchFields.map(
          i =>
            <SearchBar
              key={i.id}
              data={i}
            />
        )}
      </div>
      <div
        id="checkbox-container"
        className="filter-container"
      >
        <p>Movie</p>
        {filterFields.map(
          i =>
            <ExpandableFilter
              key={i.id}
              data={i}
            />
        )}
      </div>
    </div>
  )
}
