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

    getStarsRating(hundredRating) {
      const fiveRating = Math.round(hundredRating/20);
      let stars = [];

      for (let i = 1; i <= 5; i++) {
        if (fiveRating >= i) {
          //stars += 'x';
          stars.push(<i className="fas fa-star"></i>);
        } else {
          //stars += 'o'
          stars.push(<i className="far fa-star"></i>);
        }
      }

      return stars;
    }

    render() {
      const artist = this.props.artist;
      const flagClass = this.getFlagClass(artist.artist_country);
      const twitterLinkicon = this.getTwitterLinkIcon(artist.artist_twitter_url);
      const starsRating = this.getStarsRating(artist.artist_rating);
      
      return (
        <tr>
          <td>{artist.artist_name}</td>
          <td><img src="blank.gif" className={flagClass} /></td>
          <td>{starsRating}</td>
          <td>{twitterLinkicon}</td>
        </tr>
      );
    }
  }

  export default ArtistRow;
