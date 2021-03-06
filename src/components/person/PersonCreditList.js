import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const PersonCreditList = ({list, title}) => {
  const [newList, setNewList] = useState([])

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
  }

  useEffect(() => {
    let getList = getUniqueListBy(list, 'id')
    setNewList(getList)
  }, [list])
  return ( 

    <div className="section credit-list pd-tb25">
      <h2 className='pd-lr25 pd-b25'>
        {title}
      </h2>
      <div>
      {newList.map((credit) => (
        <Link key={credit.credit_id} to={`/${typeof credit.name !== 'undefined' ? 'tv' : 'movie'}/${credit.id}`}>
          <div className="credit-item">
            <div className="credit-text">
              <h2>
                {typeof credit.name !== 'undefined' ? 
                credit.name : 
                credit.title} {credit.release_date === '1900-01-01' ? '' :
                  ` (${new Date(credit.release_date).getFullYear()})`}
              </h2>
              {credit.character &&
                <h4>as {credit.character} {credit.media_type === 'tv' && 
                <>
                  ({credit.episode_count} episodes)
                </>
                }</h4>
              }
              
              {credit.vote_average > 0 &&
                <h4>Rating {credit.vote_average}/10</h4>
              }
            </div>
          </div>
        </Link>
      ))}
      </div>
   </div>
  )
}
 
export default PersonCreditList