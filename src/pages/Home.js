import Carousel from '../components/carousel/Carousel';
import Search from '../components/search/Search';
import useFetch from '../util/useFetch'

export default function Home() {

  const apiKey = process.env.REACT_APP_APIKEY;
  const { data: movies, isLoading: movieIsLoading, error: movieError} = useFetch('https://api.themoviedb.org/3/trending/movie/week?api_key='+apiKey)
  const { data: tv, isLoading: tvIsLoading, error: tvError} = useFetch('https://api.themoviedb.org/3/trending/tv/week?api_key='+apiKey)
  // const { data: discover, isLoading: discoverIsLoading, error: discoverError} = useFetch(
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate`
  // )

  return (
    <div>
      {/* <div className='section'>
        {discoverError && <div>{discoverError}</div>}
        {discoverIsLoading && <div>Loading...</div>}
        {discover && discover.results && (
          <Header movie={discover.results[0]} />
        )}
      </div> */}

      <Search />
      
      <div className='section'>
        <h1>Trending Movies</h1>
        {movieError && <div>{movieError}</div>}
        {movieIsLoading && <div>Loading...</div>}
        {movies && movies.results && (
          <Carousel data={movies.results} />
        )}
      </div>
      <div className='section'>
        <h1>Trending TV</h1>
        {tvError && <div>{tvError}</div>}
        {tvIsLoading && <div>Loading...</div>}
        {tv && tv.results && (
          <Carousel data={tv.results} />
        )}
      </div>
    </div>
  )
}
