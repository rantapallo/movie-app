import List from '../components/list/List';
import useFetch from '../util/useFetch';

export default function TopRated() {

  const apiKey = process.env.REACT_APP_APIKEY;
  const { data: movies, isLoading: moviesIsLoading, moviesError} = useFetch('https://api.themoviedb.org/3/trending/all/week?api_key='+apiKey);

  return (
    <div>
      {moviesError && <div>{moviesError}</div>}
      {moviesIsLoading && <div>Loading...</div>}
      {movies && (
        <List data={movies} header="Trending movies and series" />
      )}
    </div>
  )
}
