import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchItem({item}) {
  const [name, setName] = useState('')
  const [imagePath, setImagePath] = useState('')
  const [linkPath, setLinkPath] = useState('')

  useEffect(() => {
    if (item.media_type === 'tv') {
      setName(item.name)
      setImagePath(item.poster_path)
      setLinkPath('tv')

    } else if (item.media_type === 'movie') {
      setName(item.title)
      setImagePath(item.poster_path)
      setLinkPath('movie')

    } else if (item.media_type === 'person') {
      setName(item.name)
      setImagePath(item.profile_path)
      setLinkPath('person')

    }

  }, [item])

  return (
    <>
    <Link to={`./${linkPath}/${item.id}`}>
      <div className='list-item'>
        <div className='list-image'>
          <img 
            src={`https://www.themoviedb.org/t/p/w94_and_h141_face${imagePath}`}
            alt="image not available"
          />
        </div>
        <div className='list-text'>
          <h3>{name}</h3>
          {item.media_type === 'person' ? (
            <div className='list-knownfor'>
              {item.known_for_department && <div>Known for {item.known_for_department}</div>}
              <p>{item.known_for?.map((movie) => (
                <span key={movie.id}>
                  {movie.media_type === 'movie' ? 
                    <Link to={`./movie/${movie.id}`}>{movie.title}</Link> : 
                    <Link to={`./tv/${movie.id}`}>{movie.name}</Link>
                  }
                </span>
              ))}
              </p>
            </div>
          ) : (
            <div>
              {item.media_type === 'movie' ? 
              item.release_date && (<p>({item.release_date})</p>) :
              item.first_air_date && (<p>(TV series {item.first_air_date})</p>)}
              <div className='list-overview'>{item.overview}</div>
            </div>
          )}
          </div>
        </div>
      </Link>
    </>
  )
}
