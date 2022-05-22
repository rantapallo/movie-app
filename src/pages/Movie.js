import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel';
import MovieDetails from '../components/movie/MovieDetails';
import Providers from '../components/movie/Providers';
import useFetch from '../util/useFetch';

export default function Movie() {
  const  {id} = useParams()
  const apiKey = process.env.REACT_APP_APIKEY;

  const [directors, setDirectors] = useState([])

  const { data: movie, isLoading: movieIsLoading, error: movieError} = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits`
  )
  const { data: providers, isLoading: providersIsLoading, error: providersError} = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`
  );

  

  useEffect(() => {
    if (movie) {
      const listDirectors = async () => {
        await movie.credits.crew.map((credit) => (
          credit.job === 'Director'  && !directors.some(item => item.id === credit.id) ? 
            setDirectors(director => [...director, {'name':credit.name, 'id':credit.id}]) : ''
        ))
      }
      listDirectors()
    }
  },[movie])

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
      {providersIsLoading && <div>Loading...</div> }
      {providersError && <div>{providersError}</div> }
      {providers && providers.results.hasOwnProperty('FI') && (
        <Providers providers={providers} />
      )}
    </div>
      
  )
}
