import React from 'react'
import CardSlider from './CardSlider';

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to)
  }

  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="Must See" data={getMoviesFromRange(20, 30)} />
      <CardSlider title="Popular in Your Area" data={getMoviesFromRange(30, 40)} />
      <CardSlider title="Bingeable Shows" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Familiar Favorites" data={getMoviesFromRange(50, 60)} />
    </div>
  )
}