import React from 'react';

class ArtistRow extends React.Component {
    render() {
      const artist = this.props.artist;
      const flagClass = artist.artist_country?  'flag flag-' + artist.artist_country.toLowerCase() : '';

      return (
        <tr>
          <td>{artist.artist_name}</td>
          <td><img src="blank.gif" className={flagClass} /></td>
          <td>{artist.artist_rating}</td>
          <td>{artist.artist_twitter_url}</td>
        </tr>
      );
    }
  }

  export default ArtistRow;
