import React from 'react'

const categories = ['Technology', 'Travel', 'Food', 'Fashion']

const Category = () => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  )
}

export default Category
