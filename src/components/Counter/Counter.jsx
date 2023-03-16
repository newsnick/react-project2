//import React from 'react'
import React, { useState } from 'react'
import styles from './Counter.module.css'
import AboutMe from '../AboutMe/AboutMe'

const Counter = () => {
  const [count, setCount] = useState(0)

  function plus() {
    setCount(count + 1)
  }
  function minus() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className={styles.box}>
      <h1>{count}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
      <button onClick={reset}>reset</button>
      <AboutMe />
    </div>
  )
}

export default Counter

/* //import React from 'react'
import React, { useState } from 'react'
import styles from './Counter.module.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  function plus() {
    setCount(count + 1)
  }
  function minus() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className={styles.box}>
      <h1>{count}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter */

/* const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.box}>
      <h1>{count}</h1>
      <button className={styles.btn}>plus</button>
      <button>minus</button>
    </div>
  )
} */
