import { useParams } from 'react-router-dom'
import Carousel from '../components/carousel/Carousel';
import TvDetails from '../components/movie/TvDetails';
import Providers from '../components/movie/Providers';
import useFetch from '../util/useFetch';
import { useEffect, useState } from 'react';
import VideoEmbed from '../components/movie/VideoEmbed';

export default function Tv() {
  const  {id} = useParams()
  const apiKey = process.env.REACT_APP_APIKEY;
  const [trailer, setTrailer] = useState('')

  const { data: tv, isLoading, error} = useFetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=credits,videos,watch/providers`
  )

  useEffect(() => {
    if (tv) {
      
      tv.videos.results.some((video) => {
        if (video.site === 'YouTube' && video.type === 'Trailer') {
          setTrailer(video.key)
          return true
        }
        return false
      })
    }
  }, [tv])

  return (
    <div className='details section'>
      {isLoading && <div>Loading...</div> }
      {error && <div>{error}</div> }
      {tv && (
        <TvDetails movie={tv} />
      )}
      {tv && tv.credits.cast.length > 0 && (
        <>
          <h1>Cast</h1>
          <Carousel data={tv.credits.cast} />
        </>
      )}
      {tv && trailer && (
        <>
          <h1 className='pd-t25'>Trailer</h1>
          <VideoEmbed id={trailer} />
        </>
      )}
      {tv && tv['watch/providers'] && tv['watch/providers'].results.hasOwnProperty('FI') && (
        <Providers providers={tv['watch/providers']} />
      )}
    </div>
      
  )
}
