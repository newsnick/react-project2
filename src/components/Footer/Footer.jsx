import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.a}>
          <a href="https://www.facebook.com">facebook</a>
          <a className={styles.a} href="https://www.twitter.com">
            twitter
          </a>
          <a href="https://www.instagram.com">instagram</a>
        </div>
        <div className="copyright">
          © 2023 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
