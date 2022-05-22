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
    <div className="section credit-list pd-lr40 pd-b25">
      <h2 className='pd-tb25'>
        {title}
      </h2>
      <div>
      {newList.map((credit) => (
        <h4 key={credit.credit_id}>
        <Link to={`/${credit.media_type === 'movie' ? 'movie' : 'tv'}/${credit.id}`}>
            <>
            {credit.media_type === 'movie' ? credit.title : credit.name}
            {credit.release_date === '1900-01-01' ? ' (n/a)' :
            ` (${new Date(credit.release_date).getFullYear()})`}
            </>
        </Link>
        </h4>
      ))}
      </div>
   </div>
  )
}
 
export default PersonCreditList