import { Link } from "react-router-dom";
import { dateFormatter } from '../../util/util'

const ListItem = ({movie, index}) => {
  return ( 
    <>
      <Link to={`/${typeof movie.name !== 'undefined' ? 'tv' : 'movie'}/${movie.id}`}>
        <div className="list-item">
          <div className="list-rank">
            <h2>{index+1}.</h2>
          </div>
          <div className="list-image">
            {movie.poster_path !== null ? 
            <img 
              className="movie-poster-tiny"
              alt="not available"
              src={`https://www.themoviedb.org/t/p/w94_and_h141_face${movie.poster_path}`}
            />
            : 'not available'}
          </div>
          <div className="list-text">
            <h2>{typeof movie.name !== 'undefined' ? movie.name : movie.title}</h2>
            <h4>{typeof movie.name !== 'undefined' ? 
              dateFormatter(movie.first_air_date) :
              dateFormatter(movie.release_date)}
            </h4>
            {movie.vote_average > 0 &&
              <h4>Rating {movie.vote_average}/10</h4>
            }
          </div>
        </div>
      </Link>
    </>
   )
}
 
export default ListItem;