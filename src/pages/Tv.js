import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel';
import TvDetails from '../components/movie/TvDetails';
import Providers from '../components/movie/Providers';
import useFetch from '../util/useFetch';
import { useEffect, useState } from 'react';
import VideoEmbed from '../components/movie/VideoEmbed';

export default function Movie() {
  const  {id} = useParams()
  const apiKey = process.env.REACT_APP_APIKEY;
  const [trailer, setTrailer] = useState('')

  const { data: tv, isLoading: tvIsLoading, error: tvError} = useFetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=credits`
  )
  const { data: providers, isLoading: providersIsLoading, error: providersError} = useFetch(
    `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${apiKey}`
  )
  const { data: videos, isLoading: videosIsLoading, error: videosError} = useFetch(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}`
  )

  useEffect(() => {
    if (videos) {
      
      videos.results.some((video) => {
        if (video.site === 'YouTube' && video.type === 'Trailer') {
          setTrailer(video.key)
          return true
        }
        return false
      })
    }
  }, [videos])

  return (
    <div className='details section'>
      {tvIsLoading && <div>Loading...</div> }
      {tvError && <div>{tvError}</div> }
      {tv && (
        <TvDetails movie={tv} />
      )}
      {tv && tv.credits.cast.length > 0 && (
        <>
          <h1>Cast</h1>
          <Carousel data={tv.credits.cast} />
        </>
      )}
      {videosIsLoading && <div>Loading...</div> }
      {videosError && <div>{videosError}</div> }
      {trailer && (
        <>
          <h1 className='pd-t25'>Trailer</h1>
          <VideoEmbed id={trailer} />
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
