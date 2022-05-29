import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import CarouselMovie from './CarouselMovie';
import CarouselTv from './CarouselTv';
import CarouselPerson from './CarouselPerson';

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
                <CarouselTv item={item} />
              ) : (
                item.media_type === 'movie' ? (
                  // movie
                  <CarouselMovie item={item} />
                ) : (
                  // person
                  <CarouselPerson item={item} />
                )
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
