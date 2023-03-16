import React from 'react'
import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <div className={styles.sidebarcontainer}>
      <h2>Recent Posts</h2>
      <ul>
        <li>Post 1</li>
        <li>Post 2</li>
        <li>Post 3</li>
      </ul>
      <h2>Categories</h2>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
      </ul>
    </div>
  )
}

export default Sidebar
