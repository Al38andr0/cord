import React from 'react';
import ReactDOM from 'react-dom';
import { MovieItem } from './index';
import {prettyDOM} from "@testing-library/react";

it('Movie item render correctly', () => {
  const div = document.createElement('div');
  const movie = {
    "adult": false,
    "backdrop_path": "foo.jpg",
    "genres": [
      {
        id: 1,
        label: 'foo'
      },
      {
        id: 2,
        label: 'bar'
      }
    ],
    "id": 1,
    "original_language": "en",
    "original_title": "Foo bar",
    "overview": "Foo bar cog",
    "popularity": 7811.558,
    "poster_path": "bar.jpg",
    "release_date": "2021-12-15",
    "title": "Foo foo bar",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 3586
  }

  ReactDOM.render(<MovieItem movie={movie} />, div);
  console.log(prettyDOM(div))
  const imgElements = div.querySelectorAll('img')
  const titleElement = div.querySelector('.movie-item-header > h2')
  const ratingElement = div.querySelector('.movie-item-header > span')
  const genreElements = div.querySelectorAll('.movie-item-genres > span')
  const overviewElement = div.querySelector('.movie-item-overview')
  const releaseElement = div.querySelector('.movie-item-release')

  expect(imgElements.length).toBe(2)
  expect(imgElements[0].src).toBe('https://www.themoviedb.org/t/p/w220_and_h330_face/bar.jpg');
  expect(imgElements[0].alt).toBe('Foo foo bar');
  expect(imgElements[0].classList.contains('desktop')).toBeTruthy();
  expect(imgElements[1].src).toBe('https://www.themoviedb.org/t/p/w220_and_h330_face/bar.jpg');
  expect(imgElements[1].alt).toBe('Foo foo bar');
  expect(imgElements[1].classList.contains('mobile')).toBeTruthy();
  expect(titleElement.innerHTML).toBe('Foo foo bar');
  expect(ratingElement.innerHTML).toBe('8.4');
  expect(genreElements.length).toBe(2)
  expect(genreElements[0].innerHTML).toBe('foo')
  expect(genreElements[1].innerHTML).toBe('bar')
  expect(overviewElement.innerHTML).toBe('Foo bar cog')
  expect(releaseElement.innerHTML).toBe('Release date: 15/12/2021')

  ReactDOM.unmountComponentAtNode(div);
});
