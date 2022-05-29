import imdb from '../../images/imdb.png'
import { dateFormatter } from '../../util/util'

export default function PersonDetails({person}) {
  return (
    <div className='details-top pd40'>
      <div className="person-image">
        {person.profile_path !== null ? 
          <img 
            className="profile-image"
            alt="not available"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_face${person.profile_path}`}
          />
        : 'not available'}
      </div>
      <div className='details-text'>
      <h2>{person.name}</h2>
        <h4>Born: {dateFormatter(person.birthday)} in {person.place_of_birth}</h4>
        {person.deathday !== null && (
          <h4>Died: {dateFormatter(person.deathday)}</h4>
        )}
        <h4>Known for: {person.known_for_department}</h4>
        {person.imdb_id &&
            <a href={`https://www.imdb.com/name/${person.imdb_id}`} target="_blank" rel="noreferrer">
              <img 
                alt="IMDb"
                src={imdb}
              />
            </a>
          }
        <div className="details-overview">{person.biography}</div>
      </div>
    </div>
  )
}
