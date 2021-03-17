import React from 'react'
import '../assets/css/Student.css'

export const BlockText = ({ field, value }) => {
  return (
    <p>
      <b>{field}: </b>
      {value}
    </p>
  )
}

const Student = ({ name, gender, ironhacker, children }) => {
  const title = <h1>Student</h1>

  const generateIronhackerText = () => {
    if (ironhacker) {
      return 'I am an Ironhacker'
    } else {
      return 'I wish I could be an Ironhacker'
    }
  }

  return (
    <div className="Student">
      {title}
      
      <BlockText field="Name" value={name} />

      <BlockText field="Gender" value={gender} />

      {generateIronhackerText()}

      {children}
    </div>
  )
}

Student.defaultProps = {
  name: 'Undefined',
  gender: 'null',
  ironhacker: false
}

export default Student