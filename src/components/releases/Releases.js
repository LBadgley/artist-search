import React from 'react';
import Release from './Release';
import PropTypes from 'prop-types';
import styles from '../../style/releasesStyle.css';

function Releases({ releases, artist }) {
  const releaseList = releases.map(release => {
    return (
      <>
        <p>
          {release.title}
        </p>
        <li style={styles.li} key={release.id}>
          <Release  releaseArt={release.coverArt} releaseId={release.id} artist={artist} />
        </li>
      </>
    );
  });
  
  return (
    <ul>{releaseList}</ul>
  );
}
    
Releases.propTypes = {
  releases: PropTypes.array.isRequired,
  artist: PropTypes.string
};

export default Releases;
