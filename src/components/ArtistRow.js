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
      const zeroToFiveRating = Math.round(hundredRating/20);
      const solidStar = <i className="fas fa-star"></i>;
      const blankStar = <i className="far fa-star"></i>;

      let stars = Array(zeroToFiveRating).fill(solidStar);
      stars = stars.concat(Array(5 - zeroToFiveRating).fill(blankStar));

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
