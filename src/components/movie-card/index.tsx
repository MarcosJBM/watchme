import { Star, Clock } from 'react-feather';
import { memo } from 'react';

import { MovieCardProps } from '../../types';

import '../../styles/movie-card.scss';

function MovieCardComponent(props: MovieCardProps) {
  return (
    <div className='movie-card'>
      <img src={props.poster} alt={props.title} />

      <div>
        <div className='movie-info'>
          <span>{props.title}</span>
          <div className='meta'>
            <div>
              <Star /> {props.rating}
            </div>

            <div>
              <Clock /> {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MovieCard = memo(MovieCardComponent);
