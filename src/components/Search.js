import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import SearchItem from './SearchItem'

export default function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const fetchData = async () => {
    const apiKey = process.env.REACT_APP_APIKEY
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${searchValue}&api_key=${apiKey}`)
    const data = await res.json()
    setSearchResults(data.results)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchValue.trim() !== '') {
      fetchData()
    }
  }

  return (
    <>
      <div className='section'>
        <div className="search-title">
          <h1>Search for movies, series and people</h1>
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <div className='search'>
            <input
              type="text"
              className="search-field"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
            />
            <button
              className="btn search-btn"
              title="Search"
              type="submit" >
              <BiSearchAlt2 />
            </button>
          </div>
        </form>
        </div>
        {searchResults.length > 0 && 
          <div className='section pd-tb25'>
            {searchResults.map((item) => (
              <SearchItem item={item} key={item.id} />
            ))}
          </div>
        }
      </>
  )
}
