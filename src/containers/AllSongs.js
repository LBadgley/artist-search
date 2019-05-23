import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Songs from '../components/songs/Songs';
import fetchSongs from '../services/fetchSongs';

export default class AllSongs extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }
  state = {
    songs: null,
    releaseId: this.props.match.params.releaseId,
    artist: this.props.match.params.artist
  }

  componentDidMount() {
    fetchSongs(this.state.releaseId)
      .then(response => {
        return this.setState({ songs: response.recordings, });
      });
  }

  render() {
    const { songs, artist } = this.state;
    return (
      <>
          {songs && <Songs songs={songs} artist={artist} />}
      </>
    );
  }
}
