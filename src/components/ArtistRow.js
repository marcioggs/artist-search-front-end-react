import React from 'react';

class ArtistRow extends React.Component {
    render() {
      const artist = this.props.artist;
  
      return (
        <tr>
          <td>{artist.artist_name}</td>
          <td>{artist.artist_country}</td>
          <td>{artist.artist_rating}</td>
          <td>{artist.artist_twitter_url}</td>
        </tr>
      );
    }
  }

  export default ArtistRow;
