import React from 'react';
import ArtistRow from './ArtistRow.js';
import ArtistService from '../services/ArtistService.js';

class ArtistTable extends React.Component {
  constructor(props) {
    super(props);
    this.searchText = props.searchText;
    this.artists = [];
  }

  componentWillReceiveProps(nextProps) {
    this.searchText = nextProps.searchText;
    this.searchArtist();   
  }

  searchArtist() {
    if (this.searchText.length <= 3) return;

    let self = this;
    let service = new ArtistService();

    service.getListOfArtists(this.searchText)
      .then(function(res) {
        self.artists =  res.data.message.body.artist_list;
        self.forceUpdate();
      })
      .catch(function (error) {
          console.log(error);
      });
  }

  render() {
    const rows = [];
    
      this.artists.forEach((e) => {
      rows.push(
        <ArtistRow
          artist={e.artist}
        />
      );
    });

    return (
      <table>
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
    );
  }
}

  export default ArtistTable;
