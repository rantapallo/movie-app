import { useEffect, useState } from 'react';
import List from '../components/list/List';

export default function TopRated() {

  const [optionValue, setOptionValue] = useState('movie')
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('movies')

  const apiKey = process.env.REACT_APP_APIKEY
  
  const fetchData = async (val = null) => {
    try {
      setIsLoading(true)
      let option = val ? val : optionValue
      if (option === 'tv') {
        setText('TV series')
      } else if (option === 'person') {
        setText('people')
      } else {
        setText('movies')
      }
      const res = await fetch(`https://api.themoviedb.org/3/trending/${option}/week?api_key=${apiKey}`)
      const data = await res.json()
      setIsLoading(false)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  

  const toggleOption = (val) => {
    setOptionValue(val)
    fetchData(val)
      
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="list">
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <select value={optionValue} onChange={(e) => toggleOption(e.target.value)}>
            <option value="movie">Movies</option>
            <option value="tv">TV series</option>
            <option value="person">People</option>
          </select>

          <List data={data} header={`Trending ${text}`} />
        </>
      )}
    </div>
  )
}
