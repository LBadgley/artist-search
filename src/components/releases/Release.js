import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../style/releasesStyle.css';

function Release({ releaseArt, releaseName, releaseId, artist }) {
  return (
    <Link to={`/songs/${artist}/${releaseId}`}>
      <img className={styles.releasesStyles} width="100px" src={`${releaseArt}`} />
      {releaseName}
    </Link>
  );
}

Release.propTypes = {
  releaseName: PropTypes.string,
  releaseArt: PropTypes.string,
  releaseId: PropTypes.string,
  artist: PropTypes.string
};

export default Release;
