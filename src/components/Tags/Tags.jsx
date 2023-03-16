import React from 'react'

const tags = ['React', 'JavaScript', 'CSS', 'HTML', 'Web Development']

const Tag = () => {
  return (
    <div>
      <h2>Tags</h2>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default Tag
