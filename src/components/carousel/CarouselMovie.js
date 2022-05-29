import { Link } from "react-router-dom";

export default function CarouselMovie({item}) {
  return (
    <Link to={`/movie/${item.id}`}>
      <div className="carousel-image">
        {item.poster_path !== null ? 
          <img 
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
            alt="not available"
          />
        : 'not available'}
      </div>
      <p>{item.title}</p>
    </Link>
  )
}
