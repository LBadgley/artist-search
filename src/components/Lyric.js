import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style/lyricsStyle.css';

function Lyric({ artist, title, lyrics }) {
  return (
    <div className={styles.lyricsStyle}>
      <h2 className={styles.lyricsStyle}>{artist}</h2>
      <h3 className={styles.lyricsStyle}>{title}</h3>
      <p className={styles.lyricsStyle}>{lyrics}</p>
    </div>
  );
}

Lyric.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string
};

export default Lyric;
