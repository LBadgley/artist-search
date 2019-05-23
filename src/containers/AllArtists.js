import React, { PureComponent } from 'react';
import Artists from '../components/artists/Artists';
import fetchArtists from '../services/fetchArtists';
import Paging from '../components/Paging';

export default class AllArtists extends PureComponent{
  searchParams = new URLSearchParams(window.location.search);
  state = {
    searchTerm: this.searchParams.get('searchTerm') || '',
    artists: [],
    offset: 0,
    page: 1,
    totalPages: 0
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
    fetchArtists(this.state.searchTerm, this.state.offset)
      .then(response => {
        const { artists, count, offset } = response;
        return this.setState({ page: 1, artists: artists, totalPages: Math.ceil(count / 25), offset: offset });
      });
  }

  componentDidUpdate(_, prevState) {
    if(this.state.page === prevState.page) return null;
    fetchArtists(this.state.searchTerm, this.state.offset)
      .then(response => {
        const { artists } = response;
        return this.setState({ artists: artists });
      });
  }

  render() {
    const { artists, page, totalPages } = this.state;
    return (
      <>
        <Paging currentPage={page} totalPages={totalPages} nextPage={this.nextPage} previousPage={this.previousPage} />
        <Artists artists={artists} />
      </>
    );
  }
}
