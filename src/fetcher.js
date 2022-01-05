import axios from 'axios';

export const getMoviesByNameAndYear = (name, year, language) => {
  let url = `http://api.themoviedb.org/3/discover/movie?api_key=385fe68560b2a9b4ef3f8ff794ec9d66&language=${language}&sort_by=popularity.desc`
  if (name) {
    url += `&query=${name}`
  }
  if (year) {
    url += `&year=${year}`
  }
  return axios({
    method: 'get',
    url
  })
    .then(response => response.data);
}

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}