import React from 'react'

export default function PersonDetails({person}) {
  return (
    <div className='details-top pd40'>
      <img 
        className="profile-image"
        alt="not found"
        src={`https://www.themoviedb.org/t/p/w300_and_h450_face${person.profile_path}`}
      />
      <div className='details-text'>
      <h2>{person.name}</h2>
        <h4>Born: {person.birthday} in {person.place_of_birth}</h4>
        {person.deathday !== null && (
          <h4>Died: {person.deathday}</h4>
        )}
        <h4>Known for: {person.known_for_department}</h4>
          
        <div className="details-overview">{person.biography}</div>
      </div>
    </div>
  )
}
