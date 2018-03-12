import React from 'react';

class ArtistRow extends React.Component {

    getFlagClass(country) {
      let clazz = null;
      if (country) {
        clazz = 'flag flag-' + country.toLowerCase();
      }
      return clazz;
    }

    getTwitterLinkIcon(url) {
      let linkIcon = null;
      if (url) {
        linkIcon = (
          <a href={url} target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        );
      }
      return linkIcon;
    }

    render() {
      const artist = this.props.artist;
      const flagClass = this.getFlagClass(artist.artist_country);
      const twitterLinkicon = this.getTwitterLinkIcon(artist.artist_twitter_url);
      
      return (
        <tr>
          <td>{artist.artist_name}</td>
          <td><img src="blank.gif" className={flagClass} /></td>
          <td>{artist.artist_rating}</td>
          <td>{twitterLinkicon}</td>
        </tr>
      );
    }
  }

  export default ArtistRow;
