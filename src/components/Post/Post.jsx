import React from 'react'

function Post(props) {
  const { author, date, body } = props

  return (
    <div>
      <h2>{author}</h2>
      <p>{date}</p>
      <p>{body}</p>
    </div>
  )
}

export default Post
