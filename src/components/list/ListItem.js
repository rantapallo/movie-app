import { Link } from "react-router-dom";

const TopListItem = ({movie, index}) => {
  return ( 
    <>
      <Link to={`/${typeof movie.name !== 'undefined' ? 'tv' : 'movie'}/${movie.id}`}>
        <div className="list-item">
          <div className="list-rank">
            <h2>{index+1}.</h2>
          </div>
          <div className="list-image">
            <img 
              className="movie-poster-tiny"
              alt="image not available"
              src={`https://www.themoviedb.org/t/p/w94_and_h141_face${movie.poster_path}`}
            />
          </div>
          <div className="list-text">
            <h2>{typeof movie.name !== 'undefined' ? movie.name : movie.title}</h2>
            <h4>{typeof movie.name !== 'undefined' ? 
              new Date(movie.first_air_date).getFullYear() : 
              new Date(movie.release_date).getFullYear()}
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
 
export default TopListItem;