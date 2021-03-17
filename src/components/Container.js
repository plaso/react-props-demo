import React from 'react'

const Container = ({ color }) => {
  return (
    <div
      className="Container"
      style={{ backgroundColor: color, width: '50%', height: 100 }}
    />
  )
}

Container.defaultProps = {
  color: '#000'
}

export default Container