import { useParams } from "react-router-dom"
import PersonCredits from "../components/person/PersonCredits";
import PersonDetails from "../components/person/PersonDetails";
import useFetch from '../util/useFetch'


export default function Person() {
  const {id} = useParams()
  const apiKey = process.env.REACT_APP_APIKEY;
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&append_to_response=combined_credits`
  const { data: person, isLoading, error} = useFetch(url);

  return (
    <div className='details section'>
      {isLoading && <div>Loading...</div> }
      {error && <div>{error}</div> }
      {person && (
        <div>
          <PersonDetails person={person} />
          {person && person.combined_credits.cast.length > 0 && (
            <PersonCredits credits={person.combined_credits} />
          )}
        </div>
      )}
    </div>
  )
}
