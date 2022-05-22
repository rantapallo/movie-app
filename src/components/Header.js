import React, { useEffect } from 'react'

export default function Header({movie}) {

  useEffect(() => {
    console.log(movie)
  }, [movie])
  return (
    <div>
      <img 
        src={`https://www.themoviedb.org/t/p/w300_and_h450_face${movie.poster_path}`}
        alt="not found"
      />
    </div>
  )
}
