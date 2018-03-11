import React from 'react';
import SearchBar from './SearchBar.js';
import ArtistTable from './ArtistTable.js';

class SearchableArtistTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchText: ''
      };
      
      this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }
  
    handleSearchTextChange(searchText) {
      this.setState({
        searchText: searchText
      });
    }
  
    render() {
      return (
        <div className='container'>
          <SearchBar
            onSearchTextChange={this.handleSearchTextChange}
          />
          <br/>
          <ArtistTable
            searchText={this.state.searchText}
          />
        </div>
      );
    }
  }

export default SearchableArtistTable;
