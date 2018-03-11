import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  
  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }
  
  render() {
    return (
      <form class="text-center">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchText}
          onChange={this.handleSearchTextChange}
        />
      </form>
    );
  }
}

export default SearchBar;
