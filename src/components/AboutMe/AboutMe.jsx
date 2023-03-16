/* import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <h1>About Me Page</h1>
      <p>This is some text</p>
    </div>
  )
}

export default AboutMe
 */

//import React from 'react'
import React, { useState } from 'react'

const AboutMe = () => {
  //const name = 'Antonio'
  //const title = 'info about me'

  const [name, setName] = useState('Bob')
  const [value, setValue] = useState('Bob')

  return (
    <div>
      <h1>info</h1>
      <p>Name </p>
    </div>
  )
}

export default AboutMe
