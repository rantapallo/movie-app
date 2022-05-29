import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Carousel from '../components/carousel/Carousel';
import MovieDetails from '../components/movie/MovieDetails';
import Providers from '../components/movie/Providers';
import VideoEmbed from '../components/movie/VideoEmbed';
import useFetch from '../util/useFetch';

export default function Movie() {
  const  {id} = useParams()
  const apiKey = process.env.REACT_APP_APIKEY;

  const [directors, setDirectors] = useState([])
  const [trailer, setTrailer] = useState('')

  const { data: movie, isLoading: movieIsLoading, error: movieError} = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits,videos,watch/providers`
  )

  useEffect(() => {
    if (movie) {
      const listDirectors = async () => {
        await movie.credits.crew.map((credit) => (
          credit.job === 'Director'  && !directors.some(item => item.id === credit.id) ? 
            setDirectors(director => [...director, {'name':credit.name, 'id':credit.id}]) : ''
        ))
      }
      listDirectors()
      if (!trailer && movie.videos.results.length > 0) {
        movie.videos.results.some((video) => {
          if (video.site === 'YouTube' && video.type === 'Trailer') {
            setTrailer(video.key)
            return true
          }
          return false
        })
      }
    }
  },[movie, directors, trailer])

  return (
    <div className='details section'>
      {movieIsLoading && <div>Loading...</div> }
      {movieError && <div>{movieError}</div> }
      {movie && (
        <MovieDetails movie={movie} directors={directors} />
      )}
      {movie && movie.credits?.cast.length > 0 && (
        <>
          <h1>Cast</h1>
          <Carousel data={movie.credits.cast} />
        </>
      )}
      {trailer && (
        <>
          <h1 className='pd-t25'>Trailer</h1>
          <VideoEmbed id={trailer} />
        </>
      )}
      {movie && movie['watch/providers'] && movie['watch/providers'].results.hasOwnProperty('FI') && (
        <Providers providers={movie['watch/providers']} />
      )}
    </div>
      
  )
}
