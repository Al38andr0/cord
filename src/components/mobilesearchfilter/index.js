import React, { useEffect } from "react";
import {useLocation} from "react-router-dom";
import {SearchBar} from "../searchbar";
import SearchIcon from "../../images/search-icon-yellow.png";
import FilterIcon from "../../images/filter-icon.png";

export const MobileSearchFilter = props => {
  const { setKeyword } = props
  const location = useLocation()
  const searchFields = [
    {
      id: 1,
      imageSrc: SearchIcon,
      imageAlt: 'Search for movie',
      placeholder: 'Search for movie',
      unique: 'search-title',
      type: 'text',
      callback: setKeyword
    }
  ]

  const manageFilter = () => {
    const moreFiltersElement = document.querySelector('#more-filters')
    const filterElement = document.querySelector('#filter-wrapper')
    if (moreFiltersElement.classList.contains('filter-open')) {
      filterElement.classList.add('showed')
    } else {
      filterElement.classList.remove('showed')
    }
  }

  useEffect(() => {
    const moreFiltersElement = document.querySelector('#more-filters')
    moreFiltersElement.classList.remove('change')
    manageFilter()
  }, [location.pathname])

  const handleClick = e => {
    e.target.classList.toggle("filter-open");
    manageFilter()
  }

  return (
    <div id="mobile-filter-wrapper">
      {searchFields.map(
        i =>
          <SearchBar
            key={i.id}
            data={i}
          />
      )}
      <img
        id="more-filters"
        src={FilterIcon}
        alt="More filter"
        onClick={e => handleClick(e)}
      />
    </div>
  )
}