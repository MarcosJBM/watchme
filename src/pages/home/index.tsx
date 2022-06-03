import { useState } from 'react';

import { Content, SideBar } from '../../components';

export function Home() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        onChangeGenre={handleClickButton}
        selectedGenreId={selectedGenreId}
      />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
