import { useState, useEffect } from 'react';

import { Button } from '..';

import { GenreResponseProps } from '../../App';

import { api } from '../../services';

import '../../styles/sidebar.scss';

interface SideBarProps {
  selectedGenreId: number;
  onChangeGenre: (genreId: number) => void;
}

export function SideBar({ onChangeGenre, selectedGenreId }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onChangeGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
