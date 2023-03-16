import React from 'react'

function Comment() {
  return (
    <div className="comment">
      <form>
        <textarea placeholder="Leave a comment" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Comment
