import React from 'react';
import '../../styles/search.scss';

const Search = ({ searchVal, onChange, onSubmit }) => (
  <nav>
    <form>
      <input name="search-input" type="text" id="search-input" placeholder="Find images..." value={searchVal} onChange={e => onChange(e)} />
      <input type="submit" value="Search" id="search-btn" onClick={e => onSubmit(e)} />
    </form>
  </nav>
);

export default Search;
