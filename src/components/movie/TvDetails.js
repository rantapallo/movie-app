import { Link } from "react-router-dom"
import imdb from '../../images/imdb.png'
import { dateFormatter } from "../../util/util"

export default function TvDetails({movie}) {
  return (
    <>
      <div className='details-top pd40'>
        <div className="carousel-image">
          {movie.poster_path !== null ? 
            <img 
              className="details-image"
              alt="not available"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            />
          : 'not available'}
        </div>
        <div className='details-text'>
          <h2>{movie.name}</h2>
          <h4>Release: {dateFormatter(movie.first_air_date)}</h4>
          {(movie.vote_average) ? 
            <h4>Rating: {movie.vote_average}/10</h4> : 'Rating: n/a'}
            <h4>Created by:</h4>
            {movie.created_by.map(item => {
              return <h4 key={item.id}><Link to={`/person/${item.id}`}>{item.name}</Link></h4>
            })}
            {movie.imdb_id &&
              <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">
                <img 
                  alt="IMDb"
                  src={imdb}
                />
              </a>
            }
          <div className="details-overview">{movie.overview}</div>
        </div>
      </div>
      
    </>
  )
}
