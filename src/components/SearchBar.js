import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  static propTypes = {
    onSearchTextChange: PropTypes.func.isRequired
  };
  
  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }
  
  render() {
    return (
      <form className="text-center">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchText}
          onChange={this.handleSearchTextChange}
        />
        <span id='loading'></span> 
      </form>
    );
  }
}

export default SearchBar;
