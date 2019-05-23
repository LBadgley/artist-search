import React from 'react';
import Song from './Song';
import PropTypes from 'prop-types';

function Songs({ songs, artist }) {
  const songList = songs.map(song => {
    return (
      <li key={song.id}>
        <Song songTitle={song.title} artist={artist} />
      </li>
    );
  });

  return (
    <div>
      <ul>{songList}</ul>
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.array.isRequired,
  artist: PropTypes.string
};

export default Songs;
