import React from 'react';
import SearchBar from './SearchBar';

const SearchSection = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <SearchBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      handleSearch={handleSearch}
    />
  );
};

export default SearchSection;
