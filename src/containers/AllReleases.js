import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Releases from '../components/releases/Releases';
import fetchReleases from '../services/fetchReleases';
import Paging from '../components/Paging';
import styles from '../style/releasesStyle.css';


export default class AllReleases extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    releases: null,
    artistId: this.props.match.params.artistId,
    offset: 0,
    page: 1,
    totalPages: 0,
    artist: this.props.match.params.artist
  }
  
  releasesLoad = () =>{
    const { artistId, offset } = this.state;
    fetchReleases(artistId, offset)
      .then(response => {
        const { releases } = response;
        return this.setState({ releases: releases, totalPages: Math.ceil(response.count / 25), offset: response.offset });
      });
  }

  nextPage = () => {
    this.setState(state => {
      return {
        page: (state.page + 1),
        offset: (state.offset + 25)
      };
    });
  }

  previousPage = () => {
    this.setState(state => {
      return {
        page: (state.page - 1),
        offset: (state.offset - 25)
      };
    });
  }

  componentDidMount() {
    this.releasesLoad();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.page === prevState.page) return null;
    fetchReleases(this.state.artistId, this.state.offset)
      .then(response => {
        const { releases } = response;
        return this.setState({ releases: releases });
      });
  }

  render() {
    const { releases, totalPages, page, artist } = this.state;
    return (
      <>
        <Paging currentPage={page} totalPages={totalPages} nextPage={this.nextPage} previousPage={this.previousPage} />
        <div className={styles.div}>
          {releases && <Releases releases={releases} artist={artist}/>}
        </div>
      </>
    );
  }
}
