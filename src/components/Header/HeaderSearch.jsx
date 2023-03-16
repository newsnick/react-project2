import React from 'react'

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search blog..."
        onChange={props.onSearch}
      />
      <button onClick={props.onSearch}>Search</button>
    </div>
  )
}

export default SearchBar
