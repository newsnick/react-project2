import React from 'react'

const Search = ({ posts, onSearch }) => {
  return (
    <div>
      <form>
        <label>
          Search Posts:
          <input type="text" />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
