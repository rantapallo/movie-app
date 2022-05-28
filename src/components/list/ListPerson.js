import { Link } from "react-router-dom";

const ListPerson = ({person, index}) => {
  return ( 
    <>
      <Link to={`/person/${person.id}`}>
        <div className="list-item">
          <div className="list-rank">
            <h2>{index+1}.</h2>
          </div>
          <div className="list-image">
            {person.profile_path !== null ? 
            <img 
              className="movie-poster-tiny"
              alt="not available"
              src={`https://www.themoviedb.org/t/p/w94_and_h141_face${person.profile_path}`}
            />
            : 'not available'}
          </div>
          <div className="list-text">
            <h2>{person.name}</h2>
            <div className='list-knownfor'>
              {person.known_for_department && <div>Known for {person.known_for_department}</div>}
              <p>{person.known_for?.map((item) => (
                <span key={item.id}>
                  
                  &#9675; {item.media_type === 'movie' ? 
                    item.title : 
                    item.name
                  }
                </span>
              ))}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
   )
}
 
export default ListPerson;