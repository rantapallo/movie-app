import { useEffect, useState } from "react"
import PersonCreditList from "./PersonCreditList"

export default function PersonCredits({credits}) {
  const [director, setDirector] = useState([])
  const [writer, setWriter] = useState([])
  const [screenplay, setScreenplay] = useState([])
  const [producer, setProducer] = useState([])
  const [exproducer, setExproducer] = useState([])
  const [creator, setCreator] = useState([])
  const [cast, setCast] = useState([])
    

  function sortJobs (jobs) {
    const sortedJobs = jobs.sort((a, b) => 
    new Date(...b.release_date.split('/').reverse()) - new Date(...a.release_date.split('/').reverse()));
    return sortedJobs
  }

  const handleJobs = (crew) => {
    // change tv series first_air_date to release_date to match with movies
    let newJob = crew.map(({
      first_air_date: release_date,
      ...rest
    }) => ({
      release_date,
      ...rest
    }))

    // some series/movies missing release date
    newJob.forEach((e) => {
      if (!e.release_date) {
        e.release_date = "1900-01-01";
      }
    })
    const sortedJob = sortJobs(newJob)
    return sortedJob
  }

  const splitJobs = (sortedCrew) => {
    sortedCrew.forEach((job) => {
      switch(job.job) {
        case 'Director':
          setDirector((prevDirector) => {
            return [...prevDirector, job]
          })
          break
        case 'Writer':
          setWriter((prevWriter) => {
            return [...prevWriter, job]
          })
          break
        case 'Screenplay':
          setScreenplay((prevScreenplay) => {
            return [...prevScreenplay, job]
          })
          break
          case 'Producer':
        setProducer((prevProducer) => {
            return [...prevProducer, job]
          })
          break
        case 'Executive Producer':
          setExproducer((prevExproducer) => {
            return [...prevExproducer, job]
          })
          break
        case 'Creator':
          setCreator((prevCreator) => {
            return [...prevCreator, job]
          })
          break
      }
    })
  }

  useEffect(() => {
    // movielist in api in random order
    const handledJobs = handleJobs(credits.crew)
    splitJobs(handledJobs)
    
    const handledCast = handleJobs(credits.cast)
    setCast(handledCast)
  }, [credits, handleJobs])

  return ( 
    <div className="details-person-credits">
      <div className="details-person-cast">
        {cast.length > 0 && (
          <PersonCreditList list={cast} title="Cast" />
        )}
        {director.length > 0 && (
          <PersonCreditList list={director} title="Director" />
        )}
        {creator.length > 0 && (
          <PersonCreditList list={creator} title="Creator" />
        )}
        {writer.length > 0 && (
          <PersonCreditList list={writer} title="Writer" />
        )}
        {screenplay.length > 0 && (
          <PersonCreditList list={screenplay} title="Screenplay" />
        )}
        {producer.length > 0 && (
          <PersonCreditList list={producer} title="Producer" />
        )}
        {exproducer.length > 0 && (
          <PersonCreditList list={exproducer} title="Executive Producer" />
        )}
      </div>
    </div>
   )
}
