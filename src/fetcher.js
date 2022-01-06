import axios from 'axios';

export const getMoviesByKeywordAndYear = (keyword, year, language) => {
  const validYear = year && !isNaN(year) && year >= 1900
  const baseUrl = 'http://api.themoviedb.org/3/'
  let action = (!keyword) ? 'discover' : 'search'
  const baseQuery = `/movie?api_key=385fe68560b2a9b4ef3f8ff794ec9d66&language=${language}`
  let sort = (!keyword) ? '&sort_by=popularity.desc' : ''
  let url = `${baseUrl}${action}${baseQuery}${sort}`

  if (!keyword && validYear) {
    url += `&year=${year}`
  }
  if (keyword) {
    url += !validYear ? `&query=${keyword}` : `&query=${keyword}&year=${year}`
  }

  return axios({
    method: 'get',
    url
  })
    .then(response => response.data);
}