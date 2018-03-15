import React from 'react';
import PropTypes from 'prop-types';
import ArtistRow from './ArtistRow.js';
import ArtistService from '../services/ArtistService.js';
import Loading from './Loading.js';

class ArtistTable extends React.Component {
  constructor(props) {
    super(props);
    this.isLoading = false;
    this.searchText = props.searchText;
    this.artists = [];
  }

  static propTypes = {
    searchText: PropTypes.string
  };

  componentWillReceiveProps(nextProps) {
    this.searchText = nextProps.searchText;
    if (!this.searchText) {
      this.artists = [];
    } else {
      this.searchArtist();   
    }
  }

  searchArtist() {
    if (this.searchText.length <= 3) return;

    let self = this;
    let service = new ArtistService();
    this.isLoading = true;

    service.getListOfArtists(this.searchText)
      .then(function(res) {
        self.artists =  res.data.message.body.artist_list;
        self.isLoading = false;
        self.forceUpdate();
      })
      .catch(function (error) {
          console.log(error);
          self.isLoading = false;
          self.forceUpdate();
      });
  }

  render() {
    const rows = [];
    
    this.artists.forEach((e) => {
      rows.push(
        <ArtistRow
          artist={e.artist}
          key={e.artist.artist_id}
        />
      );
    });

    const loadingComp = this.isLoading? (
      <Loading />
    ) : null;

    return (
      <div>
        <table className='container table-striped table-hover text-center'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Rating</th>
              <th>Twitter</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        {loadingComp}
      </div>
    );
  }
}

export default ArtistTable;
