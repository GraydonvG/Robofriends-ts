import React from 'react';
import './SearchBox.css';

function SearchBox({ searchChange, placeHolder }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue br3 mb3"
        type="search"
        placeholder={placeHolder}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
