import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

export default function Carousel({data}) {
  return (
    <div>
      <Splide 
        options={{
          perPage: 5,
          pagination: false,
          arrows: true,
          drag: 'free',
          breakpoints: {
            1250: {
              perPage: 4,
            },
            1100: {
              perPage: 3,
            },
            800: {
              perPage: 2,
            },
            600: {
              perPage: 1,
            },
          },
          gap: '0px'
        }}>

        {data.map((item) => (
          <SplideSlide key={item.id}>
            <div className="carousel-card">
              {item.media_type === 'tv' ? (
                // tv
                <Link to={`/tv/${item.id}`}>
                  <div className="carousel-image">
                    <img 
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                      alt="not available"
                    />
                  </div>
                  <p>{item.name}</p>
                </Link>
              ) : (
                item.title ? (
                  // movie
                  <Link to={`/movie/${item.id}`}>
                    <div className="carousel-image">
                      <img 
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="not available"
                      />
                    </div>
                    <p>{item.title}</p>
                  </Link>
                ) : (
                  // person
                  <Link to={`/person/${item.id}`}>
                    <div className="carousel-image">
                      <img 
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.profile_path}`}
                        alt="not available"
                      />
                    </div>
                    <p>{item.name}</p>
                    <p>as {item.character}</p>
                  </Link>
                )
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
