import { Link } from "react-router-dom";

export default function CarouselPerson({item}) {
  return (
    <Link to={`/person/${item.id}`}>
      <div className="carousel-image">
        {item.profile_path !== null ? 
          <img 
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.profile_path}`}
            alt="not available"
          />
        : 'not available'}
      </div>
      <p>{item.name}</p>
      {item.character &&
        <p>as {item.character}</p>
      }
    </Link>
  )
}
