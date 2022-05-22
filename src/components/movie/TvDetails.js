import { Link } from "react-router-dom"

export default function MovieDetails({movie, directors}) {
  return (
    <>
      <div className='details-top pd40'>
        <div className="carousel-image">
          <img 
            className="details-image"
            alt="not available"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          />
        </div>
        <div className='details-text'>
          <h2>{movie.name}</h2>
          <h4>Release year: {new Date(movie.first_air_date).getFullYear()}</h4>
          {(movie.vote_average) ? 
            <h4>Rating: {movie.vote_average}/10</h4> : 'Rating: n/a'}
            <h4>Created by:</h4>
            {movie.created_by.map(item => {
              return <h4 key={item.id}><Link to={`/person/${item.id}`}>{item.name}</Link></h4>
            })}
          <div className="details-overview">{movie.overview}</div>
        </div>
      </div>
      
    </>
  )
}
